from django.urls import path
from . import views

urlpatterns=[
    path('', views.index, name='home'),
    path('teclados', views.teclados, name='teclados'),
    path('mouse', views.mouse, name='mouse'),
    path('placasMadre', views.placasMadre, name='placasMadre'),
]