from django.shortcuts import render
from .models import Student, Attendance, Faculty, Library, Exam

# Home Page
def home(request):
    return render(request, 'home.html')

# Students Page
def students(request):
    students = Student.objects.all()
    return render(request, 'students.html', {'students': students})

# Attendance Page
def attendance(request):
    attendance_records = Attendance.objects.all()
    return render(request, 'attendance.html', {'attendance_records': attendance_records})

# Faculty Page
def faculty(request):
    faculties = Faculty.objects.all()
    return render(request, 'faculty.html', {'faculties': faculties})

# Library Page
def library(request):
    books = Library.objects.all()
    return render(request, 'library.html', {'books': books})

# Exams Page
def exams(request):
    exams = Exam.objects.all()
    return render(request, 'exams.html', {'exams': exams})
