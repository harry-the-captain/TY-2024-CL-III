from django.db import models
from django.core.validators import MinValueValidator
from django.utils import timezone

class Author(models.Model):
    """Represents an author of a book."""
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    date_of_birth = models.DateField(null=True, blank=True)
    date_of_death = models.DateField(null=True, blank=True)
    biography = models.TextField(blank=True)

    class Meta:
      verbose_name_plural = "Authors"


    def __str__(self):
        return f"{self.first_name} {self.last_name}"

class Book(models.Model):
    """Represents a book in the library."""
    title = models.CharField(max_length=200)
    isbn = models.CharField(max_length=20, unique=True, help_text="ISBN must be unique") # International Standard Book Number 
    author = models.ForeignKey(Author, on_delete=models.CASCADE, related_name="books") # Use related_name for reverse access
    publisher = models.CharField(max_length=100, blank=True)
    publication_date = models.DateField(null=True, blank=True)
    genre = models.CharField(max_length=100, blank=True)
    total_copies = models.PositiveIntegerField(default=1, validators=[MinValueValidator(1)]) 
    available_copies = models.PositiveIntegerField(default=1) # Initially matches total_copies

    class Meta:
        verbose_name_plural = "Books"
        ordering = ['title'] # Default order

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        """Override save method to ensure available_copies is not greater than total_copies
           and ensures available_copies is not negative"""
        if self.available_copies > self.total_copies:
            self.available_copies = self.total_copies
        if self.available_copies < 0:
            self.available_copies = 0
        super().save(*args, **kwargs)

class Member(models.Model):
    """Represents a library member."""
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    membership_id = models.CharField(max_length=20, unique=True, help_text="Unique Membership ID")
    email = models.EmailField(unique=True)
    phone_number = models.CharField(max_length=20, blank=True)
    join_date = models.DateField(default=timezone.now)

    class Meta:
        verbose_name_plural = "Members"

    def __str__(self):
        return f"{self.first_name} {self.last_name}"

class Loan(models.Model):
    """Represents a book loan transaction."""
    book = models.ForeignKey(Book, on_delete=models.CASCADE, related_name="loans") # Use related_name for reverse access
    member = models.ForeignKey(Member, on_delete=models.CASCADE, related_name="loans") # Use related_name for reverse access
    loan_date = models.DateField(default=timezone.now)
    due_date = models.DateField()
    return_date = models.DateField(null=True, blank=True)
    returned = models.BooleanField(default=False)

    class Meta:
        verbose_name_plural = "Loans"
        ordering = ['-loan_date']

    def __str__(self):
        return f"{self.member} borrowed {self.book.title} on {self.loan_date}"

    def save(self, *args, **kwargs):
      """ Overide the save method to control the available copies"""
      if not self.pk: # Check if it is a new instance
          if self.book.available_copies > 0:
            self.book.available_copies -=1
            self.book.save()
          else:
              raise Exception("No more copies available for loan")
      else:  # Check if the loan is being returned
        if self.returned and self.return_date is None:
             self.return_date = timezone.now().date()
             self.book.available_copies +=1
             self.book.save()
      super().save(*args, **kwargs)

class Fine(models.Model):
    """Represents fines incurred by members."""
    loan = models.ForeignKey(Loan, on_delete=models.CASCADE, related_name="fines") # Use related_name for reverse access
    amount = models.DecimalField(max_digits=8, decimal_places=2, validators=[MinValueValidator(0)])
    payment_date = models.DateField(null=True, blank=True)
    paid = models.BooleanField(default=False)

    class Meta:
        verbose_name_plural = "Fines"

    def __str__(self):
        return f"Fine for {self.loan.member} on {self.loan.book.title}: ${self.amount}"