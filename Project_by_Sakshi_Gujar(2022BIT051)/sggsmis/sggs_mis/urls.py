from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('students/', views.students, name='students'),
    path('attendance/', views.attendance, name='attendance'),
    path('faculty/', views.faculty, name='faculty'),
    path('library/', views.library, name='library'),
    path('exams/', views.exams, name='exams'),
]
