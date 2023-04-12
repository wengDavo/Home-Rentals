from django.shortcuts import render
from . models import Properties
from django.http import HttpResponseRedirect

def homepage_view(request):
     context = {
          "properties":Properties.objects.all()
     }
     if request.method == "POST":
               form = request.POST        
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
               )
               return HttpResponseRedirect("/")
     return render(request, "rentals/index.html", context)
