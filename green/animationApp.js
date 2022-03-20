var HeroGrid = document.querySelector(".anim-hero");

var animationIsOk = window.matchMedia(
  "(prefers-reduced-motion: no-preference)"
).matches;

if (animationIsOk) {
  var tl = gsap.timeline({
    delay: 1.7,
    defaults: {
      transformOrigin: "right center",
      ease: "expo.out",
      duration: 1.2,
      stagger: {
        each: 0.5,
        from: "end",
      },
    },
  });
  tl.set(".fouc--hero", {
    opacity: 1,
  })
    .from(".hero__swipe-1", {
      scaleX: 0,
    })
    .from(
      ".hero__swipe-2",
      {
        scaleX: 0,
      },
      "<"
    )
    .from(
      ".hero__swipe-3",
      {
        scaleX: 0,
      },
      "<"
    )
    .from(
      ".hero__swipe-4",
      {
        scaleX: 0,
      },
      "<"
    )
    .from(
      ".hero__circle",
      {
        duration: 0.7,
        transformOrigin: "center",
        opacity: 0,
        scale: 0.7,
        ease: "sine.out",
      },
      "<"
    );
}
