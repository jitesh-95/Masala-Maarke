import navbar from '../components/navbar.js';

document.querySelector(".navbar").innerHTML = navbar();


let localUser = JSON.parse(localStorage.getItem("username"));
let loginDiv = document.querySelector(".login");
if (localUser === null) {
  loginDiv.innerHTML = "Login";
} else {
  loginDiv.innerHTML = `Welcome ${localUser}`;
}


//https://www.themealdb.com/api/json/v1/1/random.php

let getRandom = async()=>{
    try{
        let res = await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`);
        let data = await res.json();
        // console.log(data);
        append(data.meals);
    }catch(err){
        console.log("myerr:",err);
    }
}

getRandom();

let box = document.querySelector(".dish");
//appending
let append = (data) => {
  box.innerHTML = null;
  data.map((el) => {
    let div = document.createElement("div");
    div.setAttribute("class", "details");

    let img = document.createElement("img");
    img.src = el.strMealThumb;

    let name = document.createElement("h1");
    name.innerText = el.strMeal;

    let type = document.createElement("p");
    type.setAttribute("class", "type");
    type.innerText = `Type: ${el.strCategory}`;

    let cusine = document.createElement("p");
    cusine.setAttribute("class", "cusine");
    cusine.innerText = `Cuisine: ${el.strArea}`;

    let heading1 = document.createElement("h2");
    heading1.innerText = "Let's Make It";

    let heading = document.createElement("h3");
    heading.innerText = "Instructions";

    let desc = document.createElement("p");
    desc.setAttribute("class", "desc");
    desc.innerText = el.strInstructions;

    let heading2 = document.createElement("h3");
    heading2.innerText = "Ingredients";

    let ingdiv = document.createElement("div");
    ingdiv.setAttribute("class", "ingredientDiv");

    let image1 = document.createElement("img");
    image1.src = `https://www.themealdb.com/images/ingredients/${el.strIngredient1}-Small.png`;
    let image2 = document.createElement("img");
    image2.src = `https://www.themealdb.com/images/ingredients/${el.strIngredient2}-Small.png`;
    let image3 = document.createElement("img");
    image3.src = `https://www.themealdb.com/images/ingredients/${el.strIngredient3}-Small.png`;
    let image4 = document.createElement("img");
    image4.src = `https://www.themealdb.com/images/ingredients/${el.strIngredient4}-Small.png`;
    let image5 = document.createElement("img");
    image5.src = `https://www.themealdb.com/images/ingredients/${el.strIngredient5}-Small.png`;
    let image6 = document.createElement("img");
    image6.src = `https://www.themealdb.com/images/ingredients/${el.strIngredient6}-Small.png`;
    let image7 = document.createElement("img");
    image7.src = `https://www.themealdb.com/images/ingredients/${el.strIngredient7}-Small.png`;
    let image8 = document.createElement("img");
    image8.src = `https://www.themealdb.com/images/ingredients/${el.strIngredient8}-Small.png`;

    ingdiv.append(
      image1,
      image2,
      image3,
      image4,
      image5,
      image6,
      image7,
      image8
    );

    let ing1 = document.createElement("p");
    ing1.innerText = `• ${el.strMeasure1} ${el.strIngredient1}`;
    let ing2 = document.createElement("p");
    ing2.innerText = `• ${el.strMeasure2} ${el.strIngredient2}`;
    let ing3 = document.createElement("p");
    ing3.innerText = `• ${el.strMeasure3} ${el.strIngredient3}`;
    let ing4 = document.createElement("p");
    ing4.innerText = `• ${el.strMeasure4} ${el.strIngredient4}`;
    let ing5 = document.createElement("p");
    ing5.innerText = `• ${el.strMeasure5} ${el.strIngredient5}`;
    let ing6 = document.createElement("p");
    ing6.innerText = `• ${el.strMeasure6} ${el.strIngredient6}`;
    let ing7 = document.createElement("p");
    ing7.innerText = `• ${el.strMeasure7} ${el.strIngredient7}`;
    let ing8 = document.createElement("p");
    ing8.innerText = `• ${el.strMeasure8} ${el.strIngredient8}`;

    let link = document.createElement("button");
    link.setAttribute("class", "link");
    link.innerText = "Watch on Youtube";
    link.addEventListener("click", function () {
      window.open(el.strYoutube, "_blank");
    });

    div.append(
      name,
      type,
      cusine,
      heading1,
      heading,
      desc,
      heading2,
      ingdiv,
      ing1,
      ing2,
      ing3,
      ing4,
      ing5,
      ing6,
      ing7,
      ing8,
      link
    );

    box.append(img, div);
  });
};
