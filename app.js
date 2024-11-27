// APPELS DANS LE DOM
const input = document.querySelector("#barreRecherche");

// TOKEN
const options = {
    method: 'GET',
    headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNTA2ZTAxOTQyMzQzMWRkMmY1MTM3ZDQ0ZjZiZGRmNyIsIm5iZiI6MTczMjYyNTc4OS4zNjExNDc5LCJzdWIiOiI2NzQ1OTgzMTlmNDBhN2FhZjZlYTg1OGMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.6-7lzZLbFIBhjnGtTPfK5pZUN0jVQpwuFGaGv4M48YI'
    }
};
 // POUR AVOIR L'OBJET
fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.error(err));



// FONCTION FETCH NOW PLAYING
fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)

const fetchNowPlaying = async () => {
try{
    const response = await fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1", options);
    const data = await response.json();

    // INTEGRER LES FILMS DANS LE SWIPER
const swipperWrapper = document.querySelector(".swiper-wrapper");
data.results.forEach(element => {
    const slide = document.createElement("div");
    slide.classList = ("swiper-slide");
    /* slide.innerHTML = `<img src="/aosm8NMQ3UyoBVpSxyimorCQykC.jpg" alt="posterpath">`; */
slide.innerHTML = `
<div class="movie-card">
                <img src="https://image.tmdb.org/t/p/w500${element.poster_path}" alt="${element.title}">
    <div class="movie-info">
    <h3>${element.title}</h3>
    <p class="date">${element.release_date.split('-')[0]}</p>
    <p class="genre">Genre</p>
    <p class="paragrapherating"> <img src="etoilerating.png" alt="etoilerating" class="etoilerating"> ${element.vote_average}</p>
</div>
</div>`;
    swipperWrapper.appendChild(slide);
}); 


// FONCTION SWIPER
new Swiper(".swiper", {
    loop: true,   
    spaceBetween: 0,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        1024: {
            slidesPerView: 4,
        },
    }
});


} catch (error) {
    console.error("Erreur lors de la récupération des films:", error)
}
};
fetchNowPlaying();






// FONCTION FETCH
/* 

const myFetch = async () => {
    let textinput = input.value.trim();
    const res = await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?language=fr-FR&page=1`, options  
    );
console.log(res);
data = await res.json();
    console.log(data);

let data;
if (res.ok){
    
if (data.original_title) {
    paragraphe.textContent = `These are the results for: "${textinput}"`;}
    else {
        paragraphe.textContent = `No results found for: "${textinput}"`;
        }}} */
