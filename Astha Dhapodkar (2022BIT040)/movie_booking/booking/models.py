from django.db import models

class Movie(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    duration = models.DurationField()
    release_date = models.DateField()
    image = models.ImageField(upload_to='movie_posters/', null=True, blank=True)

    def __str__(self):
        return self.title

class Show(models.Model):
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE)
    show_time = models.DateTimeField()

    def __str__(self):
        return f"{self.movie.title} - {self.show_time}"

class Booking(models.Model):
    show = models.ForeignKey(Show, on_delete=models.CASCADE)
    customer_name = models.CharField(max_length=200)
    seats = models.PositiveIntegerField()
    booking_time = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.customer_name} - {self.show.movie.title}"
