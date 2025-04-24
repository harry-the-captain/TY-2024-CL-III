from django.db import models

# Student Table
class Student(models.Model):
    reg_no = models.CharField(max_length=20, primary_key=True)  # Primary Key
    name = models.CharField(max_length=100)
    branch = models.CharField(max_length=50)
    year = models.IntegerField()
    address = models.TextField()
    state = models.CharField(max_length=50)
    dist = models.CharField(max_length=50)
    city = models.CharField(max_length=50)
    country = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.name} ({self.reg_no})"

# Attendance Table
class Attendance(models.Model):
    reg_no = models.ForeignKey(Student, on_delete=models.CASCADE)  # Foreign Key
    date = models.DateField()
    subject = models.CharField(max_length=100)
    faculty = models.CharField(max_length=100)
    type = models.CharField(max_length=50, choices=[('Lecture', 'Lecture'), ('Lab', 'Lab'), ('Seminar', 'Seminar')])
    status = models.CharField(max_length=10, choices=[('Present', 'Present'), ('Absent', 'Absent')])

    def __str__(self):
        return f"{self.reg_no} - {self.subject} ({self.date})"

# Faculty Table
class Faculty(models.Model):
    faculty_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    department = models.CharField(max_length=50)
    email = models.EmailField(unique=True)

    def __str__(self):
        return self.name

# Subject Table
class Subject(models.Model):
    subject_code = models.CharField(max_length=20, primary_key=True)
    name = models.CharField(max_length=100)
    branch = models.CharField(max_length=50)
    year = models.IntegerField()
    faculty = models.ForeignKey(Faculty, on_delete=models.CASCADE)  # Foreign Key

    def __str__(self):
        return self.name

# Exam Table
class Exam(models.Model):
    exam_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    date = models.DateField()
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE)  # Foreign Key
    year = models.IntegerField()

    def __str__(self):
        return self.name

# Library Table
class Library(models.Model):
    book_id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=200)
    author = models.CharField(max_length=100)
    branch = models.CharField(max_length=50)
    year = models.IntegerField()
    borrowed_by = models.ForeignKey(Student, on_delete=models.SET_NULL, null=True, blank=True)  # Foreign Key

    def __str__(self):
        return self.title
