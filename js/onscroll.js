window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    var navbar = document.getElementById("navbar");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        navbar.classList.add("shadow");
        navbar.classList.add("bg-white");

    } else {
        navbar.classList.remove("shadow");
        navbar.classList.remove("bg-white");
       
    }
}




const coltdown = setInterval(function() {
  
const TimeNow = new Date().getTime()
const NextTime = new Date('Jan 29, 2022 12:00:00').getTime()    
const selisih = NextTime - TimeNow

let h = Math.floor(selisih / (1000 * 60 * 60 * 24))
let j = Math.floor( selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60 ))
let m = Math.floor( selisih % (1000 * 60 * 60) / (1000 * 60 ))
let d = Math.floor( selisih % (1000 * 60) / 1000)

let hari = document.getElementById('hari')
let jam = document.getElementById('jam')
let menit = document.getElementById('menit')
let detik = document.getElementById('detik')    

hari.innerHTML = `${h}`
jam.innerHTML = `${j}`
menit.innerHTML = `${m}`
detik.innerHTML = `${d}`
if(selisih <= 0){
    clearInterval(coltdown)
}
        


},1000)