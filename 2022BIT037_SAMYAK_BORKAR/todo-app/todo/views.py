from django.shortcuts import render, redirect
from .models import Task
from .forms import TaskForm

def todo_list(request):
    tasks = Task.objects.all()
    form = TaskForm()
    if request.method == 'POST':
        form = TaskForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('todo_list')
    return render(request, 'todo/todo_list.html', {'tasks': tasks, 'form': form})

def task_delete(request, task_id):
    task = Task.objects.get(id=task_id)
    task.delete()
    return redirect('todo_list')

def task_toggle(request, task_id):
    task = Task.objects.get(id=task_id)
    task.completed = not task.completed
    task.save()
    return redirect('todo_list')
