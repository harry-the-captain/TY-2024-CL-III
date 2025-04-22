from django.contrib import admin
from .models import Restaurant, Customer, DeliveryStaff, Menu, Order

admin.site.register(Restaurant)
admin.site.register(Customer)
admin.site.register(DeliveryStaff)
admin.site.register(Menu)
admin.site.register(Order)