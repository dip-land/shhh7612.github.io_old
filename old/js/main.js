class details_custom extends HTMLElement {
    constructor() {
        super();
        this.setAttribute('tabindex', 0);
        this.addEventListener('click', e => {
            this.toggleAttribute('open');
        });
    }
}

window.customElements.define("nav-dropdown", details_custom);

function openNav() {
    let x = document.getElementsByTagName('nav').item(0)
    console.log(x)
    let y = document.getElementById("main");
    if (x.className === "normal") {
        x.className += " responsive";
    } else {
        x.className = "normal";
    }
}

const debounce = (fn) => {
    let frame;
    return (...params) => {
        if (frame) cancelAnimationFrame(frame);
        frame = requestAnimationFrame(() => {
            fn(...params);
        });
    }
};
const storeScroll = () => {
    document.documentElement.dataset.maxScroll = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
    document.documentElement.dataset.scroll = window.scrollY;
}
document.addEventListener('scroll', debounce(storeScroll), {
    passive: true
});
storeScroll();

function createPopup(title, text, buttons) {
    let popup_container = document.createElement('popup-container');
    let popup_box = document.createElement('popup-box');
    let popup_title = document.createElement('popup-title');
    let popup_text = document.createElement('popup-text');
    let popup_buttons = document.createElement('popup-buttons');

    popup_title.innerText = title;
    popup_text.innerHTML = text;

    buttons.forEach(button => {
        let btn = document.createElement('popup-button');
        btn.innerText = button.name;
        btn.setAttribute('onclick', button.click);
        popup_buttons.append(btn);
    })

    popup_container.append(popup_box);
    popup_box.append(popup_title, popup_text, popup_buttons);
    document.body.prepend(popup_container);
}

if (localStorage.getItem('is16+') === null || localStorage.getItem('is16+') === 'false') {
    createPopup(
        'Are you 16 or older?',
        "This website contains some things that some users might find disturbing, so we require you to be 16 or older.",
        [
            {
                name: 'Yes',
                click: 'is16(this.parentElement.parentElement.parentElement)'
            },
            {
                name: 'No',
                click: 'not16(this.parentElement)'
            }
        ]
    );
} else {

}

function is16(popup) {
    popup.remove();
    localStorage.setItem('is16+', true);
}

function not16(parent) {
    localStorage.setItem('is16+', false);
    parent.innerHTML = 'Thank you for your honesty. Your reward is <a style="color:var(--themeColor);"href="https://www.youtube.com/watch?v=1CnYiuKRdlI">this video</a> of a frog in a top hat.'
}


function copyall(block) {
    let element = document.getElementById(block);
    for (let i = 0; i < element.children.length; i++) {
        if (element.children[i].tagName === `PRE`) {
            navigator.clipboard.writeText(element.children[i].innerText).then(() => {
                alert(`Copied ${element.children[i].innerText}`);
            });
        }
    }
}