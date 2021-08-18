const maxWidth = 1056

function isUpper(str) {
    return !/[a-z]/.test(str) && /[A-Z]/.test(str);
}

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
    if(isUpper(window.location.toString())){window.location.replace(window.location.toString().toLowerCase())}
    //hentai old
    if(window.location.toString() === 'https://shhh7612.github.io/Ards-Client/classes/hentai'){window.location.replace("https://shhh7612.github.io/Ards-Client/old/classes/hentai")}
    if(window.location.toString() === 'https://shhh7612.github.io/Ards-Client/classes/hentai/danbooru'){window.location.replace("https://shhh7612.github.io/Ards-Client/old/classes/hentai/danbooru")}
    if(window.location.toString() === 'https://shhh7612.github.io/Ards-Client/classes/hentai/konachan'){window.location.replace("https://shhh7612.github.io/Ards-Client/old/classes/hentai/konachan")}
    if(window.location.toString() === 'https://shhh7612.github.io/Ards-Client/classes/hentai/neko'){window.location.replace("https://shhh7612.github.io/Ards-Client/old/classes/hentai/neko")}
    if(window.location.toString() === 'https://shhh7612.github.io/Ards-Client/classes/hentai/rule34'){window.location.replace("https://shhh7612.github.io/Ards-Client/old/classes/hentai/rule34")}
    if(window.location.toString() === 'https://shhh7612.github.io/Ards-Client/classes/hentai/yandere'){window.location.replace("https://shhh7612.github.io/Ards-Client/old/classes/hentai/yandere")}
    //meme old
    if(window.location.toString() === 'https://shhh7612.github.io/Ards-Client/classes/meme'){window.location.replace("https://shhh7612.github.io/Ards-Client/old/classes/meme")}
    if(window.location.toString() === 'https://shhh7612.github.io/Ards-Client/classes/meme/random'){window.location.replace("https://shhh7612.github.io/Ards-Client/old/classes/meme/random")}
    //porn old 
    if(window.location.toString() === 'https://shhh7612.github.io/Ards-Client/classes/porn'){window.location.replace("https://shhh7612.github.io/Ards-Client/old/classes/porn")}
    if(window.location.toString() === 'https://shhh7612.github.io/Ards-Client/classes/porn/ass'){window.location.replace("https://shhh7612.github.io/Ards-Client/old/classes/porn/ass")}
    if(window.location.toString() === 'https://shhh7612.github.io/Ards-Client/classes/porn/boobs'){window.location.replace("https://shhh7612.github.io/Ards-Client/old/classes/porn/boobs")}
    if(window.location.toString() === 'https://shhh7612.github.io/Ards-Client/classes/porn/panties'){window.location.replace("https://shhh7612.github.io/Ards-Client/old/classes/porn/panties")}
    if(window.location.toString() === 'https://shhh7612.github.io/Ards-Client/classes/porn/pussy'){window.location.replace("https://shhh7612.github.io/Ards-Client/old/classes/porn/pussy")}
    if(window.location.toString() === 'https://shhh7612.github.io/Ards-Client/classes/porn/random'){window.location.replace("https://shhh7612.github.io/Ards-Client/old/classes/porn/random")}
    if(window.location.toString() === 'https://shhh7612.github.io/Ards-Client/classes/porn/thighs'){window.location.replace("https://shhh7612.github.io/Ards-Client/old/classes/porn/thighs")}
    //reddit old
    if(window.location.toString() === 'https://shhh7612.github.io/Ards-Client/classes/reddit'){window.location.replace("https://shhh7612.github.io/Ards-Client/old/classes/reddit")}
    if(window.location.toString() === 'https://shhh7612.github.io/Ards-Client/classes/reddit/custom'){window.location.replace("https://shhh7612.github.io/Ards-Client/old/classes/reddit/custom")}
    if(window.location.toString() === 'https://shhh7612.github.io/Ards-Client/classes/reddit/custom_1'){window.location.replace("https://shhh7612.github.io/Ards-Client/old/classes/reddit/custom_1")}
})