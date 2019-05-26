
const slides = [
    { id: 1, name: 'Derek Anderson1', job: 'BRITISH COMEDIAN', video: 'https://www.youtube.com/embed/i0UK_hhNMfc', title: 'ENQUIRE ABOUT DEREK' },
    { id: 2, name: 'Derek Anderson2', job: 'BRITISH ACTOR', video: 'https://www.youtube.com/embed/Nlf6UdGsDa0',title: 'ENQUIRE ABOUT DEREK'},
    { id: 3, name: 'Derek Anderson3', job: 'BRITISH ARTIST', video: 'https://www.youtube.com/embed/m9MaDdiRUAw', title: 'ENQUIRE ABOUT DEREK' },
    { id: 4, name: 'Derek Anderson4', job: 'IRELAND DANCER', video: 'https://www.youtube.com/embed/a1wL4PMc4Vo', title: 'ENQUIRE ABOUT DEREK' }
];

let currentSlide = 0;

const leftArrowElement = document.querySelector('.slider-left-arrow');
const rightArrowElement = document.querySelector('.slider-right-arrow');

function doSlide(direction) {
  
    currentSlide += direction;
    document.querySelector('.person-name').innerText = slides[currentSlide].name;
    document.querySelector('.main-video').src = slides[currentSlide].video;
    document.querySelector('.person-job ').innerText = slides[currentSlide].job;
    document.querySelector('.slide-title').innerText = slides[currentSlide].title;
    // change video
    // change title
    // change job
    // change slider-page
    if (currentSlide === 0) {
        leftArrowElement.classList.add('disabled');
    } else {
        leftArrowElement.classList.remove('disabled');
    }
}


const mockData = [{ "id": 1, "name": "Вася", "job": "QA", "photo": "https://cdn-03.independent.ie/style/celebrity/celebrity-news/article37866116.ece/097c2/AUTOCROP/w620/ipanews_cbc3aeeb-0628-4b80-8370-0cd43cbc3929_1" }, { "id": 2, "name": "Петя", "job": "Developer", "photo": "https://pmctvline2.files.wordpress.com/2018/10/game-of-thrones-peter-dinklage-tyrion-death-season-8-interview.jpg?w=620" }, { "id": 3, "name": "Вова", "job": "Senior Developer", "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcaeIWOmi62oncorhSKDzoBPIA7mF1QWUqgnFXKRTbaGHAsp8fUA" }, { "id": 4, "name": "Арчибальд", "job": "QA Lead", "photo": "https://cdn-static.denofgeek.com/sites/denofgeek/files/styles/main_wide/public/2018/05/game-of-thrones-season-1-recap.jpg?itok=ZwQDxPFR" }, { "id": 5, "name": "Клава", "job": "PM", "photo": "https://media.socastsrm.com/wordpress/wp-content/blogs.dir/873/files/2019/04/game-of-thrones-character-poster.jpg" }, { "id": 6, "name": "Дуся", "job": "DM", "photo": "https://pmcvariety.files.wordpress.com/2017/12/game-of-thrones-sansa.jpg?w=1000&h=563&crop=1" }, { "id": 7, "name": "Саманта", "job": "BA", "photo": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/lena-headey-cersei-lannister-game-of-thrones-season-8-1553173898.jpg?resize=480:*" }, { "id": 8, "name": "Ядвига", "job": "Junior QA", "photo": "https://www.hbo.com/content/dam/hbodata/series/game-of-thrones/episodes/8/episodes/69/ep69-gamerevealed-1920x1080.jpg/_jcr_content/renditions/cq5dam.web.1200.675.jpeg" }, { "id": 9, "name": "Акакий", "job": "DevOps", "photo": "https://dwgyu36up6iuz.cloudfront.net/heru80fdn/image/upload/c_fill,d_placeholder_wired.png,fl_progressive,g_face,h_450,q_80,w_800/v1389040063/wired_alfie-allen-on-game-of-thrones.jpg" }, { "id": 10, "name": "Нестор", "job": "DB Expert", "photo": "" }, { "id": 11, "name": "Потап", "job": "Solutions Architect", "photo": "" }, { "id": 12, "name": "Платон", "job": "DB Expert", "photo": "" }, { "id": 13, "name": "Ефросинья", "job": "Frontend Developer", "photo": "" }, { "id": 14, "name": "Джонатан", "job": "Backend Developer", "photo": "" }, { "id": 15, "name": "Грег", "job": "Грег", "photo": "" }];
let currentPhoto = 0;

let carouselButton = document.querySelector('.slider-page');

function frw(currentPhoto){
    
    document.querySelector('.changed-photo').src = mockData[currentPhoto-1].photo;
   
}


