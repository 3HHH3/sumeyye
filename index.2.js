!(function () {
  var e = document.querySelector(".btn"),
    t = document.querySelector(".darkroom"),
    o = document.querySelector(".giftroom"),
    l = document.querySelector(".hallway"),
    s = document.querySelector(".empty-room"),
    n = document.querySelector(".flash"),
    c = document.querySelectorAll(".bb-text"),
    i = document.querySelectorAll(".gift-text"),
    a = document.querySelectorAll(".hall-text"),
    r = document.querySelectorAll(".room-text"),
    u = document.querySelector(".btn-ref"),
    d = document.querySelectorAll(".frame"),
    y = document.querySelector(".scroll"),
    m = document.querySelector(".text"),
    p = document.querySelector(".switch-aud"),
    f = document.querySelector(".blast-aud"),
    L = document.querySelector(".door-aud"),
    S = document.querySelector(".haunt-aud"),
    q = document.querySelector(".hbd-aud"),
    h = function (t) {
      for (
        var o = function (o) {
            setTimeout(function () {
              t[o].classList.add("read"),
                o === t.length - 1 &&
                  ((e.style.display = "inline-block"),
                  (u.style.display = "block"));
            }, 5e3 * o);
          },
          l = 0;
        l < t.length;
        l++
      )
        o(l);
    },
    T = function (t) {
      t.classList.add("fade-in"),
        (t.style.opacity = "0"),
        (e.style.display = "none"),
        (u.style.display = "none");
    };
  (u.innerHTML = "Click the Light Bulb."),
    h(c),
    e.addEventListener("click", function () {
      if (e.classList.contains("switch"))
        p.play(),
          T(t),
          (u.innerHTML = "Click the Door"),
          setTimeout(function () {
            e.classList.add("door-out"),
              e.classList.remove("switch"),
              (t.style.display = "none"),
              h(r);
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
              h(a);
          }, 4e3);
      else if (e.classList.contains("door-in"))
        L.play(),
          T(l),
          (u.innerHTML = "Click the Gift"),
          setTimeout(function () {
            e.classList.add("gift"),
              e.classList.remove("door-in"),
              (l.style.display = "none"),
              h(i);
          }, 4e3);
      else if (e.classList.contains("gift")) {
        S.pause(),
          f.play(),
          (o.style.display = "none"),
          T(n),
          (q.loop = !0),
          q.play();
        var c =
          parseInt(
            getComputedStyle(document.documentElement).getPropertyValue(
              "--readTime"
            )
          ) + 5;
        (d[1].style.display = "flex"),
          setTimeout(function () {
            d[1].classList.add("appear"),
              (d[1].style.opacity = "1"),
              m.classList.add("move-up");
          }, 1500),
          setTimeout(function () {
            (m.style.transform = "translateY(-100%)"),
              (n.style.display = "none");
          }, 5e3),
          setTimeout(function () {
            y.classList.add("fade-in"), (y.style.opacity = "0");
          }, 1e3 * c),
          setTimeout(function () {
            (d[1].style.display = "none"),
              (d[0].style.display = "flex"),
              d[0].classList.add("appear"),
              (d[0].style.opacity = "1");
          }, 1e3 * (c + 3));
      }
    });
})();
//# sourceMappingURL=index.46f3a471.js.map
