from django.db import models

class Bus(models.Model):
    bus_number = models.CharField(max_length=20)
    route_name = models.CharField(max_length=100)

    current_location = models.CharField(max_length=100, blank=True, null=True)
    next_stop = models.CharField(max_length=100, blank=True, null=True)

    eta_minutes = models.IntegerField(default=0)

    crowd_level = models.CharField(
        max_length=20,
        choices=[
            ("Low", "Low"),
            ("Medium", "Medium"),
            ("High", "High"),
        ],
        default="Low"
    )

    is_active = models.BooleanField(default=True)

    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.bus_number