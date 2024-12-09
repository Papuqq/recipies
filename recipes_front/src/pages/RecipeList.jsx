import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import Categories from './Categories';


function Item(arg){
  const linc = '/'
  return (
    <li key={arg.id} >
      <a href={linc + arg.id} >
        <h3>{arg.title}</h3>
      </a>
      <p>{arg.description}</p>
    </li>
  )
}


const Recipe = () => {
  const [recipes, setRecipes] = useState([]);

  const location = useLocation();
  const search = location.search;
  const query = new URLSearchParams(search)
  const category_id = query.get('category_id')

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/recipes', {
                params: {
                    category_id: category_id
                },
            });
            setRecipes(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    fetchData();
}, [category_id]);
  
  console.log(recipes);

  return (
    <>
    <Categories select={category_id}/>
    <div className="Recipes">
      <h1>Рецепты</h1>
        <ul>
          {recipes.map(arg => (Item(arg)))}
        </ul>
    </div>
    </>
  );
}

export default Recipe;
