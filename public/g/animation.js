gsap.fromTo(
  ".game1",
  {
    opacity: 0,
    x: -40,
  },
  {
    opacity: 1,
    x: 0,
    duration: 1.2,
    ease: "expo.inOut",
  }
);
gsap.fromTo(
    ".game2",
    {
      opacity: 0,
      y: -20,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "expo.inOut",
    }
  );
  gsap.fromTo(
    ".game3",
    {
      opacity: 0,
      y: 30,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "expo.inOut",
    }
  );
  gsap.fromTo(
    ".game4",
    {
      opacity: 0,
      y: -50,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "expo.inOut",
    }
  );
  gsap.fromTo(
    ".game5",
    {
      opacity: 0,
      x: 30,
    },
    {
      opacity: 1,
      x: 0,
      duration: 1.2,
      ease: "expo.inOut",
    }
  );
gsap.to (
  ".games",
  {
    opacity: 1,
    duration: 0.5,
    delay: 0.8
  }
);
