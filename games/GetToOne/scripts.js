var localStorage = window.localStorage;
var money = localStorage.getItem("money") ? parseFloat(localStorage.getItem("money")) : 0;
var number = document.getElementById('money');
var cpsNum = document.getElementById('cps');
var start = clicks = frequency = 0;
start = new Date 
number.innerText = money
setInterval(()=>{
    localStorage.setItem("money", money)
}, 1000)
document.onclick= function(event) {
    number.innerText = money;
    if(event === undefined) event = window.event;
    var target = event.target ? event.target : event.srcElement;
    if(target.id === "clicker"){
        money++
        clicks++
    }
};
 
setInterval(() => {
    frequency = clicks / (new Date - start) * 1000
    cpsNum.innerText = Math.round(frequency) + "CPS";
}, 100)