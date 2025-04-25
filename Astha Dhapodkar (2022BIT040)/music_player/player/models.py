from django.db import models

class MusicTrack(models.Model):
    name = models.CharField(max_length=200)
    artist = models.CharField(max_length=200)
    file = models.FileField(upload_to='music/')
    cover_art = models.ImageField(upload_to='covers/', null=True, blank=True)

    def __str__(self):
        return f"{self.name} by {self.artist}"
