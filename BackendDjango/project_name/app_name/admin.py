from django.contrib import admin



from .models import Country,City,Subject1,Marks

# admin.site.register(City)
# admin.site.register(Country)
# admin.site.register(Subject1)




class CountryAdmin(admin.ModelAdmin):


    list_display  = ['name']
    search_fields = ['name']

admin.site.register(Country,CountryAdmin)




class CityAdmin(admin.ModelAdmin):


    list_per_page = 6

    list_display  = ['name','population']
    search_fields = ['name','population']

admin.site.register(City,CityAdmin)




class Subject1Admin(admin.ModelAdmin):


    list_per_page = 6

    list_display  = ['name','subject','date','status']
    search_fields = ['name','subject']


admin.site.register(Subject1,Subject1Admin)



class MarksAdmin(admin.ModelAdmin):


    list_display  = ['subject','marks']

admin.site.register(Marks,MarksAdmin)



# Register your models here.


# Register your models here.
