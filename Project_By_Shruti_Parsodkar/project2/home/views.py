from django.shortcuts import render,HttpResponse

# Create your views here.
def index(request):
    #return HttpResponse("This is Home page")
    context={
        'variable':"this is sent"
    }
    return render(request,"index.html",context)

def about(request):
    return HttpResponse("This is about page")
def services(request):
    return HttpResponse("we will provide you services")

def contact(request):
    return HttpResponse("This is contact page")