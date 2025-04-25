# Create your views here.
from django.shortcuts import render, redirect,  get_object_or_404
from .models import User, Booking, Destination, Agent, Itinerary
from django.http import HttpResponse

# Home view
def home(request):
    return render(request, 'home.html')

# Create User
def create_user(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        user = User(name=name, email=email)
        user.save()
        return redirect('user_list')
    return render(request, 'create_user.html')

# Read Users
def user_list(request):
    users = User.objects.all()
    return render(request, 'user_list.html', {'users': users})

# Update User
def update_user(request, user_id):
    user = get_object_or_404(User, user_id=user_id)
    if request.method == 'POST':
        user.name = request.POST['name']
        user.email = request.POST['email']
        user.save()
        return redirect('user_list')
    return render(request, 'update_user.html', {'user': user})

# Delete User
def delete_user(request, user_id):
    user = User.objects.get(user_id=user_id)
    user.delete()
    return redirect('user_list')

# CRUD for Bookings, Destinations, Agents, Itineraries can follow similar patterns

# List Destinations
def destination_list(request):
    destinations = Destination.objects.all()
    return render(request, 'destination_list.html', {'destinations': destinations})

# Create Destination
def create_destination(request):
    if request.method == 'POST':
        name = request.POST['name']
        country = request.POST['country']
        Destination.objects.create(name=name, country=country)
        return redirect('destination_list')
    return render(request, 'create_destination.html')

# Update Destination
def update_destination(request, destination_id):
    destination = get_object_or_404(Destination, destination_id=destination_id)
    if request.method == 'POST':
        destination.name = request.POST['name']
        destination.country = request.POST['country']
        destination.save()
        return redirect('destination_list')
    return render(request, 'update_destination.html', {'destination': destination})

# Delete Destination
def delete_destination(request, destination_id):
    destination = get_object_or_404(Destination, destination_id=destination_id)
    if request.method == 'POST':
        destination.delete()
        return redirect('destination_list')
    return render(request, 'delete_destination.html', {'destination': destination})

# List Agents
def agent_list(request):
    agents = Agent.objects.all()
    return render(request, 'agent_list.html', {'agents': agents})

# Create Agent
def create_agent(request):
    if request.method == 'POST':
        name = request.POST['name']
        contact = request.POST['contact']
        Agent.objects.create(name=name, contact=contact)
        return redirect('agent_list')
    return render(request, 'create_agent.html')

# Update Agent
def update_agent(request, agent_id):
    agent = get_object_or_404(Agent, agent_id=agent_id)
    if request.method == 'POST':
        agent.name = request.POST['name']
        agent.contact = request.POST['contact']
        agent.save()
        return redirect('agent_list')
    return render(request, 'update_agent.html', {'agent': agent})

# Delete Agent
def delete_agent(request, agent_id):
    agent = get_object_or_404(Agent, agent_id=agent_id)
    if request.method == 'POST':
        agent.delete()
        return redirect('agent_list')
    return render(request, 'delete_agent.html', {'agent': agent})

# List Bookings
def booking_list(request):
    bookings = Booking.objects.all()
    return render(request, 'booking_list.html', {'bookings': bookings})

# Create Booking
def create_booking(request):
    if request.method == 'POST':
        user_id = request.POST['user_id']
        destination_id = request.POST['destination_id']
        date = request.POST['date']
        Booking.objects.create(
            user_id=user_id, 
            destination_id=destination_id, 
            date=date
        )
        return redirect('booking_list')
    destinations = Destination.objects.all()
    users = User.objects.all()
    return render(request, 'create_booking.html', {'destinations': destinations, 'users': users})

# Update Booking
def update_booking(request, booking_id):
    booking = get_object_or_404(Booking, booking_id=booking_id)
    if request.method == 'POST':
        booking.user_id = request.POST['user_id']
        booking.destination_id = request.POST['destination_id']
        booking.date = request.POST['date']
        booking.save()
        return redirect('booking_list')
    destinations = Destination.objects.all()
    users = User.objects.all()
    return render(request, 'update_booking.html', {'booking': booking, 'destinations': destinations, 'users': users})

# Delete Booking
def delete_booking(request, booking_id):
    booking = get_object_or_404(Booking, booking_id=booking_id)
    if request.method == 'POST':
        booking.delete()
        return redirect('booking_list')
    return render(request, 'delete_booking.html', {'booking': booking})
