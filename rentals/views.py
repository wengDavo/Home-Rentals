from django.shortcuts import render
from django.http import HttpResponseRedirect

def homepage_view(request):
     return render(request, "rentals/index.html", {})
