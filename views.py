from django.http import JsonResponse
from django.shortcuts import render

def home(request):
    return render(request, 'home.html')

def bus_list(request):
    data = [
        {"id": 1, "name": "Bus A"},
        {"id": 2, "name": "Bus B"},
    ]
    return JsonResponse(data, safe=False)