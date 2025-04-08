from django.db import models

class Country(models.Model):
    name = models.CharField(max_length=30)


    def __str__(self):
        return self.name

class City(models.Model):
    name = models.CharField(max_length=30)
    country = models.ForeignKey(Country, on_delete=models.CASCADE)
    population = models.PositiveIntegerField()





class Subject1(models.Model):
    name = models.CharField(max_length=30)
    subject = models.CharField(max_length=30)
    email = models.EmailField()
    date = models.DateField()
    status = models.BooleanField()



class Marks(models.Model):
    subject = models.CharField(max_length=30)
    marks = models.PositiveIntegerField()
    
    #'subject','marks'