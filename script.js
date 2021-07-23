function dropdown() {document.getElementById("projects").classList.toggle("show");document.getElementById("droparrow").classList.toggle("droprotate");}
window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
        let projectsDD = document.getElementById("projects"), droparrow = document.getElementById("droparrow");;
        if (projectsDD.classList.contains('show')) {projectsDD.classList.remove('show');}
        if (droparrow.classList.contains('droprotate')) {droparrow.classList.remove('droprotate');}
    }
}