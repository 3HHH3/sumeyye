const e = document.querySelector(".btn"),
  t = document.querySelector(".darkroom"),
  o = document.querySelector(".giftroom"),
  l = document.querySelector(".hallway"),
  s = document.querySelector(".empty-room"),
  c = document.querySelector(".flash"),
  a = document.querySelectorAll(".bb-text"),
  n = document.querySelectorAll(".gift-text"),
  i = document.querySelectorAll(".hall-text"),
  d = document.querySelectorAll(".room-text"),
  r = document.querySelector(".btn-ref"),
  u = document.querySelectorAll(".frame"),
  y = document.querySelector(".scroll"),
  m = document.querySelector(".text"),
  p = document.querySelector(".switch-aud"),
  f = document.querySelector(".blast-aud"),
  L = document.querySelector(".door-aud"),
  S = document.querySelector(".haunt-aud"),
  q = document.querySelector(".hbd-aud"),
  h = (t) => {
    for (let o = 0; o < t.length; o++)
      setTimeout(() => {
        t[o].classList.add("read"),
          o === t.length - 1 &&
            ((e.style.display = "inline-block"), (r.style.display = "block"));
      }, 5e3 * o);
  },
  T = (t) => {
    t.classList.add("fade-in"),
      (t.style.opacity = "0"),
      (e.style.display = "none"),
      (r.style.display = "none");
  };
(r.innerHTML = "Ampul'e tıklayın."),
  h(a),
  e.addEventListener("click", function () {
    if (e.classList.contains("switch"))
      p.play(),
        T(t),
        (r.innerHTML = "Kapıyı tıklayın."),
        setTimeout(function () {
          e.classList.add("door-out"),
            e.classList.remove("switch"),
            (t.style.display = "none"),
            h(d);
        }, 4e3);
    else if (e.classList.contains("door-out"))
      L.play(),
        T(s),
        setTimeout(function () {
          S.play(),
            (S.loop = !0),
            e.classList.add("door-in"),
            e.classList.remove("door-out"),
            (s.style.display = "none"),
            h(i);
        }, 4e3);
    else if (e.classList.contains("door-in"))
      L.play(),
        T(l),
        (r.innerHTML = "Hediyeye tıklayın"),
        setTimeout(function () {
          e.classList.add("gift"),
            e.classList.remove("door-in"),
            (l.style.display = "none"),
            h(n);
        }, 4e3);
    else if (e.classList.contains("gift")) {
      S.pause(),
        f.play(),
        (o.style.display = "none"),
        T(c),
        (q.loop = !0),
        q.play();
      const e =
        parseInt(
          getComputedStyle(document.documentElement).getPropertyValue(
            "--readTime"
          )
        ) + 5;
      (u[1].style.display = "flex"),
        setTimeout(() => {
          u[1].classList.add("appear"),
            (u[1].style.opacity = "1"),
            m.classList.add("move-up");
        }, 1500),
        setTimeout(() => {
          (m.style.transform = "translateY(-100%)"), (c.style.display = "none");
        }, 5e3),
        setTimeout(() => {
          y.classList.add("fade-in"), (y.style.opacity = "0");
        }, 1e3 * e),
        setTimeout(() => {
          (u[1].style.display = "none"),
            (u[0].style.display = "flex"),
            u[0].classList.add("appear"),
            (u[0].style.opacity = "1");
        }, 1e3 * (e + 3));
    }
  });

