
import fetch from 'node-fetch';

const appId = '12d37803';
const appKey = '04c931d72efe5d4400b80937c69ace19';
const a = "Shakshuka";
const apiUrl = `https://api.edamam.com/search?q=${a}&app_id=${appId}&app_key=${appKey}`;

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    let recipe = data.hits[0].recipe
    console.log(recipe)
    console.log(recipe.ingredientLines[0]);
    const yieldValue = recipe.yield;
    console.log(yieldValue);
    console.log(recipe.label)
  }).catch(error => {
    console.error('Fetch error:', error);
  });


