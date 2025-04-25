from django.shortcuts import render
from .models import MusicTrack

def home(request):
    tracks = MusicTrack.objects.all()
    return render(request, 'player/home.html', {'tracks': tracks})
