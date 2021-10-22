<template>
    <header>
        <nav class="navTop">
            <div class="left navLogo h1">
                <div class="smallMenu"></div>
                <h1>
                    <a href="/" class="ir logo">shhh7612</a>
                </h1>
            </div>
            <div id="navItems" class="left">
                <div class="navBucket  " data-id="projects" data-show-collapsed-at="max">
                    <a href="" class="">
                    Projects </a>
                    <i class="materialIcons expand">
                    expand_more
                    </i>
                    <div class="navBucketItems">
                        <a data-hide-at="max" class=" TopNavProjOne" data-id="1"
                            href="/">
                            <div class="secondaryLabel">1</div>
                            <div>1</div>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
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

export default {
  name: 'navElement'
}
</script>