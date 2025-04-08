from django.contrib import admin

from .models import Student

class studentAdmin(admin.ModelAdmin):
    list_display  = ['name','roll_number','branch','subjects','year_of_enrollment','gender','email']

admin.site.register(Student,studentAdmin)