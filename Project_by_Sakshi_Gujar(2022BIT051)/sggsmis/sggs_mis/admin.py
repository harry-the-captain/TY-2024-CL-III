from django.contrib import admin
from .models import Student, Attendance, Faculty, Subject, Exam, Library

admin.site.register(Student)
admin.site.register(Attendance)
admin.site.register(Faculty)
admin.site.register(Subject)
admin.site.register(Exam)
admin.site.register(Library)
