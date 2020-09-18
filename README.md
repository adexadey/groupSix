# STEPS ON THE PROJECT

Step 1: Create your html file which consists of the form(which must have an input field in it) and a div(".main-list") which takes in the search results of your search...

Step 2: Create Your js file and create a variable the hmtl tag of form and the div class of main-list. Line 1&2.

Step 3: Create a addEventListener of "Submit" which accept a valid value passed into the input field and also invoke a function to(searchFor(input.value)) fecth OMDB api from the web. Line 9-17

Step 4a: fetch for the input.value through OMDB api in function searchFor(name) which we will gives us a response and convert the promise to an object with json() & then proceed to data. For more Info "https://medium.com/@cferreirasuazo/getting-movie-data-from-omdbapi-using-fetch-f2b96ae230dd" line 19-21

Step 4b: N.B if we console.log(data), it would gives us an object of three keys (search, total results and response), but we are only focused on the search because it has the name of the movies in which we searched for, assign the data.search to a variable.Create a function(displayDatas(newArr)) to display the variable to the page. line 22-29

Step 5: Defining the displayDatas(newArr),
        clear the div tag. line 33
        first: looping through the object of arrays with a forEach function by getting the value of title, poster and year of each array and create a div element and add a class(card) for styling.  line 34 -38
        second: create the innerhtml for the new div element to form an array of the arrays after looping and append the new div element to the main div. line 40-45
        third: invoke a saveJson() on the array with localstorage.line 47.

Step 6: Use localstorage to set the item in json form & parse it back above. line 50-52 & line 4-7.

