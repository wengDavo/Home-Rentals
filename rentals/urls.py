from django.urls import path
from rentals import views

app_name = 'rentals'
urlpatterns = [
    path("", views.homepage_view, name="home"),
]