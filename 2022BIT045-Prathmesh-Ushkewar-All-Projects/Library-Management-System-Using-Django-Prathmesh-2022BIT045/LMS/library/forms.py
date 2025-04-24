from django import forms
from .models import Author, Book, Member, Loan, Fine

class AuthorForm(forms.ModelForm):
    class Meta:
        model = Author
        fields = ['first_name', 'last_name', 'date_of_birth', 'date_of_death', 'biography']

class BookForm(forms.ModelForm):
    class Meta:
        model = Book
        fields = ['title', 'isbn', 'author', 'publisher', 'publication_date', 'genre', 'total_copies', 'available_copies']

class MemberForm(forms.ModelForm):
    class Meta:
        model = Member
        fields = ['first_name', 'last_name', 'membership_id', 'email', 'phone_number', 'join_date']

class LoanForm(forms.ModelForm):
     class Meta:
        model = Loan
        fields = ['book', 'member', 'loan_date', 'due_date','returned']
        widgets = {
            'loan_date': forms.DateInput(attrs={'type': 'date'}),
            'due_date': forms.DateInput(attrs={'type': 'date'})
        }

class FineForm(forms.ModelForm):
    class Meta:
        model = Fine
        fields = ['loan', 'amount', 'payment_date', 'paid']
        widgets = {
            'payment_date': forms.DateInput(attrs={'type': 'date'}),
        }