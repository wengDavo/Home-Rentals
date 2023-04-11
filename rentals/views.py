from django.shortcuts import render
from . models import Properties
from django.http import HttpResponseRedirect
from django.core.files.storage import FileSystemStorage


def homepage_view(request):
     context = {
          "properties":Properties.objects.all()
     }
     if request.method == "POST":
         accepted_format = request.FILES['photos'].name[-3:].lower() in ['jpg', 'png']
         if accepted_format:
               form = request.POST
               photo = request.FILES['photos']
               file = FileSystemStorage().save(photo.name, photo)
               file_url = FileSystemStorage().url(file)
               
               Properties.objects.create(
                    name = form['name'],
                    address = form['address'],
                    price = form['price'],
                    city = form['city'],
                    state = form['state'],
                    room_type = form['room'],
                    bedrooms = form['bedrooms'],
                    bathrooms = form['bathrooms'],
                    house_type = form['housetype'],
                    description = form['description'],
                    image = file_url
               )
         return HttpResponseRedirect("/")
     return render(request, "rentals/index.html", context)
