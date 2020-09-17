let main = document.querySelector(".main-list")
let form = document.querySelector("form");
let newArr = [];


form.addEventListener("submit", handleForm)
function handleForm(e){
    e.preventDefault();
    let input = document.querySelector("input")
    if(input.value != "")
    console.log(input.value)
    searchFor(input.value)
    input.value = ""
}

 async function searchFor(name){
    let response =  await fetch(`http://www.omdbapi.com/?s=${name}&apikey=97022c83`)
    //fetch('https://www.omdbapi.com/?apikey=97022c83&s='+ name)
    let responseData = await response.json()
    
    let newArr = await responseData.Search
    console.log(responseData.Search)
    console.log(newArr)

    displayDatas(newArr)

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
    
}


/*
//default search
let obj={}

function details(){
    fetch("http://www.omdbapi.com/?i=tt3896198&apikey=97022c83")
    .then((res)=>res.json())
    .then((data)=>{
        obj.title = data.Title;
        obj.img = data.Poster;
    })
    .then(function(){
        displayMovies()
    })
}

details()

function displayMovies(){
    let main = document.querySelector("main");
    let newDiv = document.createElement("div");

    newDiv.innerHTML = `
    <img src ="${obj.img}" alt="poster">`

    main.appendChild(newDiv);
}
*/