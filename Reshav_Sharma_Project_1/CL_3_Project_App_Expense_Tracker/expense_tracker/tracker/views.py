from django.shortcuts import render, get_object_or_404, redirect
from .models import Expense
from .forms import ExpenseForm
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.shortcuts import render, redirect
from django.contrib.auth import logout
from django.contrib import messages


def dashboard(request):
    return render(request, 'tracker/dashboard.html')

@login_required
def index(request):
    expenses = Expense.objects.filter(user=request.user)
    return render(request, 'tracker/index.html', {'expenses': expenses})

@login_required
def add_expense(request):
    if request.method == 'POST':
        name = request.POST['name']
        amount = request.POST['amount']
        category = request.POST['category']
        Expense.objects.create(user=request.user, name=name, amount=amount, category=category)
        return redirect('index')
    return render(request, 'tracker/add_expense.html')

@login_required
def edit_expense(request, id):
    expense = get_object_or_404(Expense, id=id, user=request.user)
    if request.method == 'POST':
        form = ExpenseForm(request.POST, instance=expense)
        if form.is_valid():
            form.save()
            return redirect('index')
    else:
        form = ExpenseForm(instance=expense)
    return render(request, 'tracker/edit_expense.html', {'form': form, 'expense': expense})

@login_required
def delete_expense(request, id):
    expense = get_object_or_404(Expense, id=id, user=request.user)
    if request.method == 'POST':
        expense.delete()
        return redirect('index')
    return render(request, 'tracker/delete_expense.html', {'expense': expense})

def signup_view(request):
    if request.method == 'POST':
        username = request.POST['username']
        email = request.POST['email']
        password = request.POST['password']

        if User.objects.filter(username=username).exists():
            messages.error(request, 'Username already exists.')
        elif User.objects.filter(email=email).exists():
            messages.error(request, 'Email already exists.')
        else:
            user = User.objects.create_user(username=username, email=email, password=password)
            login(request, user)
            messages.success(request, "You have successfully done with the registration. You can now login with your email and password.")
            return redirect('login')
    return render(request, 'tracker/signup.html')

def login_view(request):
    if request.method == 'POST':
        email = request.POST['email']
        password = request.POST['password']

        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            messages.error(request, 'Invalid credentials.')
            return render(request, 'tracker/login.html')

        user = authenticate(request, username=user.username, password=password)
        if user is not None:
            login(request, user)
            return redirect('index')
        else:
            messages.error(request, 'Invalid credentials.')

    return render(request, 'tracker/login.html')

def logout_view(request):
    logout(request)
    messages.success(request, "You have successfully logged out.")
    return redirect('login')