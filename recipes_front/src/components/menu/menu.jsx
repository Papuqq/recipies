import React, { useState, useEffect } from 'react';

function Item(arg){
  return (
    <li key={arg.id}>
      {arg.name}
    </li>
  )
}

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/categories/');
        let data = await response.json();
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
        {categories.map(arg => (Item(arg)))}
      </ul>
    </div>
  );
}

export default Categories;
