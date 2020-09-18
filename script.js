let main = document.querySelector(".main-list")
let form = document.querySelector("form");
let newArr = [];

let arr = JSON.parse(localStorage.getItem("newArr"))
if(arr){
    displayDatas(arr)
}

form.addEventListener("submit", handleForm)
function handleForm(e){
    e.preventDefault();
    let input = document.querySelector("input")
    if(input.value != "")
    searchFor(input.value)
    input.value = ""
}
function searchFor(name){
    let newList =  document.createElement("div");
    fetch(`https://www.omdbapi.com/?s=${name}&apikey=97022c83`)
    .then((response)=>response.json())
    .then((data)=>{
        newArr = data.Search
    })
    .then(function(){
        displayDatas(newArr)
    })
}



function displayDatas(newArr){
    main.innerHTML="";
    newArr.forEach((movie)=>{
        let{Title, Poster, Year} = movie;

        let movieEl = document.createElement("div");
        movieEl.classList.add("card");

        movieEl.innerHTML = `<div>
        <img src="${Poster}" alt="${Title}"/>
        <P class="text-title">${Title}</p>
        <p class="text-year">${Year}</p></div>`;

        main.appendChild(movieEl)
    })
    localStorage.setItem("newArr", JSON.stringify(newArr))   
}