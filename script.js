const maxWidth = 1056

function dropdown(id) {
    if(!document.getElementById('dd' + id).classList.contains('showdropdown')){
        Array.from(document.getElementsByClassName('showdropdown')).forEach(drop => {drop.classList.remove('showdropdown')});
        Array.from(document.getElementsByClassName('droprotate')).forEach(drop => {drop.classList.remove('droprotate')});
    }
    document.getElementById('dd' + id).classList.toggle('showdropdown');
    document.getElementById('da' + id).classList.toggle('droprotate');
}

window.onclick = function(e) {
    if (window.screen.width >= maxWidth) {
        if (!e.target.matches('.dropbtn')) {
            Array.from(document.getElementsByClassName('showdropdown')).forEach(drop => {drop.classList.remove('showdropdown')});
            Array.from(document.getElementsByClassName('droprotate')).forEach(drop => {drop.classList.remove('droprotate')});
        }
    }
}
function toggleNav() {
    document.getElementById('nav').classList.toggle('extend');
    document.getElementById('navticon').classList.toggle('fa-bars');
    document.getElementById('navticon').classList.toggle('fa-times');
    Array.from(document.getElementsByClassName('showdropdown')).forEach(drop => {drop.classList.remove('showdropdown')});
    Array.from(document.getElementsByClassName('droprotate')).forEach(drop => {drop.classList.remove('droprotate')});
}
function copyall(block) {
    let element = document.getElementById(block);
    for (let i = 0; i < element.children.length; i++) {
        if(element.children[i].tagName === 'PRE'){
            navigator.clipboard.writeText(element.children[i].innerText).then(function() {
                console.log('Async: Copying to clipboard was successful!', element.children[i].innerText);
              }, function(err) {
                console.error('Async: Could not copy text: ', err);
            });
        }
    }
}
window.addEventListener('resize', ()=>{
    if (window.screen.width >= maxWidth) {
        if(document.getElementById('nav').classList.contains('extend')){
            toggleNav()
        }
    }
})

window.addEventListener('load', ()=>{
    if(window.location.toString().toLowerCase().includes("ardsclient")){window.location.replace("https://shhh7612.github.io/Ards-Client/")}
    if(window.location.toString().includes("ards-client")){window.location.replace("https://shhh7612.github.io/Ards-Client/")}
    if(window.location.toString().includes("aika")){window.location.replace("https://shhh7612.github.io/Aika/")}
    if(window.location.toString().includes("ryoushin")){window.location.replace("https://shhh7612.github.io/Ryoushin/")}
    if(window.location.toString().includes("yuna")){window.location.replace("https://shhh7612.github.io/Yuna/")}
    console.log(window.location)
})