const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0, // Triggers immediately when entering viewport, bypassing RFP math glitches
    rootMargin: "-80px 0px", // Delays the activation until the element is 80px inside the frame
  },
);

reveals.forEach((el) => observer.observe(el));
