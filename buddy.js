const searchFood =()=>{
    const searchFlid= document.getElementById('search-field');
    const searchText=searchFlid.value;
    console.log(searchText);
    searchFlid.value='';
    const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
    .then(res =>res.json())
    .then(data=>displaySearchResult(data.meals))
}

const displaySearchResult = meals =>{
    console.log(meals);
}