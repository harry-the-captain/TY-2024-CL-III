from django.urls import path
from .views import todo_list, task_delete, task_toggle

urlpatterns = [
    path('', todo_list, name='todo_list'),
    path('delete/<int:task_id>/', task_delete, name='task_delete'),
    path('toggle/<int:task_id>/', task_toggle, name='task_toggle'),
]
