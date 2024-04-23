window.setInterval(() => {
    var date = new Date();

    // Analog clock matter code start here 

    htime = date.getHours();
    mtime = date.getMinutes();
    stime = date.getSeconds();
    hrotate = 30 * htime + mtime / 2;
    mrotate = 6 * mtime;
    srotate = 6 * stime;
    document.querySelector(".hour").style.transform = `rotate(${hrotate}deg)`;
    document.querySelector(".min").style.transform = `rotate(${mrotate}deg)`;
    document.querySelector(".sec").style.transform = `rotate(${srotate}deg)`;

    // Digital clock matter code start here 

    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    document.querySelector(".day").innerHTML = days[date.getDay()];
    document.querySelector(".month").innerHTML = months[date.getMonth()];
    document.querySelector(".year").innerHTML = date.getFullYear();
    var stdh = document.getElementById("hourtime").innerHTML = date.getHours() % 12;
    var stdm = document.getElementById("mtime").innerHTML = date.getMinutes();

}, 1000);

var mode = document.getElementById('mode');
var cont = document.querySelector('.container');
var hd = document.querySelector(".hour");
var md = document.querySelector(".min");
var sd = document.querySelector(".sec");
mode.onclick = function () {
    cont.classList.toggle('dark');
}