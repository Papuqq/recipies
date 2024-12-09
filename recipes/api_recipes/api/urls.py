from django.urls import path
from rest_framework import routers
from .views import RecipeViewSet, CategoryViewSet

router = routers.DefaultRouter()
router.register(r'recipes', RecipeViewSet)
router.register(r'categories', CategoryViewSet)

urlpatterns = [
    path('', CategoryList.as_view()),
]

urlpatterns += router.urls