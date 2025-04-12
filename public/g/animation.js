gsap.fromTo(
  ".h1one",
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
    ".h1two",
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
    ".h1three",
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
    ".h1four",
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
    ".h1five",
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
  gsap.to(
    ".navbar",
    {
      opacity: 1,
      delay: 0.5,
      duration: 1.2
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
