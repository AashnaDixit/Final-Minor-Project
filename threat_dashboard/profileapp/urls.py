from django.contrib.auth.decorators import login_required
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProfileViewSet, profile_page

router = DefaultRouter()
router.register(r'profiles', ProfileViewSet, basename='profile')  # Registering the ProfileViewSet

urlpatterns = [
    path('api/', include(router.urls)),  # API endpoint for profiles
    path('profile/', login_required(profile_page), name='profile_page'),  # Profile page only accessible to logged-in users
]
