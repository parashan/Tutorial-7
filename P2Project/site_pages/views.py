from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
# Create your views here.

@csrf_exempt
def signin(request):
    return render(request, 'site_pages/login.html')
@csrf_exempt
def register(request):
    return render(request, 'site_pages/register.html')
@csrf_exempt
def index(request):
    return render(request, 'site_pages/index.html')
@csrf_exempt
def edit_profile(request):
    return render(request, 'site_pages/edit_profile.html')