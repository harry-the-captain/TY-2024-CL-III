from django.shortcuts import render, redirect
from .models import Movie, Show
from .forms import BookingForm

def movie_list(request):
    movies = Movie.objects.all()
    return render(request, 'movie_list.html', {'movies': movies})

def show_list(request, movie_id):
    from django.shortcuts import render
from .models import Movie

def show_list(request):
    movies = Movie.objects.all()
    return render(request, 'show_list.html', {'movies': movies})

def book_ticket(request):
    # Fetch movies from the database
    movies = Movie.objects.all()  # Query to get all movies

    # Define available showtimes (you can change this dynamically if needed)
    showtimes = ["10:00 AM", "1:00 PM", "4:00 PM", "7:00 PM"]

    # If the form is submitted (POST request)
    if request.method == "POST":
        movie_id = request.POST.get("movie")
        showtime = request.POST.get("showtime")
        tickets = request.POST.get("tickets")
        name = request.POST.get("name")
        
        # Handle the booking logic (e.g., save data to the database)
        print(f"Booking tickets for movie ID {movie_id}, showtime {showtime}, by {name}. Tickets: {tickets}")

        # Redirect to a confirmation page or show a success message
        return render(request, 'confirmation.html', {"name": name, "movie_id": movie_id})

    # Render the template with movies and showtimes data
    return render(request, 'book_ticket.html', {'movies': movies, 'showtimes': showtimes})
