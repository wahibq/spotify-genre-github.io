import genre from "./genreData.js";
let mainEl = document.querySelector("main");
function colorGenerator() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    return `rgb(${red},${green},${blue})`;
}
let rendereData = genre.map((value)=>{
    return `<div class="grid" style="background-color:${value.background_color}">
                <h1>${value.title}</h1>
                <img class="img" src="${value.image_url}" alt="">
             </div>`
})
mainEl.innerHTML = rendereData.join("")     
export { colorGenerator };
