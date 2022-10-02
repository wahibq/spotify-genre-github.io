import genre from "./genreData.js";
let mainEl = document.querySelector("main");
function colorGenerator() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    return `rgb(${red},${green},${blue})`;
}
function Render(data) {
    Object.assign(this, data);
    this.renderGrids = function () {
        const { title, image_url, background_color } = this;
        return `<div class="grid" style="background-color:${background_color}">
                    <h1>${title}</h1>
                    <img class="img" src="${image_url}" alt="">
                </div>`;
    };
}
const gridPodcasts = new Render(genre.podcasts);
const gridMadeForYou = new Render(genre.made_for_you);
const gridCharts = new Render(genre.charts);
const gridNewRelease = new Render(genre.new_releases);
const gridDiscover = new Render(genre.discover);
const gridLiveEvents = new Render(genre.live_events);
const gridBollywood = new Render(genre.bollywood);
const gridPunjabi = new Render(genre.punjabi);
const gridTamil = new Render(genre.tamil);
const gridTelugu = new Render(genre.telugu);
const gridIndie = new Render(genre.indie);
const gridGaming = new Render(genre.gaming);
const gridEqual = new Render(genre.equal);
const gridPop = new Render(genre.pop);
const gridRadar = new Render(genre.radar);
const gridFreshFinds = new Render(genre.fresh_finds);
const gridMarathi = new Render(genre.marathi);
const gridWellness = new Render(genre.wellness);
const gridDevotional = new Render(genre.devotional);
const gridIndianClassical = new Render(genre.indian_classical);
const gridRomance = new Render(genre.romance);
const gridHappyHolidays = new Render(genre.happy_holidays);
const gridDecades = new Render(genre.decades);
const gridKpop = new Render(genre.k_pop);
const gridNetflix = new Render(genre.netflix);
const gridDisney = new Render(genre.disney);
const gridHipHop = new Render(genre.hip_hop);
const gridParty = new Render(genre.party);
const gridInstrumental = new Render(genre.instrumental);
const gridDanceElectronic = new Render(genre.dance_electronic);
const gridStudent = new Render(genre.student);
// const grid = new Render(genre)
let gridContainer = [
    gridPodcasts,
    gridMadeForYou,
    gridCharts,
    gridNewRelease,
    gridDiscover,
    gridLiveEvents,
    gridBollywood,
    gridPunjabi,
    gridTamil,
    gridTelugu,
    gridIndie,
    gridGaming,
    gridEqual,
    gridPop,
    gridRadar,
    gridFreshFinds,
    gridMarathi,
    gridWellness,
    gridDevotional,
    gridIndianClassical,
    gridRomance,
    gridHappyHolidays,
    gridDecades,
    gridKpop,
    gridNetflix,
    gridDisney,
    gridHipHop,
    gridParty,
    gridInstrumental,
    gridDanceElectronic,
    gridStudent,
];
gridContainer.forEach((value) => {
    return (mainEl.innerHTML += value.renderGrids());
});

export { colorGenerator };
