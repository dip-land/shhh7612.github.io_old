//Variables
const darkModeInput = document.querySelector('input');
const mainNavigation = document.querySelector('nav')!;
let baseNavImage = window.getComputedStyle(mainNavigation).backgroundImage;

//DarkMode/LightMode Handling
if (JSON.parse(localStorage.getItem('settings') || '{"darkmode": "true"}').darkmode === 'false') {
    toggleDM();
}

document.addEventListener('keyup', function (event) {
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
    //let cardImage = card.firstElementChild;
    //if(cardImage?.nodeName !== 'IMG') cardImage?.setAttribute('style', 'opacity:1;');;
    card.classList.add('open');
}

function closeCard(card?: HTMLDivElement) {
    if (!card) return;
    //let cardImage = card.firstElementChild;
    //if(cardImage?.nodeName !== 'IMG') cardImage?.setAttribute('style', 'opacity:0.3;');;
    card.classList.remove('open');
    card.classList.add('close');
    setTimeout((e: null) => { card.classList.remove('close') }, 100);
}

//Video Player
let mouseDown = 0;
window.onmousedown = () => { ++mouseDown };
window.onmouseup = () => { --mouseDown };

document.querySelectorAll('video').forEach(oldVid => {
    //Cast Script 
    if (!document.getElementById('castAPI')) {
        let script = document.createElement('script');
        script.src = '//www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1';
        script.id = 'castAPI';
        document.getElementsByTagName('head')[0].append(script);

        window['__onGCastApiAvailable'] = function (isAvailable: boolean) {
            if (isAvailable) {
                initializeCastApi();
            }
        };

        function initializeCastApi() {
            cast.framework.CastContext.getInstance().setOptions({
                receiverApplicationId: chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID,
                autoJoinPolicy: chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED
            });
        };
    }

    //video container
    let videoContainer = document.createElement('div');
    let video = document.createElement('video');
    videoContainer.classList.add('videoContainer');
    videoContainer.append(video);
    video.src = `./assets/video/${oldVid.getAttribute('data-id')}/Video/original.mp4`;
    video.autoplay = oldVid.getAttribute('data-autoplay') === 'true';
    video.loop = oldVid.getAttribute('data-loop') === 'true';

    //check if custom controls are enabled
    if (oldVid.getAttribute('data-controls') !== 'true') return oldVid.replaceWith(videoContainer);

    //controls container
    let controlsContainer = document.createElement('div');
    controlsContainer.classList.add('controlsContainer');

    //seeker
    let seekerContainer = document.createElement('div');
    let seekerBar = document.createElement('div');
    let seekerPreload = document.createElement('div');
    let seekerCurrent = document.createElement('div');
    seekerContainer.classList.add('seeker');
    seekerBar.classList.add('seekerBar');
    seekerPreload.classList.add('seekerPreload');
    seekerCurrent.classList.add('seekerCurrent');
    seekerContainer.append(seekerBar, seekerPreload, seekerCurrent);
    seekerContainer.addEventListener('mousemove', (event) => { seeker(event, true) });
    seekerContainer.addEventListener('click', (event) => { seeker(event) });

    function seeker(event: MouseEvent, mouseMove?: boolean) {
        if (mouseDown > 1) mouseDown = 0;
        if (mouseDown < 0) mouseDown = 0;
        if (mouseDown !== 1 && mouseMove) return;
        seekerCurrent.style.width = (event.offsetX / seekerContainer.offsetWidth) * 100 + '%';
        video.currentTime = video.duration * (event.offsetX / seekerContainer.offsetWidth);
    }

    //main controls
    //controls left
    let controlsLeft = document.createElement('div');
    controlsLeft.classList.add('controlsLeft');
    let previousVideo = document.createElement('button');
    let pauseButton = document.createElement('button');
    let nextVideo = document.createElement('button');
    let videoTime = document.createElement('div');
    previousVideo.classList.add('fa-solid', 'fa-backward');
    pauseButton.classList.add('fa-solid', 'fa-play');
    nextVideo.classList.add('fa-solid', 'fa-forward');
    videoTime.classList.add('videoTime');
    videoTime.innerText = '0';
    controlsLeft.append(previousVideo, pauseButton, nextVideo, videoTime);
    pauseButton.addEventListener('click', () => { pause() });
    video.addEventListener('click', () => { pause() });

    function pause() {
        if (!video.paused) {
            video.pause();
            pauseButton.classList.add('fa-play');
            pauseButton.classList.remove('fa-pause');
        } else {
            video.play();
            pauseButton.classList.remove('fa-play');
            pauseButton.classList.add('fa-pause');
        }
    }

    //controls right
    let controlsRight = document.createElement('div');
    controlsRight.classList.add('controlsRight');
    let captionsButton = document.createElement('button');
    let optionsButton = document.createElement('button');
    let pipButton = document.createElement('button');
    let castButton = document.createElement('button');
    let fullscreenButton = document.createElement('button');
    controlsRight.append(captionsButton, optionsButton, pipButton, castButton, fullscreenButton);
    captionsButton.classList.add('fa-solid', 'fa-closed-captioning');
    fullscreenButton.classList.add('fa-solid', 'fa-expand');
    pipButton.innerText = 'Pip';
    castButton.innerText = 'Cast';
    optionsButton.innerText = 'Options';
    fullscreenButton.addEventListener('click', () => { fullscreen() });
    video.addEventListener('dblclick', () => { fullscreen() });
    function fullscreen() {
        if (!document.fullscreenElement) {
            videoContainer.requestFullscreen();
            fullscreenButton.classList.add('fa-compress');
            fullscreenButton.classList.remove('fa-expand');
        } else if (document.exitFullscreen) {
            document.exitFullscreen();
            fullscreenButton.classList.remove('fa-compress');
            fullscreenButton.classList.add('fa-expand');

        }
    }

    //
    controlsContainer.append(seekerContainer, controlsLeft, controlsRight);
    videoContainer.append(controlsContainer);

    video.addEventListener('timeupdate', () => {
        seekerPreload.style.width = (video.buffered.end(video.buffered.length - 1) / video.duration) * 100 + '%';
        seekerCurrent.style.width = (video.currentTime / video.duration) * 100 + '%';
        videoTime.innerText = video.currentTime + '';
    });
    video.addEventListener('ended', () => {
        pauseButton.classList.remove('fa-pause');
        pauseButton.classList.remove('fa-play');
        pauseButton.classList.add('fa-arrow-rotate-right');
    });
    oldVid.replaceWith(videoContainer);
    setTimeout(() => {
        let castSession = cast.framework.CastContext.getInstance().getCurrentSession();
        console.log(castSession);
    }, 100)
})
