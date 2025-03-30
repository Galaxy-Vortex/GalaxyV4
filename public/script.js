gsap.to(".h1one", {
  opacity: 1,
  x: 40,
  duration: 2,
  ease: "expo.inOut",
});
gsap.to(".h1two", {
  opacity: 1,
  x: 25,
  duration: 2,
  ease: "expo.inOut",
  delay: 0.1,
});
gsap.to(".h1three", {
  opacity: 1,
  x: 10,
  delay: 0.2,
  duration: 2,
  ease: "expo.inOut",
});

gsap.to(".h1four", {
  opacity: 1,
  x: -10,
  duration: 2,
  ease: "expo.inOut",
});
gsap.to(".h1five", {
  opacity: 1,
  x: -25,
  duration: 2,
  ease: "expo.inOut",
  delay: 0.1,
});
gsap.to(".h1six", {
  opacity: 1,
  x: -40,
  delay: 0.2,
  duration: 2,
  ease: "expo.inOut",
});
gsap.fromTo(
  ".navbar__item",
  {
    opacity: 0,
    x: -50,
  },
  {
    opacity: 1,
    x: 0,
    duration: 2,
    delay: 0,
    ease: "expo.inOut",
  }
);
