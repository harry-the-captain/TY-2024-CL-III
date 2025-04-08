from django.contrib import admin

from .models import finance


class financeAdmin(admin.ModelAdmin):


    list_display  = ['head_name','title']

admin.site.register(finance,financeAdmin)

# Register your models here.
