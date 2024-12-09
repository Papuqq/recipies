from django.urls import path
from rest_framework import routers
from .views import RecipeViewSet, CategoryViewSet, CategoryList

router = routers.DefaultRouter()
router.register(r'recipes', RecipeViewSet)
router.register(r'categories', CategoryViewSet)

urlpatterns = [
]

urlpatterns += router.urls
