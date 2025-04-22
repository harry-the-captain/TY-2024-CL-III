from django import forms
from .models import Restaurant, Customer, DeliveryStaff, Menu, Order

class RestaurantForm(forms.ModelForm):
    class Meta:
        model = Restaurant
        fields = ['Name', 'Location']

class CustomerForm(forms.ModelForm):
    class Meta:
        model = Customer
        fields = ['Name', 'Contact']

class DeliveryStaffForm(forms.ModelForm):
    class Meta:
        model = DeliveryStaff
        fields = ['Name', 'Contact']

class MenuForm(forms.ModelForm):
    class Meta:
        model = Menu
        fields = ['RestaurantID', 'Item']

class OrderForm(forms.ModelForm):
    class Meta:
        model = Order
        fields = ['CustomerID', 'RestaurantID', 'DeliveryStaffID', 'Items']