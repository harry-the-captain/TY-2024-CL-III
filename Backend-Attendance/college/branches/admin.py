from django.contrib import admin

from .models import Branch


class branchAdmin(admin.ModelAdmin):
    list_display  = ['name','subject']

admin.site.register(Branch,branchAdmin)