   import fetch from 'node-fetch'; 
let url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

async function getData() {
    try {
        const response =await fetch(url);
        const data = await response.json();
        let mymeal=data.meals[0]
        console.log(mymeal.strMealThumb)
        let increment=0;
        
        
        //  const object=document.getElementsByClassName('section')[0]
        //   object.innerHTML=`<div class="sec-item">
        //   <div class="child image"><img class="imageofapi" src="${data.meals[increment].strMealThumb}" alt=""> <h3>${data.meals[increment].strMeal}</h3></div>
        //   <div class="child insrt">${mymeal.strInstructions}</div>
        //   <div class="child ingre">ingre</div></div>
        //   <div class="sec-item">
        //   <div class="child"><img src="${data.meals[increment+1].strMealThumb}"></img><h3>${data.meals[increment+1].strMeal}</h3></div>
        //   <div class="child">${data.meals[1].strInstructions}</div>
        //   <div class="child">ingre</div>
        //   </div>`
          
          
        
       

       console.log(data.meals[1])
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
getData()
