from django.shortcuts import render, get_object_or_404, redirect
from .models import Restaurant, Customer, DeliveryStaff, Menu, Order
from .forms import RestaurantForm, CustomerForm, DeliveryStaffForm, MenuForm, OrderForm


def dashboard(request):
    return render(request, 'delivery/dashboard.html')
# Restaurant CRUD
def restaurant_list(request):
    restaurants = Restaurant.objects.all()
    return render(request, 'delivery/restaurant_list.html', {'restaurants': restaurants})

def restaurant_create(request):
    if request.method == 'POST':
        form = RestaurantForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('restaurant_list')
    else:
        form = RestaurantForm()
    return render(request, 'delivery/restaurant_form.html', {'form': form})

def restaurant_update(request, pk):
    restaurant = get_object_or_404(Restaurant, pk=pk)
    if request.method == 'POST':
        form = RestaurantForm(request.POST, instance=restaurant)
        if form.is_valid():
            form.save()
            return redirect('restaurant_list')
    else:
        form = RestaurantForm(instance=restaurant)
    return render(request, 'delivery/restaurant_form.html', {'form': form})

def restaurant_delete(request, pk):
    restaurant = get_object_or_404(Restaurant, pk=pk)
    if request.method == 'POST':
        restaurant.delete()
        return redirect('restaurant_list')
    return render(request, 'delivery/restaurant_confirm_delete.html', {'restaurant': restaurant})


# Customer Views
def customer_list(request):
    customers = Customer.objects.all()
    return render(request, 'delivery/customer_list.html', {'customers': customers})

def customer_create(request):
    if request.method == 'POST':
        form = CustomerForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('customer_list')
    else:
        form = CustomerForm()
    return render(request, 'delivery/customer_form.html', {'form': form})

def customer_update(request, pk):
    customer = get_object_or_404(Customer, pk=pk)
    if request.method == 'POST':
        form = CustomerForm(request.POST, instance=customer)
        if form.is_valid():
            form.save()
            return redirect('customer_list')
    else:
        form = CustomerForm(instance=customer)
    return render(request, 'delivery/customer_form.html', {'form': form})

def customer_delete(request, pk):
    customer = get_object_or_404(Customer, pk=pk)
    if request.method == 'POST':
        customer.delete()
        return redirect('customer_list')
    return render(request, 'delivery/customer_confirm_delete.html', {'customer': customer})
def customer_list(request):
    customers = Customer.objects.all()
    return render(request, 'delivery/customer_list.html', {'customers': customers})

def customer_create(request):
    if request.method == 'POST':
        form = CustomerForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('customer_list')
    else:
        form = CustomerForm()
    return render(request, 'delivery/customer_form.html', {'form': form})

def customer_update(request, pk):
    customer = get_object_or_404(Customer, pk=pk)
    if request.method == 'POST':
        form = CustomerForm(request.POST, instance=customer)
        if form.is_valid():
            form.save()
            return redirect('customer_list')
    else:
        form = CustomerForm(instance=customer)
    return render(request, 'delivery/customer_form.html', {'form': form})

def customer_delete(request, pk):
    customer = get_object_or_404(Customer, pk=pk)
    if request.method == 'POST':
        customer.delete()
        return redirect('customer_list')
    return render(request, 'delivery/customer_confirm_delete.html', {'customer': customer})


def deliverystaff_list(request):
    deliverystaff = DeliveryStaff.objects.all()
    return render(request, 'delivery/deliverystaff_list.html', {'deliverystaff': deliverystaff})

def deliverystaff_create(request):
    if request.method == 'POST':
        form = DeliveryStaffForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('deliverystaff_list')
    else:
        form = DeliveryStaffForm()
    return render(request, 'delivery/deliverystaff_form.html', {'form': form})

def deliverystaff_update(request, pk):
    staff = get_object_or_404(DeliveryStaff, pk=pk)
    if request.method == 'POST':
        form = DeliveryStaffForm(request.POST, instance=staff)
        if form.is_valid():
            form.save()
            return redirect('deliverystaff_list')
    else:
        form = DeliveryStaffForm(instance=staff)
    return render(request, 'delivery/deliverystaff_form.html', {'form': form})

def deliverystaff_delete(request, pk):
    staff = get_object_or_404(DeliveryStaff, pk=pk)
    if request.method == 'POST':
        staff.delete()
        return redirect('deliverystaff_list')
    return render(request, 'delivery/deliverystaff_confirm_delete.html', {'staff': staff})