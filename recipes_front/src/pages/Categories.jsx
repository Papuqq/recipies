import React, { useState, useEffect } from 'react';
import s from './Categories.module.css'


function Item(arg, select){

  const linc = '/?category_id='

  return (
    <li key={arg.id}>
      <a href={linc + arg.id} 
         className={(Number(select.select) === arg.id) ? s.select : '' }>
        {arg.name}
        </a>
    </li>
  )
}

function Categories(select) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/categories/');
        const data = await response.json();
        setCategories(data);
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

      fetchData();
    
    
  }, []); // Пустой массив зависимостей означает, что запрос будет выполнен один раз при монтировании компонента
  
  console.log(categories);

  return (
    <div className="Categories">
      <h1>Категории:</h1>
      <ul>
        {categories.map(arg => (Item(arg, select)))}
      </ul>
    </div>
  );
}

export default Categories;
