from rest_framework import serializers
from .models import Profile

class ProfileSerializer(serializers.ModelSerializer):
    full_name = serializers.SerializerMethodField()
    user = serializers.CharField(source='user.username', read_only=True)

    class Meta:
        model = Profile
        fields = [
            'id', 'user', 'first_name', 'last_name', 'mobile', 'email', 
            'location', 'social_facebook', 'social_twitter', 'social_instagram',
            'leak_alert', 'threat_alert', 'activity_alert', 'full_name'
        ]
        read_only_fields = ('user', 'full_name', 'first_name', 'last_name', 'email')  # These fields can't be edited

    def get_full_name(self, obj):
        return f"{obj.first_name} {obj.last_name}"
