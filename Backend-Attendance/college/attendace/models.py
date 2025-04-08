from django.db import models

class Attendace(models.Model):
    name = models.CharField(max_length=255)  # Ensure this exists
    subject = models.CharField(max_length=255)  # Ensure this exists
    status = models.BooleanField()

    def __str__(self):
        return self.name