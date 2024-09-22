// preloader animation

// menus
function openMenu() {
  var menuIcon = document.querySelector("#menu");
  var menuOpen = document.querySelector(".menus");
  menuIcon.addEventListener("click", function () {
    menuIcon.classList.toggle("fa-times");
    menuOpen.classList.toggle("menuOpen");
  });
}
// navbar & hero animation
function heroAnimation() {
  var tl = gsap.timeline();

  gsap.set(".subtitle", {
    y: "100%",
  });
  gsap.set(".main_headings", {
    y: "100%",
  });

  tl.from("nav div", {
    y: -100,
    duration: 1.5,
    opacity: 0,
    ease: "power1",
  });

  tl.to(".main_headings", {
    y: 0,
    duration: 1.5,
    delay: -0.8,
    ease: "power1",
  });

  tl.to(".subtitle", {
    y: 0,
    duration: 1.5,
    delay: -0.9,
    ease: "power1",
  });
}
// video animation
function videoSectionAnimation() {
  gsap.to("#video video", {
    scrollTrigger: {
      trigger: "video",
      scroller: "body",
      start: "top 50%",
      end: "top 5%",
      scrub: 1.2,
    },
    scale: 0.9,
    borderRadius: "20px",
  });
}
// swiper js code
function swiper() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
  });
}

// lenis smoothScroll
function smoothScroll() {
  const lenis = new Lenis();

  // lenis.on("scroll", (e) => {
  //   console.log(e);
  // });

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 500);
  });

  gsap.ticker.lagSmoothing(0);
}

// others Animation
function animation() {
  gsap.from(".about_item1", {
    y: 200,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".about_item",
      // markers: true,
      start: "top 75%",
      end: "top 40%",
      scrub: true,
    },
  });

  gsap.from(".about_item2", {
    y: 200,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".about_item2",
      // markers: true,
      start: "top 75%",
      end: "top 40%",
      scrub: true,
    },
  });

  gsap.from(".about_item3", {
    y: 200,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".about_item3",
      // markers: true,
      start: "top 75%",
      end: "top 40%",
      scrub: true,
    },
  });

  gsap.from(".about_item4", {
    y: 200,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".about_item4",
      // markers: true,
      start: "top 75%",
      end: "top 40%",
      scrub: true,
    },
  });

  gsap.from("#Industries", {
    y: 200,
    opacity: 0,
    scale: 0.8,
    duration: 1,
    scrollTrigger: {
      trigger: "#Industries",
      // markers: true,
      start: "top 80%",
      end: "top 40%",
      scrub: true,
    },
  });

  gsap.from("#number", {
    y: 200,
    opacity: 0,
    scale: 0.8,
    duration: 1,
    scrollTrigger: {
      trigger: "#number",
      // markers: true,
      start: "top 80%",
      end: "top 40%",
      scrub: true,
    },
  });

  gsap.from("#brand .heading_text", {
    // y: 200,
    opacity: 0,
    scale: 0.9,
    duration: 1,
    scrollTrigger: {
      trigger: "#brand .heading_text",
      // markers: true,
      start: "top 80%",
      end: "top 40%",
      scrub: true,
    },
  });

  gsap.from("#brand .logo_wrapper", {
    y: 200,
    opacity: 0,
    scale: 0.8,
    duration: 1,
    scrollTrigger: {
      trigger: "#brand .logo_wrapper",
      // markers: true,
      start: "top 95%",
      end: "top 60%",
      scrub: true,
    },
  });

  gsap.from("#slider", {
    y: 200,
    opacity: 0,
    scale: 0.8,
    duration: 1,
    scrollTrigger: {
      trigger: "#slider",
      // markers: true,
      start: "top 95%",
      end: "top 60%",
      scrub: true,
    },
  });

  gsap.from("#Awards", {
    y: 200,
    opacity: 0,
    scale: 0.8,
    duration: 1,
    scrollTrigger: {
      trigger: "#Awards",
      // markers: true,
      start: "top 80%",
      end: "top 40%",
      scrub: true,
    },
  });

  gsap.from("#recent_works", {
    y: 200,
    opacity: 0,
    scale: 0.8,
    duration: 1,
    scrollTrigger: {
      trigger: "#recent_works",
      // markers: true,
      start: "top 80%",
      end: "top 20%",
      scrub: true,
    },
  });

  gsap.from("#recent_works .btn_animation", {
    y: 200,
    opacity: 0,
    scale: 0.8,
    duration: 1,
    scrollTrigger: {
      trigger: "#recent_works .btn_animation",
      // markers: true,
      start: "top 90%",
      end: "top 60%",
      scrub: true,
    },
  });

  gsap.from("#approach .heading_text h2", {
    // y: 200,
    opacity: 0,
    scale: 0.85,
    duration: 1,
    scrollTrigger: {
      trigger: "#approach .heading_text",
      // markers: true,
      start: "top 80%",
      end: "top 40%",
      scrub: true,
    },
  });

  gsap.from("#approach .heading_text p", {
    // y: 200,
    opacity: 0,
    scale: 1.2,
    duration: 1,
    scrollTrigger: {
      trigger: "#approach .heading_text",
      // markers: true,
      start: "top 50%",
      end: "top 20%",
      scrub: true,
    },
  });

  gsap.from(".approach_item1", {
    y: 200,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".approach_item1",
      // markers: true,
      start: "top 75%",
      end: "top 40%",
      scrub: true,
    },
  });

  gsap.from(".approach_item2", {
    y: 200,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".approach_item2",
      // markers: true,
      start: "top 75%",
      end: "top 40%",
      scrub: true,
    },
  });

  gsap.from(".approach_item3", {
    y: 200,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".approach_item3",
      // markers: true,
      start: "top 75%",
      end: "top 40%",
      scrub: true,
    },
  });

  gsap.from(".approach_item4", {
    y: 200,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".approach_item4",
      // markers: true,
      start: "top 75%",
      end: "top 40%",
      scrub: true,
    },
  });

  gsap.from("#teams .heading_text", {
    // y: 200,
    opacity: 0,
    scale: 0.9,
    duration: 1,
    scrollTrigger: {
      trigger: "#teams .heading_text",
      // markers: true,
      start: "top 80%",
      end: "top 40%",
      scrub: true,
    },
  });

  gsap.from("#teams .members", {
    y: 100,
    opacity: 0,
    scale: 0.9,
    duration: 1,
    scrollTrigger: {
      trigger: "#teams .members",
      // markers: true,
      start: "top 80%",
      end: "top 40%",
      scrub: true,
    },
  });

  gsap.from("#contact .contact_content h2", {
    y: 100,
    opacity: 0,
    scale: 0.8,
    duration: 1,
    scrollTrigger: {
      trigger: "#contact .contact_content h2",
      // markers: true,
      start: "top 90%",
      end: "top 40%",
      scrub: true,
    },
  });

  gsap.from("#contact .contact_content .btn_animation", {
    y: 200,
    opacity: 0,
    scale: 0.8,
    duration: 1,
    scrollTrigger: {
      trigger: "#contact .contact_content .btn_animation",
      // markers: true,
      start: "top 85%",
      end: "top 45%",
      scrub: true,
    },
  });
}

openMenu();
heroAnimation();
videoSectionAnimation();
swiper();
smoothScroll();
animation();
