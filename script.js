const maxW = 1056;

window.addEventListener('resize', ()=>{
    if (window.screen.width >= maxW) {
        if(document.getElementById('nav').classList.contains('extend')){
            toggleNav()
        }
    }
})

window.addEventListener('load', ()=>{
    fetchStats();
    redirect();
})

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
    if (window.screen.width >= maxW) {
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
function fetchStats(){
    if(window.location.toString() === 'https://shhh7612.github.io/aika/' || window.location.toString() === 'file:///C:/Bots/GitHub/shhh-7612.github.io/aika/index.html'){
        fetch(atob('aHR0cHM6Ly90b3AuZ2cvYXBpL2JvdHMvODQ3MDMyNTY4Nzk2MTUxODI4'), {method: 'GET', headers: {"Authorization": ['eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9','eyJpZCI6Ijg0NzAzMjU2ODc5NjE1MTgyOCIsImJvdCI6dHJ1ZSwiaWF0IjoxNjI0MTI0Mjg3fQ','fdzMuwXwuAd03lLBlZ42KVCsxcM6D4a2ee4gm7v1uqk'].join('.')}}).then(data=>{data.json().then(data=>{document.getElementsByClassName(atob('Ym90LXNlcnZlci1jb3VudA=='))[0].innerText = data[atob('c2VydmVyX2NvdW50')]})})
    }
    if(document.getElementById('contributors')){
        let downloads = 0;
        fetch('https://api.npmjs.org/downloads/range/2013-08-21:2100-08-21/ards-client').then(data=>{data.json().then(data=>{
            data.downloads.forEach(day => downloads = downloads + day.downloads);
            document.getElementById('downloads').innerText = downloads.toLocaleString() + ' downloads';
        })})
        fetch('https://api.github.com/repos/shhh7612/ards-client').then(data=>{data.json().then(data=>{
            document.getElementById('stars').innerText = data.stargazers_count.toLocaleString() + ' stars';
            document.getElementById('forks').innerText = data.forks_count.toLocaleString() + ' forks';
            document.getElementById('openIssues').innerText = data.open_issues_count.toLocaleString() + ' open issues'
        })})
        fetch('https://api.github.com/repos/shhh7612/ards-client/stats/contributors').then(data=>{data.json().then(data=>{
            document.getElementById('contributors').innerText = data.length.toLocaleString() + ' contributors';
        })})
    }
}
function redirect(){
    if(isUpper(window.location.toString())){window.location.replace(window.location.toString().toLowerCase())}
    if(window.location.toString() === 'https://shhh7612.github.io/Ards-Client/classes/hentai'){window.location.replace('https://shhh7612.github.io/ards-client/old/classes/hentai')}
    if(window.location.toString() === 'https://shhh7612.github.io/Ards-Client/classes/hentai/danbooru'){window.location.replace('https://shhh7612.github.io/ards-client/old/classes/hentai/danbooru')}
    if(window.location.toString() === 'https://shhh7612.github.io/Ards-Client/classes/hentai/konachan'){window.location.replace('https://shhh7612.github.io/ards-client/old/classes/hentai/konachan')}
    if(window.location.toString() === 'https://shhh7612.github.io/Ards-Client/classes/hentai/neko'){window.location.replace('https://shhh7612.github.io/ards-client/old/classes/hentai/neko')}
    if(window.location.toString() === 'https://shhh7612.github.io/Ards-Client/classes/hentai/rule34'){window.location.replace('https://shhh7612.github.io/ards-client/old/classes/hentai/rule34')}
    if(window.location.toString() === 'https://shhh7612.github.io/Ards-Client/classes/hentai/yandere'){window.location.replace('https://shhh7612.github.io/ards-client/old/classes/hentai/yandere')}
    if(window.location.toString() === 'https://shhh7612.github.io/Ards-Client/classes/meme'){window.location.replace('https://shhh7612.github.io/ards-client/old/classes/meme')}
    if(window.location.toString() === 'https://shhh7612.github.io/Ards-Client/classes/meme/random'){window.location.replace('https://shhh7612.github.io/ards-client/old/classes/meme/random')}
    if(window.location.toString() === 'https://shhh7612.github.io/Ards-Client/classes/porn'){window.location.replace('https://shhh7612.github.io/ards-client/old/classes/porn')}
    if(window.location.toString() === 'https://shhh7612.github.io/Ards-Client/classes/porn/ass'){window.location.replace('https://shhh7612.github.io/ards-client/old/classes/porn/ass')}
    if(window.location.toString() === 'https://shhh7612.github.io/Ards-Client/classes/porn/boobs'){window.location.replace('https://shhh7612.github.io/ards-client/old/classes/porn/boobs')}
    if(window.location.toString() === 'https://shhh7612.github.io/Ards-Client/classes/porn/panties'){window.location.replace('https://shhh7612.github.io/ards-client/old/classes/porn/panties')}
    if(window.location.toString() === 'https://shhh7612.github.io/Ards-Client/classes/porn/pussy'){window.location.replace('https://shhh7612.github.io/ards-client/old/classes/porn/pussy')}
    if(window.location.toString() === 'https://shhh7612.github.io/Ards-Client/classes/porn/random'){window.location.replace('https://shhh7612.github.io/ards-client/old/classes/porn/random')}
    if(window.location.toString() === 'https://shhh7612.github.io/Ards-Client/classes/porn/thighs'){window.location.replace('https://shhh7612.github.io/ards-client/old/classes/porn/thighs')}
    if(window.location.toString() === 'https://shhh7612.github.io/Ards-Client/classes/reddit'){window.location.replace('https://shhh7612.github.io/ards-client/old/classes/reddit')}
    if(window.location.toString() === 'https://shhh7612.github.io/Ards-Client/classes/reddit/custom'){window.location.replace('https://shhh7612.github.io/ards-client/old/classes/reddit/custom')}
    if(window.location.toString() === 'https://shhh7612.github.io/Ards-Client/classes/reddit/custom_1'){window.location.replace('https://shhh7612.github.io/ards-client/old/classes/reddit/custom_1')}
}

! function(p, u) {
    function K(d) {
        d = d || {};
        for (var a = 1; a < arguments.length; a++) {
            var h = arguments[a];
            if (h) {
                for (var k in h) {
                    h.hasOwnProperty(k) && ("object" == typeof h[k] ? deepExtend(d[k], h[k]) : d[k] = h[k]);
                }
            }
        }
        return d;
    }

    function B(d, a) {
        function h() {
            f.width = d.offsetWidth;
            f.height = d.offsetHeight;
            g.fillStyle = a.dotColor;
            g.strokeStyle = a.lineColor;
            g.lineWidth = a.lineWidth;
        }

        function k() {
            if (C) {
                v = p.innerWidth;
                w = p.innerHeight;
                g.clearRect(0, 0, f.width, f.height);
                for (var b = 0; b < e.length; b++) {
                    e[b].updatePosition();
                }
                for (b = 0; b < e.length; b++) {
                    e[b].draw();
                }
                x || requestAnimationFrame(k);
            }
        }

        function r() {
            switch (this.stackPos, this.active = !0, this.layer = Math.ceil(3 * Math.random()), this.parallaxOffsetX = 0, this.parallaxOffsetY = 0, this.position = {
                    x: Math.ceil(Math.random() * f.width),
                    y: Math.ceil(Math.random() * f.height)
                }, this.speed = {}, a.directionX) {
                case "left":
                    this.speed.x = +(-a.maxSpeedX + Math.random() * a.maxSpeedX - a.minSpeedX).toFixed(2);
                    break;
                case "right":
                    this.speed.x = +(Math.random() * a.maxSpeedX + a.minSpeedX).toFixed(2);
                    break;
                default:
                    this.speed.x = +(-a.maxSpeedX / 2 + Math.random() * a.maxSpeedX).toFixed(2), this.speed.x += 0 < this.speed.x ? a.minSpeedX : -a.minSpeedX;
            }
            switch (a.directionY) {
                case "up":
                    this.speed.y = +(-a.maxSpeedY + Math.random() * a.maxSpeedY - a.minSpeedY).toFixed(2);
                    break;
                case "down":
                    this.speed.y = +(Math.random() * a.maxSpeedY + a.minSpeedY).toFixed(2);
                    break;
                default:
                    this.speed.y = +(-a.maxSpeedY / 2 + Math.random() * a.maxSpeedY).toFixed(2), this.speed.x += 0 < this.speed.y ? a.minSpeedY : -a.minSpeedY;
            }
        }

        function D(b) {
            void 0 !== a[b] && a[b].call(d);
        }
        var f, g, v, w, y, z, C = !!u.createElement("canvas").getContext,
            e = [],
            E = 0,
            F = 0,
            G = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i),
            H = !!p.DeviceOrientationEvent,
            I = 0,
            J = 0,
            x = !1;
        return a = K({}, p[m].defaults, a), r.prototype.draw = function() {
                g.beginPath();
                g.arc(this.position.x + this.parallaxOffsetX, this.position.y + this.parallaxOffsetY, a.particleRadius / 2, 0, 2 * Math.PI, !0);
                g.closePath();
                g.fill();
                g.beginPath();
                for (var b = e.length - 1; b > this.stackPos; b--) {
                    var c = e[b],
                        t = this.position.x - c.position.x,
                        l = this.position.y - c.position.y;
                    Math.sqrt(t * t + l * l).toFixed(2) < a.proximity && (g.moveTo(this.position.x + this.parallaxOffsetX, this.position.y + this.parallaxOffsetY), a.curvedLines ? g.quadraticCurveTo(Math.max(c.position.x, c.position.x), Math.min(c.position.y, c.position.y), c.position.x + c.parallaxOffsetX, c.position.y + c.parallaxOffsetY) : g.lineTo(c.position.x + c.parallaxOffsetX, c.position.y + c.parallaxOffsetY));
                }
                g.stroke();
                g.closePath();
            }, r.prototype.updatePosition = function() {
                a.parallax && (H && !G ? (y = (v - 0) / 60 * (I - -30), z = (w - 0) / 60 * (J - -30)) : (y = E, z = F), this.parallaxTargX = (y - v / 2) / (a.parallaxMultiplier * this.layer), this.parallaxOffsetX += (this.parallaxTargX - this.parallaxOffsetX) / 10, this.parallaxTargY = (z - w / 2) / (a.parallaxMultiplier * this.layer), this.parallaxOffsetY += (this.parallaxTargY - this.parallaxOffsetY) / 10);
                var b = d.offsetWidth,
                    c = d.offsetHeight;
                switch (a.directionX) {
                    case "left":
                        0 > this.position.x + this.speed.x + this.parallaxOffsetX && (this.position.x = b - this.parallaxOffsetX);
                        break;
                    case "right":
                        this.position.x + this.speed.x + this.parallaxOffsetX > b && (this.position.x = 0 - this.parallaxOffsetX);
                        break;
                    default:
                        (this.position.x + this.speed.x + this.parallaxOffsetX > b || 0 > this.position.x + this.speed.x + this.parallaxOffsetX) && (this.speed.x = -this.speed.x);
                }
                switch (a.directionY) {
                    case "up":
                        0 > this.position.y + this.speed.y + this.parallaxOffsetY && (this.position.y = c - this.parallaxOffsetY);
                        break;
                    case "down":
                        this.position.y + this.speed.y + this.parallaxOffsetY > c && (this.position.y = 0 - this.parallaxOffsetY);
                        break;
                    default:
                        (this.position.y + this.speed.y + this.parallaxOffsetY > c || 0 > this.position.y + this.speed.y + this.parallaxOffsetY) && (this.speed.y = -this.speed.y);
                }
                this.position.x += this.speed.x;
                this.position.y += this.speed.y;
            }, r.prototype.setStackPos = function(b) {
                this.stackPos = b;
            },
            function() {
                if (C) {
                    f = u.createElement("canvas");
                    f.className = "pg-canvas";
                    f.style.display = "block";
                    d.insertBefore(f, d.firstChild);
                    g = f.getContext("2d");
                    h();
                    for (var b = Math.round(f.width * f.height / a.density), c = 0; b > c; c++) {
                        var t = new r();
                        t.setStackPos(c);
                        e.push(t);
                    }
                    p.addEventListener("resize", function() {
                        h();
                        for (var l = d.offsetWidth, A = d.offsetHeight, n = e.length - 1; 0 <= n; n--) {
                            (e[n].position.x > l || e[n].position.y > A) && e.splice(n, 1);
                        }
                        l = Math.round(f.width * f.height / a.density);
                        if (l > e.length) {
                            for (; l > e.length;) {
                                A = new r(), e.push(A);
                            }
                        } else {
                            l < e.length && e.splice(l);
                        }
                        for (n = e.length - 1; 0 <= n; n--) {
                            e[n].setStackPos(n);
                        }
                    }, !1);
                    u.addEventListener("mousemove", function(l) {
                        E = l.pageX;
                        F = l.pageY;
                    }, !1);
                    H && !G && p.addEventListener("deviceorientation", function() {
                        J = Math.min(Math.max(-event.beta, -30), 30);
                        I = Math.min(Math.max(-event.gamma, -30), 30);
                    }, !0);
                    k();
                    D("onInit");
                }
            }(), {
                option: function(b, c) {
                    return c ? void(a[b] = c) : a[b];
                },
                destroy: function() {
                    console.log("destroy");
                    f.parentNode.removeChild(f);
                    D("onDestroy");
                    q && q(d).removeData("plugin_" + m);
                },
                start: function() {
                    x = !1;
                    k();
                },
                pause: function() {
                    x = !0;
                }
            };
    }
    var m = "particleground",
        q = p.jQuery;
    p[m] = function(d, a) {
        return new B(d, a);
    };
    p[m].defaults = {
        minSpeedX: .1,
        maxSpeedX: .7,
        minSpeedY: .1,
        maxSpeedY: .7,
        directionX: "center",
        directionY: "center",
        density: 1e4,
        dotColor: "#666666",
        lineColor: "#666666",
        particleRadius: 7,
        lineWidth: 1,
        curvedLines: !1,
        proximity: 100,
        parallax: !0,
        parallaxMultiplier: 5,
        onInit: function() {},
        onDestroy: function() {}
    };
    q && (q.fn[m] = function(d) {
        if ("string" == typeof arguments[0]) {
            var a, h = arguments[0],
                k = Array.prototype.slice.call(arguments, 1);
            return this.each(function() {
                q.data(this, "plugin_" + m) && "function" == typeof q.data(this, "plugin_" + m)[h] && (a = q.data(this, "plugin_" + m)[h].apply(this, k));
            }), void 0 !== a ? a : this;
        }
        return "object" != typeof d && d ? void 0 : this.each(function() {
            q.data(this, "plugin_" + m) || q.data(this, "plugin_" + m, new B(this, d));
        });
    });
}(window, document);

particleground(document.getElementById('particles-foreground'), {
  dotColor: 'rgba(255, 255, 255, 1)',
  lineColor: 'rgba(255, 255, 255, 0.05)',
  minSpeedX: 0.3,
  maxSpeedX: 0.6,
  minSpeedY: 0.3,
  maxSpeedY: 0.6,
  density: 50000, // One particle every n pixels
  curvedLines: false,
  proximity: 250, // How close two dots need to be before they join
  parallaxMultiplier: 10, // Lower the number is more extreme parallax
  particleRadius: 4, // Dot size
});

particleground(document.getElementById('particles-background'), {
  dotColor: 'rgba(255, 255, 255, 0.5)',
  lineColor: 'rgba(255, 255, 255, 0.05)',
  minSpeedX: 0.075,
  maxSpeedX: 0.15,
  minSpeedY: 0.075,
  maxSpeedY: 0.15,
  density: 10000, // One particle every n pixels
  curvedLines: false,
  proximity: 20, // How close two dots need to be before they join
  parallaxMultiplier: 20, // Lower the number is more extreme parallax
  particleRadius: 2, // Dot size
});

document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        Array.from(document.getElementsByClassName('vertical-centered-box')).forEach(element => {
            element.classList.toggle('hidden');
            setTimeout(() => {
                element.parentNode.removeChild(element);
            }, 1000)
        })
    }
};