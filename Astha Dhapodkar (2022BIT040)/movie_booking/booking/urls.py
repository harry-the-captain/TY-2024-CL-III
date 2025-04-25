from django.urls import path
from . import views
from django.conf import settings  # Import settings
from django.conf.urls.static import static  # Import static

urlpatterns = [
    path('', views.movie_list, name='movie_list'),
    path('shows/', views.show_list, name='show_list'),
    path('booking/', views.book_ticket, name='book_ticket'),
]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
