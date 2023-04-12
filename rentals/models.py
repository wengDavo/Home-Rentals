from django.db import models

# Create your models here.
class Properties(models.Model):
    name = models.CharField(max_length=30)
    address = models.CharField(max_length=30)
    price = models.CharField(max_length=30)
    city = models.CharField(max_length=30)
    state = models.CharField(max_length=30)
    room_type = models.CharField(max_length=30)
    bedrooms = models.CharField(max_length=30)
    bathrooms = models.CharField(max_length=30)
    house_type = models.CharField(max_length=30)
    description = models.TextField()
    image = models.ImageField(upload_to="images/", null=True, blank=True)

    def __str__(self):
        return f'NAME:{self.name}'