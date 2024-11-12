from django.db import models
from django.contrib.auth.models import User

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    mobile = models.CharField(max_length=15)
    email = models.EmailField()
    location = models.CharField(max_length=255, blank=True, null=True)  # Allows location to be optional
    social_facebook = models.URLField(blank=True, null=True)
    social_twitter = models.URLField(blank=True, null=True)
    social_instagram = models.URLField(blank=True, null=True)
    leak_alert = models.BooleanField(default=False)
    threat_alert = models.BooleanField(default=False)
    activity_alert = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"
