redirect();

class anchor_custom extends HTMLElement {
    constructor() {
        super();
        this.href = this.getAttribute('href');
        this.target = this.getAttribute('target');
        this.setAttribute('tabindex', 0);
        if (this.target === null) this.target = '_self';
        this.addEventListener('click', e => {
            if (this.href) window.open(this.href, this.target, '');
        });
    }
}

class details_custom extends HTMLElement {
    constructor() {
        super();
        this.setAttribute('tabindex', 0);
        this.addEventListener('click', e => {
            this.toggleAttribute('open');
        });
    }
}

window.customElements.define("nav-item", anchor_custom);
window.customElements.define("nav-dropdown", details_custom);

function openNav() {
    let x = document.getElementsByTagName('nav').item(0)
    console.log(x)
    let y = document.getElementById("main");
    if (x.className === "normal") {
        x.className += " responsive";
        y.className += " hidden";
    } else {
        x.className = "normal";
        y.className = "main";
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
    let limit = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
    document.documentElement.dataset.scroll = window.scrollY;
    document.body.style.setProperty('--scroll', `${-100 + ((window.scrollY / (limit - window.innerHeight)) * 100)}px`)
}
document.addEventListener('scroll', debounce(storeScroll), {
    passive: true
});
storeScroll();

function createPopup(title, text, buttonText, buttonData) {
    let popup_container = document.createElement('popup-container');
    let popup_box = document.createElement('popup-box');
    let popup_title = document.createElement('popup-title');
    let popup_text = document.createElement('popup-text');
    let popup_buttons = document.createElement('popup-buttons');

    popup_title.innerText = title;
    popup_text.innerHTML = text;

    buttonText.forEach((item, index) => {
        let b = document.createElement('popup-button');
        b.innerText = item;
        b.setAttribute('onclick', buttonData[index]);
        popup_buttons.append(b);
    })

    popup_container.append(popup_box);
    popup_box.append(popup_title, popup_text, popup_buttons);
    document.body.prepend(popup_container);
}

// if (localStorage.getItem('cookies') === null) {
//     createPopup(
//         'Cookies',
//         "We have some cookies for you! <br> Our cookies are used to save your settings for this website, and so you won't have to see this pop up for quite a while.",
//         ['Accept', 'Decline'],
//         ['acceptCookies(this.parentElement.parentElement.parentElement)', 'declineCookies(this.parentElement.parentElement.parentElement)']
//     );
// } else {

// }
if (localStorage.getItem('is16+') === null || localStorage.getItem('is16+') === 'false') {
    createPopup(
        'Are you 16 or older?',
        "This website contains some things that some users might find disturbing, so we require you to be 16 or older.",
        ['Yes', 'No'],
        ['is16(this.parentElement.parentElement.parentElement)', 'not16(this.parentElement)']
    );
} else {

}

function acceptCookies(popup) {
    popup.remove();
    localStorage.setItem('cookies', true);
}

function declineCookies(popup) {
    popup.remove();
    localStorage.setItem('cookies', false);
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

function isUpper(str) {
    return !/[a-z]/.test(str) && /[A-Z]/.test(str);
}

function redirect() {
    if (isUpper(location.toString())) {
        location.replace(location.toString().toLowerCase())
    }
    if (location.toString() === `${location.origin}/Ards-Client/classes/hentai`) {
        location.replace(`${location.origin}/ards-client/docs/v2/classes/hentai`)
    }
    if (location.toString() === `${location.origin}/Ards-Client/classes/hentai/danbooru`) {
        location.replace(`${location.origin}/ards-client/docs/v2/classes/hentai/danbooru`)
    }
    if (location.toString() === `${location.origin}/Ards-Client/classes/hentai/konachan`) {
        location.replace(`${location.origin}/ards-client/docs/v2/classes/hentai/konachan`)
    }
    if (location.toString() === `${location.origin}/Ards-Client/classes/hentai/neko`) {
        location.replace(`${location.origin}/ards-client/docs/v2/classes/hentai/neko`)
    }
    if (location.toString() === `${location.origin}/Ards-Client/classes/hentai/rule34`) {
        location.replace(`${location.origin}/ards-client/docs/v2/classes/hentai/rule34`)
    }
    if (location.toString() === `${location.origin}/Ards-Client/classes/hentai/yandere`) {
        location.replace(`${location.origin}/ards-client/docs/v2/classes/hentai/yandere`)
    }
    if (location.toString() === `${location.origin}/Ards-Client/classes/meme`) {
        location.replace(`${location.origin}/ards-client/docs/v2/classes/meme`)
    }
    if (location.toString() === `${location.origin}/Ards-Client/classes/meme/random`) {
        location.replace(`${location.origin}/ards-client/docs/v2/classes/meme/random`)
    }
    if (location.toString() === `${location.origin}/Ards-Client/classes/porn`) {
        location.replace(`${location.origin}/ards-client/docs/v2/classes/porn`)
    }
    if (location.toString() === `${location.origin}/Ards-Client/classes/porn/ass`) {
        location.replace(`${location.origin}/ards-client/docs/v2/classes/porn/ass`)
    }
    if (location.toString() === `${location.origin}/Ards-Client/classes/porn/boobs`) {
        location.replace(`${location.origin}/ards-client/docs/v2/classes/porn/boobs`)
    }
    if (location.toString() === `${location.origin}/Ards-Client/classes/porn/panties`) {
        location.replace(`${location.origin}/ards-client/docs/v2/classes/porn/panties`)
    }
    if (location.toString() === `${location.origin}/Ards-Client/classes/porn/pussy`) {
        location.replace(`${location.origin}/ards-client/docs/v2/classes/porn/pussy`)
    }
    if (location.toString() === `${location.origin}/Ards-Client/classes/porn/random`) {
        location.replace(`${location.origin}/ards-client/docs/v2/classes/porn/random`)
    }
    if (location.toString() === `${location.origin}/Ards-Client/classes/porn/thighs`) {
        location.replace(`${location.origin}/ards-client/docs/v2/classes/porn/thighs`)
    }
    if (location.toString() === `${location.origin}/Ards-Client/classes/reddit`) {
        location.replace(`${location.origin}/ards-client/docs/v2/classes/reddit`)
    }
    if (location.toString() === `${location.origin}/Ards-Client/classes/reddit/custom`) {
        location.replace(`${location.origin}/ards-client/docs/v2/classes/reddit/custom`)
    }
    if (location.toString() === `${location.origin}/Ards-Client/classes/reddit/custom_1`) {
        location.replace(`${location.origin}/ards-client/docs/v2/classes/reddit/custom_1`)
    }
}