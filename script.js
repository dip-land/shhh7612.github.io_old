function dropdown(id) {
    if(!document.getElementById("dd" + id).classList.contains('show')){
        Array.from(document.getElementsByClassName("show")).forEach(drop => {drop.classList.remove('show')});
        Array.from(document.getElementsByClassName("droprotate")).forEach(drop => {drop.classList.remove('droprotate')});
    }
    document.getElementById("dd" + id).classList.toggle("show");
    document.getElementById("da" + id).classList.toggle("droprotate");
}

window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
        Array.from(document.getElementsByClassName("show")).forEach(drop => {drop.classList.remove('show')});
        Array.from(document.getElementsByClassName("droprotate")).forEach(drop => {drop.classList.remove('droprotate')});
    }
}

function copyall(block) {
    let text = document.getElementById(block).children[1].innerText;
    navigator.clipboard.writeText(text).then(function() {
        console.log('Async: Copying to clipboard was successful!');
      }, function(err) {
        console.error('Async: Could not copy text: ', err);
      });
  }