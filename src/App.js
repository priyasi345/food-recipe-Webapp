import React,{useEffect,useState} from 'react';
import './App.css';
import Recipe from "./Recipe"
const App=()=> {
  const APP_ID='0e1b1791';
  const APP_KEY="6bef2043ff216f841f7a3abf0ddd5701"
 
  const [recipes,setRecipes]=useState([]);
  const [search,setSearch]=useState('');
  const [query,setQuery]=useState('chicken');
useEffect(()=>{
 getRecipes();
 
},[query]);
const getRecipes= async () => {
  const response =await fetch(
    `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`
    );
   const data= await response.json();
  setRecipes(data.hits);
   console.log(data.hits);
};
const updateSearch= e =>{
  setSearch(e.target.value);
 
};
const getSearch = e => {
  e.preventDefault();
  setQuery(search);
}
return (
  <div className="App">
    <form onSubmit={getSearch} className="search-form">
      <input className="search-bar" type="text" valuue={search} onChange={updateSearch}/>
      <button  className="search-button" type="submit">Search</button>
    </form>
    <div className="recipes">
      {recipes.map(recipe =>(
       <Recipe 
       key={recipe.recipe.label} 
       title={recipe.recipe.label} 
       calories={recipe.recipe.calories}
       image={recipe.recipe.image}
       ingredients={recipe.recipe.ingredients}
       />
      ))}; 
      </div>
  </div>
)
}

export default App;
