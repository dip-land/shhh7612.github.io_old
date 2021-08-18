const maxWidth = 1056

function dropdown(id) {
    if(!document.getElementById('dd' + id).classList.contains('showdropdown')){
        Array.from(document.getElementsByClassName('showdropdown')).forEach(drop => {drop.classList.remove('showdropdown')});
        Array.from(document.getElementsByClassName('droprotate')).forEach(drop => {drop.classList.remove('droprotate')});
    }
    document.getElementById('dd' + id).classList.toggle('showdropdown');
    document.getElementById('da' + id).classList.toggle('droprotate');
    console.log(id)
}

window.onclick = function(e) {
    if (window.screen.width >= maxWidth) {
        if (!e.target.matches('.dropbtn')) {
            Array.from(document.getElementsByClassName('showdropdown')).forEach(drop => {drop.classList.remove('showdropdown')});
            Array.from(document.getElementsByClassName('droprotate')).forEach(drop => {drop.classList.remove('droprotate')});
            console.log(`closed ${e}`)
        }
        console.log(e)
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