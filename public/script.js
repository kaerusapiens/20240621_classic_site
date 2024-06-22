function tick() {
    var d = new Date();
    var n = d.toLocaleTimeString();
    document.getElementById('currentTime').innerHTML = n;
}
setInterval(tick, 1000);