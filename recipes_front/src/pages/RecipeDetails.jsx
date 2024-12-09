import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import Categories from './Categories';


const Recipe = () => {
  const [recipe, setRecipe] = useState([]);
  const params = useParams()
  const prodId = params.id

  useEffect(() => {

    
    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/recipes/' + prodId);
            setRecipe(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    fetchData();
    
}, [prodId]);
  
  console.log(recipe);

  return (
    <>
    <Categories />
    <div className="Recipes">
      <h1>Рецепты:</h1>
        Название: {recipe.title}<br /><br />
        Описание: {recipe.description}<br /><br />
        Ингридиенты: {recipe.ingredients}<br /><br />
        Инструкции: {recipe.instructions}<br /><br />
        Автор: {recipe.author?.username}<br /><br />
        Категория: {recipe.categories?.[0].name}
    </div>
    </>
  );
}

export default Recipe;
