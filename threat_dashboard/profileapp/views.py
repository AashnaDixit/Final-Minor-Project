from rest_framework import viewsets, serializers
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.decorators import login_required
from django.shortcuts import render
from .models import Profile
from .serializers import ProfileSerializer

class ProfileViewSet(viewsets.ModelViewSet):
    serializer_class = ProfileSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        # Return the profile of the currently authenticated user
        return Profile.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        # Automatically associate the profile with the current user upon creation
        serializer.save(user=self.request.user)

    def update(self, request, *args, **kwargs):
        # Get the current user's profile
        instance = self.get_object()

        # Only allow updates to certain fields (e.g., mobile, location)
        allowed_fields = ['mobile', 'location']
        for field in request.data.keys():
            if field not in allowed_fields:
                return Response({"detail": "You can only update mobile or location."},
                                status=status.HTTP_400_BAD_REQUEST)

        # Perform the update
        return super().update(request, *args, **kwargs)

@login_required
def profile_page(request):
    return render(request, 'profile.html')  # Renders profile page template
