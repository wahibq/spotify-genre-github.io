import { colorGenerator } from "./script.js";

const genre = {
    podcasts: {
        title: "Podcasts",
        image_url:
            "https://i.scdn.co/image/567158eb895ad26718a814345af0fc43ee785ec5",
        background_color: colorGenerator(),
    },
    made_for_you: {
        title: "Made For You",
        image_url: "https://t.scdn.co/images/ea364e99656e46a096ea1df50f581efe",
        background_color: colorGenerator(),
    },
    charts: {
        title: "Charts",
        image_url:
            "https://charts-images.scdn.co/assets/locale_en/regional/weekly/region_global_default.jpg",
        background_color: colorGenerator(),
    },
    new_releases: {
        title: "New Releases",
        image_url:
            "https://i.scdn.co/image/ab67706f000000027ea4d505212b9de1f72c5112",
        background_color: colorGenerator(),
    },
    discover: {
        title: "Discover",
        image_url:
            "https://t.scdn.co/images/d0fb2ab104dc4846bdc56d72b0b0d785.jpeg",
        background_color: colorGenerator(),
    },
    live_events: {
        title: "Live Events",
        image_url:
            "https://concerts.spotifycdn.com/images/live-events_category-image.jpg",
        background_color: colorGenerator(),
    },
    bollywood: {
        title: "Bollywood",
        image_url:
            "https://t.scdn.co/images/8a0fabf4d537486e9b5a4623c921f77e.jpeg",
        background_color: colorGenerator(),
    },
    punjabi: {
        title: "Punjabi",
        image_url:
            "https://t.scdn.co/images/11e89d14d7844b7eb3d26619cb662a9b.jpeg",
        background_color: colorGenerator(),
    },
    tamil: {
        title: "Tamil",
        image_url:
            "https://t.scdn.co/images/2117dadfdd254825b3fbc52e3652ed56.jpeg",
        background_color: colorGenerator(),
    },
    telugu: {
        title: "Telugu",
        image_url:
            "https://t.scdn.co/images/96b5132876eb4e818723555ce365cd87.jpeg",
        background_color: colorGenerator(),
    },
    indie: {
        title: "Indie",
        image_url:
            "https://t.scdn.co/images/fe06caf056474bc58862591cd60b57fc.jpeg",
        background_color: colorGenerator(),
    },
    gaming: {
        title: "Gaming",
        image_url:
            "https://i.scdn.co/image/ab67706f0000000221a2087747d946f16704b8af",
        background_color: colorGenerator(),
    },
    equal: {
        title: "Equal",
        image_url:
            "https://i.scdn.co/image/ab67706f0000000284a1ec26f589f0d569805a07",
        background_color: colorGenerator(),
    },
    pop: {
        title: "Pop",
        image_url:
            "https://t.scdn.co/media/derived/pop-274x274_447148649685019f5e2a03a39e78ba52_0_0_274_274.jpg",
        background_color: colorGenerator(),
    },
    radar: {
        title: "RADAR",
        image_url:
            "https://t.scdn.co/images/c6677aa51acf4121b66b9d1f231bd427.png",
        background_color: colorGenerator(),
    },
    fresh_finds: {
        title: "Fresh Finds",
        image_url:
            "https://t.scdn.co/images/16e40e64d2a74fa8a0a020d456e6541d.jpeg",
        background_color: colorGenerator(),
    },
    marathi: {
        title: "Marathi",
        image_url:
            "https://t.scdn.co/images/713254a577a64338a450481329f0d83f.jpeg",
        background_color: colorGenerator(),
    },
    wellness: {
        title: "Wellness",
        image_url: "https://t.scdn.co/images/3710b68657574bc79df14bd74629e5ac",
        background_color: colorGenerator(),
    },
    devotional: {
        title: "Devotional",
        image_url: "https://t.scdn.co/images/a1817e719adc4716b8f7a8ccecf64d9b",
        background_color: colorGenerator(),
    },
    indian_classical: {
        title: "Indian Classical",
        image_url: "https://t.scdn.co/images/0dcbe54ffb604b37b1ae96223f2524be",
        background_color: colorGenerator(),
    },
    romance: {
        title: "Romance",
        image_url:
            "https://i.scdn.co/image/ab67706f0000000213601d4833623a4d6b328e38",
        background_color: colorGenerator(),
    },
    happy_holidays: {
        title: "Happy Holidays",
        image_url:
            "https://t.scdn.co/images/8095bb75a61e4623906cb847ae87d9da.jpeg",
        background_color: colorGenerator(),
    },
    decades: {
        title: "Decades",
        image_url: "https://t.scdn.co/images/4c8b58ab42b54296ad5379514d36edac",
        background_color: colorGenerator(),
    },
    k_pop: {
        title: "K-Pop",
        image_url:
            "https://i.scdn.co/image/ab67706f00000002978b9f4a4f40b430fd0d837e",
        background_color: colorGenerator(),
    },
    netflix: {
        title: "Netflix",
        image_url: "https://t.scdn.co/images/1a416fb97f5647858c7f09c9cb6e7301",
        background_color: colorGenerator(),
    },
    disney: {
        title: "Disney",
        image_url: "https://t.scdn.co/images/27922fb7882e4d078c59b29cef4111b9",
        background_color: colorGenerator(),
    },
    hip_hop: {
        title: "Hip-Hop",
        image_url:
            "https://i.scdn.co/image/ab67706f000000029bb6af539d072de34548d15c",
        background_color: colorGenerator(),
    },
    party: {
        title: "Party",
        image_url:
            "https://t.scdn.co/images/fada056dcfd54cd28faf80d62b7059c6.jpeg",
        background_color: colorGenerator(),
    },
    instrumental: {
        title: "Instrumental",
        image_url:
            "https://i.scdn.co/image/ab67706f000000028ed1a5002b96c2ea882541b2",
        background_color: colorGenerator(),
    },
    dance_electronic: {
        title: "Dance/Electronic",
        image_url:
            "https://t.scdn.co/media/derived/edm-274x274_0ef612604200a9c14995432994455a6d_0_0_274_274.jpg",
        background_color: colorGenerator(),
    },
    student: {
        title: "Student",
        image_url:
            "https://t.scdn.co/images/67a216e1e07144f889d366fed5c325bc.jpeg",
        background_color: colorGenerator(),
    },
};
export default genre;
