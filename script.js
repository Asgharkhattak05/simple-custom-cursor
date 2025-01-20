const main = document.getElementById("main");
const cursor = document.getElementById("cursor");
const image = document.getElementById("image");

main.addEventListener("mousemove", function (dets) {
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
    duration: 1,
    ease: "back.out(1.7)",
  });
});
image.addEventListener("mouseenter", function (dets) {
  gsap.to(cursor, {
    scale: 2,
    duration: 1,
  });
});

image.addEventListener("mouseleave", function (dets) {
  gsap.to(cursor, {
    scale: 1,
    duration: 1,
  });
});
