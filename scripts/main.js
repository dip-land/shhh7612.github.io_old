loadSettings();

const debounce = (fn) => {
    let frame;
    return(...params) => {
      if(frame) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        fn(...params);
      });
  
    } 
  };
const storeScroll = () => {
    document.documentElement.dataset.scroll = window.scrollY;
}
document.addEventListener('scroll', debounce(storeScroll), { passive: true });
storeScroll();

function iframeCorrect(frame){
    frame.style.height = frame.contentWindow.document.body.scrollHeight+'px'
    window.addEventListener(`resize`, ()=>{
        frame.style.height = frame.contentWindow.document.body.scrollHeight+'px'
    })
}

window.addEventListener(`load`, ()=>{
    fetchStats();
    redirect();
})

window.addEventListener('click', function(e) {
    const target = e.target;   
    if (`${target.getAttribute('onclick')}`.includes('openDropdown')) {
        Array.from(target.parentElement.children).forEach(item => {
            if(item.tagName === 'UL'){
                //console.log(localStorage.getItem(item.id))
            }
        })
        // Array.from(document.getElementsByClassName(`showdropdown`)).forEach(drop => {
        //     if(drop.parentNode.parentElement.tagName !== "ASIDE"){drop.classList.remove(`showdropdown`)}
        // });
        // Array.from(document.getElementsByClassName(`droprotate`)).forEach(drop => {
        //     if(drop.parentNode.parentNode.parentElement.tagName !== "ASIDE"){drop.classList.remove(`droprotate`)}
        // });
    }
    if(target.tagName === 'BUTTON' && target.classList.contains(`copy`)){
        const element = target.parentNode.parentNode;
        for (let i = 0; i < element.children.length; i++) {
            if(element.children[i].tagName === `PRE`){
                navigator.clipboard.writeText(element.children[i].innerText).then(() => {
                    target.children[0].classList.toggle('copied')
                    this.setTimeout(() => {
                        target.children[0].classList.toggle('copied')
                    }, 2500)
                });
            }
        }
    }
});

function openDropdown(dropdown){
    Array.from(dropdown.children).forEach(item => {
        if(item.tagName === "UL" && item.classList.contains(`dropdown`)){
            if(item.style.opacity === "1") {
                item.style.opacity = "0";
                item.style['pointer-events'] = "none";
                localStorage.setItem(item.id, "closed");
            } 
            else if(item.style.opacity === "0" || item.style.opacity === "") {
                item.style.opacity = "1";
                item.style['pointer-events'] = "all";
                localStorage.setItem(item.id, "open");
            }
        }
    })
}

function copyall(block) {
    let element = document.getElementById(block);
    for (let i = 0; i < element.children.length; i++) {
        if(element.children[i].tagName === `PRE`){
            navigator.clipboard.writeText(element.children[i].innerText).then(() => {
                alert(`Copied ${element.children[i].innerText}`);
            });
        }
    }
}

function isUpper(str) {
    return !/[a-z]/.test(str) && /[A-Z]/.test(str);
}
function toggleNav() {
    document.getElementsByTagName(`nav`).item(0).children[0].classList.toggle(`extend`);
    document.getElementById(`navicon`).classList.toggle(`fa-bars`);
    document.getElementById(`navicon`).classList.toggle(`fa-times`);
}
function fetchStats(){
    if(location.toString().includes('/aika')){
        fetch(atob(`aHR0cHM6Ly90b3AuZ2cvYXBpL2JvdHMvODQ3MDMyNTY4Nzk2MTUxODI4`), {method: `GET`, headers: {"Authorization": [`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9`,`eyJpZCI6Ijg0NzAzMjU2ODc5NjE1MTgyOCIsImJvdCI6dHJ1ZSwiaWF0IjoxNjI0MTI0Mjg3fQ`,`fdzMuwXwuAd03lLBlZ42KVCsxcM6D4a2ee4gm7v1uqk`].join(`.`)}}).then(data=>{data.json().then(data=>{document.getElementsByClassName(atob(`Ym90LXNlcnZlci1jb3VudA==`))[0].innerText = data[atob(`c2VydmVyX2NvdW50`)]})})
    }
    if(document.getElementById(`contributors`)){
        let downloads = 0;
        fetch(`https://api.npmjs.org/downloads/range/2013-08-21:2100-08-21/ards-client`).then(data=>{data.json().then(data=>{
            data.downloads.forEach(day => downloads = downloads + day.downloads);
            document.getElementById(`downloads`).innerText = downloads.toLocaleString() + ` downloads`;
        })})
        fetch(`https://api.github.com/repos/shhh7612/ards-client`).then(data=>{data.json().then(data=>{
            document.getElementById(`stars`).innerText = data.stargazers_count.toLocaleString() + ` stars`;
            document.getElementById(`forks`).innerText = data.forks_count.toLocaleString() + ` forks`;
            document.getElementById(`openIssues`).innerText = data.open_issues_count.toLocaleString() + ` open issues`
        })})
        fetch(`https://api.github.com/repos/shhh7612/ards-client/stats/contributors`).then(data=>{data.json().then(data=>{
            document.getElementById(`contributors`).innerText = data.length.toLocaleString() + ` contributors`;
        })})
    }
}
function loadSettings() {
    if(localStorage.getItem("saveSettings") === "true" && document.getElementById("setting_save")){
        document.getElementById("setting_save").checked = true;
        if(localStorage.getItem("darkMode") === "false") {
            document.getElementById("theme_toggler").checked = true;
            darkModeToggle({checked: true});
        }
        if(localStorage.getItem('hideScroll') === "true"){
            document.getElementById("hd_scroll").checked = true;
            setTimeout(()=>{
                hideScrollToggle({checked: true});
            }, 500)
        }
    } else {
        localStorage.setItem("saveSettings", false);
        localStorage.setItem("darkMode", true);
        localStorage.setItem("hideScroll", false);
        localStorage.setItem("keepDrop", false);
        localStorage.setItem("saveScroll", false);
    }
}
function darkModeToggle(check) {
    if(check.checked){
        localStorage.setItem("darkMode", false);
        setLightMode();
    } else {
        localStorage.setItem("darkMode", true);
        setDarkMode();
    }
}
function setLightMode(){
    document.documentElement.style.setProperty("--primaryText", "#000000");
    document.documentElement.style.setProperty("--secondaryText", "hsl(0, 0%, 20%)");
    document.documentElement.style.setProperty("--tertiaryBG", "hsla(var(--themeHue), 10%, 95%, 0.9)");
    document.documentElement.style.setProperty("--quaternaryBG", "hsla(var(--themeHue), 10%, 85%, 0.9)");
}
function setDarkMode(){
    document.documentElement.style.setProperty("--primaryText", "#ffffff");
    document.documentElement.style.setProperty("--secondaryText", "rgb(204, 204, 204)");
    document.documentElement.style.setProperty("--tertiaryBG", "hsla(var(--themeHue), 10%, 5%, 0.9)");
    document.documentElement.style.setProperty("--quaternaryBG", "hsla(var(--themeHue), 10%, 15%, 0.9)");
}
function saveSettingsToggle() {
    if(localStorage.getItem("saveSettings") === "true") {
        localStorage.setItem("saveSettings", false);
    } else {
        localStorage.setItem("saveSettings", true);
    }
}
let style = document.createElement("style");
function hideScrollToggle(check) {
    if(check.checked){
        style.innerHTML = `*::-webkit-scrollbar {display: none;}`;
        document.head.appendChild(style);
        localStorage.setItem("hideScroll", true);
    } else {
        style.remove();
        localStorage.setItem("hideScroll", false);
    }
}
function redirect(){
    if(isUpper(location.toString())){location.replace(location.toString().toLowerCase())}
    if(location.toString() === `${location.origin}/Ards-Client/classes/hentai`){location.replace(`${location.origin}/ards-client/docs/v2/classes/hentai`)}
    if(location.toString() === `${location.origin}/Ards-Client/classes/hentai/danbooru`){location.replace(`${location.origin}/ards-client/docs/v2/classes/hentai/danbooru`)}
    if(location.toString() === `${location.origin}/Ards-Client/classes/hentai/konachan`){location.replace(`${location.origin}/ards-client/docs/v2/classes/hentai/konachan`)}
    if(location.toString() === `${location.origin}/Ards-Client/classes/hentai/neko`){location.replace(`${location.origin}/ards-client/docs/v2/classes/hentai/neko`)}
    if(location.toString() === `${location.origin}/Ards-Client/classes/hentai/rule34`){location.replace(`${location.origin}/ards-client/docs/v2/classes/hentai/rule34`)}
    if(location.toString() === `${location.origin}/Ards-Client/classes/hentai/yandere`){location.replace(`${location.origin}/ards-client/docs/v2/classes/hentai/yandere`)}
    if(location.toString() === `${location.origin}/Ards-Client/classes/meme`){location.replace(`${location.origin}/ards-client/docs/v2/classes/meme`)}
    if(location.toString() === `${location.origin}/Ards-Client/classes/meme/random`){location.replace(`${location.origin}/ards-client/docs/v2/classes/meme/random`)}
    if(location.toString() === `${location.origin}/Ards-Client/classes/porn`){location.replace(`${location.origin}/ards-client/docs/v2/classes/porn`)}
    if(location.toString() === `${location.origin}/Ards-Client/classes/porn/ass`){location.replace(`${location.origin}/ards-client/docs/v2/classes/porn/ass`)}
    if(location.toString() === `${location.origin}/Ards-Client/classes/porn/boobs`){location.replace(`${location.origin}/ards-client/docs/v2/classes/porn/boobs`)}
    if(location.toString() === `${location.origin}/Ards-Client/classes/porn/panties`){location.replace(`${location.origin}/ards-client/docs/v2/classes/porn/panties`)}
    if(location.toString() === `${location.origin}/Ards-Client/classes/porn/pussy`){location.replace(`${location.origin}/ards-client/docs/v2/classes/porn/pussy`)}
    if(location.toString() === `${location.origin}/Ards-Client/classes/porn/random`){location.replace(`${location.origin}/ards-client/docs/v2/classes/porn/random`)}
    if(location.toString() === `${location.origin}/Ards-Client/classes/porn/thighs`){location.replace(`${location.origin}/ards-client/docs/v2/classes/porn/thighs`)}
    if(location.toString() === `${location.origin}/Ards-Client/classes/reddit`){location.replace(`${location.origin}/ards-client/docs/v2/classes/reddit`)}
    if(location.toString() === `${location.origin}/Ards-Client/classes/reddit/custom`){location.replace(`${location.origin}/ards-client/docs/v2/classes/reddit/custom`)}
    if(location.toString() === `${location.origin}/Ards-Client/classes/reddit/custom_1`){location.replace(`${location.origin}/ards-client/docs/v2/classes/reddit/custom_1`)}
}

document.onreadystatechange = () => {
    if (document.readyState === `complete`) {
        Array.from(document.getElementsByClassName(`vertical-centered-box`)).forEach(element => {
            element.classList.toggle(`hidden`);
            setTimeout(() => {
                element.parentNode.removeChild(element);
            }, 500)
        })
    }
};