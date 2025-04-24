from django.shortcuts import render,redirect,get_object_or_404

from .models import Author, Book, Member, Loan, Fine
from .forms import AuthorForm, BookForm, MemberForm, LoanForm, FineForm  
# You'll need to create forms.py

def index(request):
    return render(request, "library/index.html")

# Author Views
def author_list(request):
    authors = Author.objects.all()
    return render(request, "library/author_list.html", {"authors": authors})

def author_detail(request, pk):
    author = get_object_or_404(Author, pk=pk)
    return render(request, "library/author_detail.html", {"author": author})

def author_create(request):
    if request.method == "POST":
        form = AuthorForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect("author_list")
    else:
        form = AuthorForm()
    return render(request, "library/author_form.html", {"form": form})

def author_update(request, pk):
    author = get_object_or_404(Author, pk=pk)
    if request.method == "POST":
        form = AuthorForm(request.POST, instance=author)
        if form.is_valid():
            form.save()
            return redirect("author_list")
    else:
        form = AuthorForm(instance=author)
    return render(request, "library/author_form.html", {"form": form})


# Book Views
def book_list(request):
    books = Book.objects.all()
    return render(request, "library/book_list.html", {"books": books})

def book_detail(request, pk):
    book = get_object_or_404(Book, pk=pk)
    return render(request, "library/book_detail.html", {"book": book})


def book_create(request):
    if request.method == "POST":
        form = BookForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect("book_list")
    else:
        form = BookForm()
    return render(request, "library/book_form.html", {"form": form})

def book_update(request, pk):
    book = get_object_or_404(Book, pk=pk)
    if request.method == "POST":
        form = BookForm(request.POST, instance=book)
        if form.is_valid():
            form.save()
            return redirect("book_list")
    else:
        form = BookForm(instance=book)
    return render(request, "library/book_form.html", {"form": form})


# Member Views
def member_list(request):
    members = Member.objects.all()
    return render(request, "library/member_list.html", {"members": members})

def member_detail(request, pk):
    member = get_object_or_404(Member, pk=pk)
    return render(request, "library/member_detail.html", {"member": member})


def member_create(request):
    if request.method == "POST":
        form = MemberForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect("member_list")
    else:
        form = MemberForm()
    return render(request, "library/member_form.html", {"form": form})

def member_update(request, pk):
    member = get_object_or_404(Member, pk=pk)
    if request.method == "POST":
        form = MemberForm(request.POST, instance=member)
        if form.is_valid():
            form.save()
            return redirect("member_list")
    else:
        form = MemberForm(instance=member)
    return render(request, "library/member_form.html", {"form": form})

# Loan Views
def loan_list(request):
    loans = Loan.objects.all()
    return render(request, "library/loan_list.html", {"loans": loans})

def loan_detail(request, pk):
    loan = get_object_or_404(Loan, pk=pk)
    return render(request, "library/loan_detail.html", {"loan": loan})

def loan_create(request):
    if request.method == "POST":
        form = LoanForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect("loan_list")
    else:
        form = LoanForm()
    return render(request, "library/loan_form.html", {"form": form})

def loan_update(request, pk):
    loan = get_object_or_404(Loan, pk=pk)
    if request.method == "POST":
        form = LoanForm(request.POST, instance=loan)
        if form.is_valid():
            form.save()
            return redirect("loan_list")
    else:
        form = LoanForm(instance=loan)
    return render(request, "library/loan_form.html", {"form": form})

# Fine Views
def fine_list(request):
    fines = Fine.objects.all()
    return render(request, "library/fine_list.html", {"fines": fines})

def fine_detail(request, pk):
    fine = get_object_or_404(Fine, pk=pk)
    return render(request, "library/fine_detail.html", {"fine": fine})

def fine_create(request):
    if request.method == "POST":
        form = FineForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect("fine_list")
    else:
        form = FineForm()
    return render(request, "library/fine_form.html", {"form": form})


def fine_update(request, pk):
    fine = get_object_or_404(Fine, pk=pk)
    if request.method == "POST":
        form = FineForm(request.POST, instance=fine)
        if form.is_valid():
            form.save()
            return redirect("fine_list")
    else:
        form = FineForm(instance=fine)
    return render(request, "library/fine_form.html", {"form": form})