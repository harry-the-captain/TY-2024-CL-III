from django.db import models


class Student(models.Model):
    name = models.CharField(max_length=100)
    roll_number = models.CharField(max_length=15, unique=True)
    branch = models.CharField(max_length=15)
    subjects = models.CharField(max_length=15)
    year_of_enrollment = models.PositiveIntegerField()
    gender = models.CharField(max_length=10, choices=[('Male', 'Male'), ('Female', 'Female'), ('Other', 'Other')])
    email = models.EmailField(unique=True)


    def __str__(self):
        return self.name