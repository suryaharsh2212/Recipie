// import fetch from 'node-fetch'
let url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
function changecss() {
    var elements = document.getElementsByClassName('showinstructonclick');
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.replace('showinstructonclick', 'showinstruct');
}
    }

async function display() {
    let userinput=document.getElementById('textbar').value;
    try {
        const response = await fetch(url+userinput);
        const data = await response.json();
        
        const container = document.getElementsByClassName('section')[0];
        data.meals.forEach((meal) => {
            let count=1
            
            let ingredients=[]
            for(let i in meal)
            {
                let ing=""
                let measure=""
                if(i.startsWith("strIngredient")&&meal[i])
                {
                    ing=meal[i]
                    measure=meal[`strMeasure`+count]
                    count++
                    ingredients.push(`${ing} - ${measure}`)
                }
            }
            
            const mealHtml = `<div class="sec-item">
            <div class="child image">
                <img class="imageofapi" src="${meal.strMealThumb}" alt=""><h3>${meal.strMeal}</h3><hr style="color :#272020"> <h5 style="font-weight: lighter">Cusine - ${meal.strArea}</h5>
                <div class=" ingre"  ><button onclick="changecss()" id="showingredient">ShowIngredient</button>
                <div class="showinstructonclick" style="height:fit-content; width:150%; padding:20px 20px;">${ingredients}</div>
                </div>
            </div>
            <div class="child insrt"><h5 style="font-weight:light">Recipe</h5> <p>${meal.strInstructions+'Func2'}</p></div>
           
            
        </div>`;
            container.innerHTML += mealHtml;
        });
           
            
    } catch (error) {
        console.error('Error fetching data:', error);
        alert("Searched item is not avaiable try another item....!!!")
    }
    console.log(userinput)
}

async function getData() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        const container = document.getElementsByClassName('section')[0];
       
        data.meals.forEach((meal) => {
            let count=1
            
            let ingredients=[]
            for(let i in meal)
            {
                let ing=""
                let measure=""
                if(i.startsWith("strIngredient")&&meal[i])
                {
                    ing=meal[i]
                    measure=meal[`strMeasure`+count]
                    count++
                    ingredients.push(`${ing} - ${measure}`)
                }
            }
            
            const mealHtml = `<div class="sec-item">
            <div class="child image">
                <img class="imageofapi" src="${meal.strMealThumb}" alt=""><h3>${meal.strMeal}</h3><hr style="color :#272020"> <h5 style="font-weight: lighter">Cusine - ${meal.strArea}</h5>
                <div class=" ingre"  ><button onclick="changecss()" id="showingredient">ShowIngredient</button>
                <div class="showinstructonclick" style="height:fit-content; width:150%; padding:20px 20px;">${ingredients}</div>
                </div>
            </div>
            <div class="child insrt"><h5 style="font-weight:light">Recipe</h5> <p>${meal.strInstructions+'Func2'}</p></div>
           
            
        </div>`;
            container.innerHTML += mealHtml;
        });

        
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
getData();





