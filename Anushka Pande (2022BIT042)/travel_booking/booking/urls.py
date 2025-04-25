from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('users/', views.user_list, name='user_list'),
    path('users/create/', views.create_user, name='create_user'),
    path('users/update/<int:user_id>/', views.update_user, name='update_user'),
    path('users/delete/<int:user_id>/', views.delete_user, name='delete_user'),
    path('destinations/', views.destination_list, name='destination_list'),
    path('destinations/create/', views.create_destination, name='create_destination'),
    path('destinations/update/<int:destination_id>/', views.update_destination, name='update_destination'),
    path('destinations/delete/<int:destination_id>/', views.delete_destination, name='delete_destination'),
    path('agents/', views.agent_list, name='agent_list'),
    path('agents/create/', views.create_agent, name='create_agent'),
    path('agents/update/<int:agent_id>/', views.update_agent, name='update_agent'),
    path('agents/delete/<int:agent_id>/', views.delete_agent, name='delete_agent'),
    path('bookings/', views.booking_list, name='booking_list'),
    path('bookings/create/', views.create_booking, name='create_booking'),
    path('bookings/update/<int:booking_id>/', views.update_booking, name='update_booking'),
    path('bookings/delete/<int:booking_id>/', views.delete_booking, name='delete_booking'),
]
