from django.urls import path
from . import views

urlpatterns = [
    # Restaurant URLs
    path('restaurants/', views.restaurant_list, name='restaurant_list'),
    path('restaurants/create/', views.restaurant_create, name='restaurant_create'),
    path('restaurants/update/<int:pk>/', views.restaurant_update, name='restaurant_update'),
    path('restaurants/delete/<int:pk>/', views.restaurant_delete, name='restaurant_delete'),

    # Customer URLs
    path('customers/', views.customer_list, name='customer_list'),
    path('customers/create/', views.customer_create, name='customer_create'),
    path('customers/update/<int:pk>/', views.customer_update, name='customer_update'),
    path('customers/delete/<int:pk>/', views.customer_delete, name='customer_delete'),

    # Delivery Staff URLs
    path('delivery-staff/', views.deliverystaff_list, name='deliverystaff_list'),
    path('delivery-staff/create/', views.deliverystaff_create, name='deliverystaff_create'),
    path('delivery-staff/update/<int:pk>/', views.deliverystaff_update, name='deliverystaff_update'),
    path('delivery-staff/delete/<int:pk>/', views.deliverystaff_delete, name='deliverystaff_delete'),
]