from django.shortcuts import render

# Create your views here.


def index(request):
    return render(request, 'main_app/index.html')


def main(request):
    return render(request, 'main_app/main.html')


def list(request):
    return render(request, 'main_app/list.html')


def history(request):
    return render(request, 'main_app/history.html')