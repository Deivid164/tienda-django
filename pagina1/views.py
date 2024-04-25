from django.shortcuts import render

# Create your views here.

def index(request):
    return render(request, 'section/home.html', {})

def teclados(request):
    return render(request, 'section/pagina_teclados.html', {})

def mouse(request):
    return render(request, 'section/pagina_mouse.html', {})

def placasMadre(request):
    return render(request, 'section/pagina_placaMadre.html', {})



