redirect();

function openNav() {
    let x = document.getElementById("navigation");
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
    document.documentElement.dataset.scroll = window.scrollY;
}
document.addEventListener('scroll', debounce(storeScroll), { passive: true });
storeScroll();

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

function fetchStats() {
    if (location.toString().includes('/aika')) {
        fetch(atob(`aHR0cHM6Ly90b3AuZ2cvYXBpL2JvdHMvODQ3MDMyNTY4Nzk2MTUxODI4`), { method: `GET`, headers: { "Authorization": [`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9`, `eyJpZCI6Ijg0NzAzMjU2ODc5NjE1MTgyOCIsImJvdCI6dHJ1ZSwiaWF0IjoxNjI0MTI0Mjg3fQ`, `fdzMuwXwuAd03lLBlZ42KVCsxcM6D4a2ee4gm7v1uqk`].join(`.`) } }).then(data => { data.json().then(data => { document.getElementsByClassName(atob(`Ym90LXNlcnZlci1jb3VudA==`))[0].innerText = data[atob(`c2VydmVyX2NvdW50`)] }) })
    }
    if (document.getElementById(`contributors`)) {
        let downloads = 0;
        fetch(`https://api.npmjs.org/downloads/range/2013-08-21:2100-08-21/ards-client`).then(data => {
            data.json().then(data => {
                data.downloads.forEach(day => downloads = downloads + day.downloads);
                document.getElementById(`downloads`).innerText = downloads.toLocaleString() + ` downloads`;
            })
        })
        fetch(`https://api.github.com/repos/shhh7612/ards-client`).then(data => {
            data.json().then(data => {
                document.getElementById(`stars`).innerText = data.stargazers_count.toLocaleString() + ` stars`;
                document.getElementById(`forks`).innerText = data.forks_count.toLocaleString() + ` forks`;
                document.getElementById(`openIssues`).innerText = data.open_issues_count.toLocaleString() + ` open issues`
            })
        })
        fetch(`https://api.github.com/repos/shhh7612/ards-client/stats/contributors`).then(data => {
            data.json().then(data => {
                document.getElementById(`contributors`).innerText = data.length.toLocaleString() + ` contributors`;
            })
        })
    }
}
function isUpper(str) {
    return !/[a-z]/.test(str) && /[A-Z]/.test(str);
}
function redirect() {
    if (isUpper(location.toString())) { location.replace(location.toString().toLowerCase()) }
    if (location.toString() === `${location.origin}/Ards-Client/classes/hentai`) { location.replace(`${location.origin}/ards-client/docs/v2/classes/hentai`) }
    if (location.toString() === `${location.origin}/Ards-Client/classes/hentai/danbooru`) { location.replace(`${location.origin}/ards-client/docs/v2/classes/hentai/danbooru`) }
    if (location.toString() === `${location.origin}/Ards-Client/classes/hentai/konachan`) { location.replace(`${location.origin}/ards-client/docs/v2/classes/hentai/konachan`) }
    if (location.toString() === `${location.origin}/Ards-Client/classes/hentai/neko`) { location.replace(`${location.origin}/ards-client/docs/v2/classes/hentai/neko`) }
    if (location.toString() === `${location.origin}/Ards-Client/classes/hentai/rule34`) { location.replace(`${location.origin}/ards-client/docs/v2/classes/hentai/rule34`) }
    if (location.toString() === `${location.origin}/Ards-Client/classes/hentai/yandere`) { location.replace(`${location.origin}/ards-client/docs/v2/classes/hentai/yandere`) }
    if (location.toString() === `${location.origin}/Ards-Client/classes/meme`) { location.replace(`${location.origin}/ards-client/docs/v2/classes/meme`) }
    if (location.toString() === `${location.origin}/Ards-Client/classes/meme/random`) { location.replace(`${location.origin}/ards-client/docs/v2/classes/meme/random`) }
    if (location.toString() === `${location.origin}/Ards-Client/classes/porn`) { location.replace(`${location.origin}/ards-client/docs/v2/classes/porn`) }
    if (location.toString() === `${location.origin}/Ards-Client/classes/porn/ass`) { location.replace(`${location.origin}/ards-client/docs/v2/classes/porn/ass`) }
    if (location.toString() === `${location.origin}/Ards-Client/classes/porn/boobs`) { location.replace(`${location.origin}/ards-client/docs/v2/classes/porn/boobs`) }
    if (location.toString() === `${location.origin}/Ards-Client/classes/porn/panties`) { location.replace(`${location.origin}/ards-client/docs/v2/classes/porn/panties`) }
    if (location.toString() === `${location.origin}/Ards-Client/classes/porn/pussy`) { location.replace(`${location.origin}/ards-client/docs/v2/classes/porn/pussy`) }
    if (location.toString() === `${location.origin}/Ards-Client/classes/porn/random`) { location.replace(`${location.origin}/ards-client/docs/v2/classes/porn/random`) }
    if (location.toString() === `${location.origin}/Ards-Client/classes/porn/thighs`) { location.replace(`${location.origin}/ards-client/docs/v2/classes/porn/thighs`) }
    if (location.toString() === `${location.origin}/Ards-Client/classes/reddit`) { location.replace(`${location.origin}/ards-client/docs/v2/classes/reddit`) }
    if (location.toString() === `${location.origin}/Ards-Client/classes/reddit/custom`) { location.replace(`${location.origin}/ards-client/docs/v2/classes/reddit/custom`) }
    if (location.toString() === `${location.origin}/Ards-Client/classes/reddit/custom_1`) { location.replace(`${location.origin}/ards-client/docs/v2/classes/reddit/custom_1`) }
}

setTimeout(a => {
    document.cookie = 'hello=world;'
    document.cookie = 'world=hello;'
    document.cookie = 'test=test;'
    console.log(document.cookie)
}, 2500)