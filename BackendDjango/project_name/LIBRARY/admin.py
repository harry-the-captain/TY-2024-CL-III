from django.contrib import admin
from .models import books


class booksAdmin(admin.ModelAdmin):
    list_display  = ['book_name','subject']

admin.site.register(books,booksAdmin)

# Register your models here.
