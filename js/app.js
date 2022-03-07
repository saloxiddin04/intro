TweenMax.staggerTo("li", 2, {
    delay: 0.4,
    ease: Expo.easeInOut,
    scaleY: 0.3,
}, 0.1);

TweenMax.to("li", 2, {
    delay: 2.8,
    ease: Expo.easeInOut,
    width: "10px",
});

TweenMax.staggerTo("li", 1.6, {
    delay: 4.8,
    ease: Expo.easeInOut,
    y: "100%"
}, 0.06);


//Anime text
var textWrapper = document.querySelector(".ml11 .letters");
textWrapper.innerHTML = textWrapper.textContent.replace(
    /([^\x00-\x80]|\w)/g,
    "<span class='letter'>$&</span>"
);

anime
    .timeline()
    .add({
        targets: ".ml11 .line",
        scaleY: [0, 1],
        opacity: [0.5, 1],
        easing: "easeOutExpo",
        duration: 700,
        delay: 6000,
    })
    .add({
        targets: ".ml11 .line",
        translateX: [
            0,
            document.querySelector(".ml11 .letters").getBoundingClientRect()
                .width + 10,
        ],
        easing: "easeOutExpo",
        duration: 700,
        delay: 100,
    })
    .add({
        targets: ".ml11 .letter",
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 600,
        offset: "-=775",
        delay: (el, i) => 34 * (i + 1),
    })
    .add({
        targets: ".ml11",

        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000,
    });