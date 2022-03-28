let form = document.querySelector(".search-form")
let resultShow = document.querySelector(".result-show")
let button = document.querySelector(".search")
let input = document.querySelector(".searchname")
let searchResult= document.querySelector(".searchResult")
let searchText = document.querySelector("#searchname").value

form.addEventListener("submit", function(event) {
    event.preventDefault()

    let searchText = document.querySelector("#searchname").value
    if (searchText == ""){
        alert("Name must be filled out");
    }
    
fetch(`https://itunes.apple.com/search?term=${searchText}&media=music&entity=album&attribute=artistTerm&limit=200`) 
.then (function (data){
    return data.json()
})
.then
 (function(json) { 
    
    for (var i = 0; i < json.results.length; i++) {
        let name = json.results[i].artistName
        let img = json.results[i].artworkUrl100
        let songName = json.results[i].collectionName
        let resultNumber = json.resultCount;
        searchResult.innerHTML= `Search Result: ${resultNumber}`
        let show = `
        <div class = "song">
            <img src="${img}">
            <h3> ${name}</h3>
            <h2> ${songName} </h2>
        </div>
        `
        resultShow.insertAdjacentHTML("beforeEnd", show)  
        
    }
})
})
