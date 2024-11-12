from django.urls import path
from .views import WeeklyActiveThreatsView, MonthlyLeaksView, ThreatUpdateView

urlpatterns = [
    path('api/active-threats-weekly/', WeeklyActiveThreatsView.as_view(), name='weekly-active-threats'),
    path('api/monthly-leaks-line-graph/', MonthlyLeaksView.as_view(), name='monthly-leaks-line-graph'),
    path('api/update-threat-count/', ThreatUpdateView.as_view(), name='update-threat-count'),  # New endpoint for updates
]

