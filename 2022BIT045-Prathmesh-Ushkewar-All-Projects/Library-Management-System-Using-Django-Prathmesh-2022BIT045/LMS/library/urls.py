from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="index"),

    # Author URLs
    path("authors/", views.author_list, name="author_list"),
    path("authors/create/", views.author_create, name="author_create"),
    path("authors/<int:pk>/", views.author_detail, name="author_detail"),
    path("authors/<int:pk>/edit/", views.author_update, name="author_update"),

    # Book URLs
    path("books/", views.book_list, name="book_list"),
    path("books/create/", views.book_create, name="book_create"),
    path("books/<int:pk>/", views.book_detail, name="book_detail"),
    path("books/<int:pk>/edit/", views.book_update, name="book_update"),

    # Member URLs
    path("members/", views.member_list, name="member_list"),
    path("members/create/", views.member_create, name="member_create"),
    path("members/<int:pk>/", views.member_detail, name="member_detail"),
    path("members/<int:pk>/edit/", views.member_update, name="member_update"),

    # Loan URLs
    path("loans/", views.loan_list, name="loan_list"),
    path("loans/create/", views.loan_create, name="loan_create"),
    path("loans/<int:pk>/", views.loan_detail, name="loan_detail"),
    path("loans/<int:pk>/edit/", views.loan_update, name="loan_update"),

    # Fine URLs
    path("fines/", views.fine_list, name="fine_list"),
    path("fines/create/", views.fine_create, name="fine_create"),
    path("fines/<int:pk>/", views.fine_detail, name="fine_detail"),
    path("fines/<int:pk>/edit/", views.fine_update, name="fine_update"),

]