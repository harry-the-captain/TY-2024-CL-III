from django.db import models

# Create your models here.

# Model for Users
class User(models.Model):
    user_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)

    def __str__(self):
        return self.name

# Model for Destinations
class Destination(models.Model):
    destination_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    country = models.CharField(max_length=100)

    def __str__(self):
        return self.name

# Model for Agents
class Agent(models.Model):
    agent_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    contact = models.CharField(max_length=100)

    def __str__(self):
        return self.name

# Model for Bookings
class Booking(models.Model):
    booking_id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    destination = models.ForeignKey(Destination, on_delete=models.CASCADE)
    date = models.DateField()

    def __str__(self):
        return f"Booking {self.booking_id}"

# Model for Itineraries
class Itinerary(models.Model):
    itinerary_id = models.AutoField(primary_key=True)
    booking = models.ForeignKey(Booking, on_delete=models.CASCADE)
    details = models.TextField()

    def __str__(self):
        return f"Itinerary {self.itinerary_id}"
