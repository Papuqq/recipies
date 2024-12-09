from django.shortcuts import render
from django.views.generic import ListView
from rest_framework import permissions
from rest_framework import viewsets
from rest_framework.response import Response

from .serializers import RecipeSerializer, CategorySerializer
from .models import Category, Recipe


class CategoryList(ListView):
    model = Category
    ordering = 'name'
    template_name = 'category.html'
    context_object_name = 'category'


class RecipeViewSet(viewsets.ModelViewSet):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer

    def list(self, request, *args, **kwargs):
        # Получаем параметр фильтрации по категории из запроса
        category_id = request.query_params.get('category_id')

        # Если параметр задан, фильтруем рецепты по категории
        if category_id:
            queryset = Recipe.objects.filter(categories__id=category_id)
        else:
            queryset = Recipe.objects.all()

        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer



