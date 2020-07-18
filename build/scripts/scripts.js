var i = 0;
var j = 0;
var imgMusic = [];
imgMusic[0] = 'assets/img/Mezzanine.png';
imgMusic[1] = 'assets/img/Currents.jpg';
imgMusic[2] = 'assets/img/ElCamino.jpg';
var imgMovie = [];
imgMovie[0] = 'assets/img/pulpfiction.jpg';
imgMovie[1] = 'assets/img/whiplash.jpg';
imgMovie[2] = 'assets/img/nightcrawler.jpg';


window.onload = function(){
    document.musicSlide.src = imgMusic[i];
    document.movieSlide.src = imgMovie[i];
};

function nextSlide1(){ 
    i++;
    if(i > imgMusic.length - 1){
        i = 0;
    }
    document.musicSlide.src = imgMusic[i];
};

function prevSlide1(){
    i--;
    if(i < 0){
        i = 2;
    }
    document.musicSlide.src = imgMusic[i];
};

function nextSlide2(){ 
    j++;
    if(j > imgMovie.length - 1){
        j = 0;
    }
    document.movieSlide.src = imgMovie[j];
};

function prevSlide2(){
    j--;
    if(j < 0){
        j = 2;
    }
    document.movieSlide.src = imgMovie[j];
};