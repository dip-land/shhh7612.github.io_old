//Variables
const darkModeInput = document.querySelector('input');
const mainNavigation = document.querySelector('nav')!;
let baseNavImage = window.getComputedStyle(mainNavigation).backgroundImage;

//DarkMode/LightMode Handling
if (JSON.parse(localStorage.getItem('settings') || '{"darkmode": "true"}').darkmode === "false") {
    toggleDM();
}

document.addEventListener("keyup", function (event) {
    if (event.key !== 'Enter') return;
    if (darkModeInput === document.activeElement) toggleDM(darkModeInput!);
});

function toggleDM(input?: HTMLInputElement) {
    document.documentElement.classList.toggle('default');
    document.documentElement.classList.toggle('light_mode');
    input = input || document.querySelector('input')!;
    mainNavigation.style.backgroundImage = '';
    baseNavImage = window.getComputedStyle(mainNavigation).backgroundImage;
    updateNavIgation();
    if (document.documentElement.classList.contains('light_mode')) {
        input.checked = true;
        localStorage.setItem('settings', '{"darkmode": "false"}');
    } else {
        input.checked = false;
        localStorage.setItem('settings', '{"darkmode": "true"}');
    }
}

//Nav Scroll
window.onscroll = function (event) { updateNavIgation() }
function updateNavIgation() {
    return;
    let matches = baseNavImage.match(/rgba?\(((25[0-5]|2[0-4]\d|1\d{1,2}|\d\d?)\s*,\s*?){2}(25[0-5]|2[0-4]\d|1\d{1,2}|\d\d?)\s*,?\s*([01]\.?\d*?)?\)/gim);
    let altered = baseNavImage.replace(matches![1], matches![0]);
    if (window.pageYOffset > 155) mainNavigation.style.backgroundImage = altered;
    if (window.pageYOffset < 155) mainNavigation.style.backgroundImage = baseNavImage.replace(matches![1], 'rgba(0, 0, 0, 0)');
}

//Card functions
function openCard(card?: HTMLDivElement) {
    if (!card) return;
    if (card.classList.contains('open')) return;
    if (card.classList.contains('close')) return;
    let cardImage = card.firstElementChild;
    if(cardImage?.nodeName !== 'IMG') cardImage?.setAttribute("style", "opacity:1;");;

    card.classList.add('open');

}

function closeCard(card?: HTMLDivElement) {
    if (!card) return;
    let cardImage = card.firstElementChild;
    if(cardImage?.nodeName !== 'IMG') cardImage?.setAttribute("style", "opacity:0.3;");;
    card.classList.remove('open');
    card.classList.add('close');
    setTimeout((e: null) => { card.classList.remove('close') }, 100);
}
