from django.contrib import admin

from .models import Attendace


class AttendaceAdmin(admin.ModelAdmin):
    list_display  = ['name','subject','status']

admin.site.register(Attendace,AttendaceAdmin)