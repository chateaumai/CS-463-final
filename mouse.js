window.addEventListener("mousemove", function (e) {
  //trail
  [0.7, 0.9, 0.8, 0.5, 0.25].forEach(function (i) {
    var j = (1 - i) * 50;
    var elem = document.createElement("div");
    var size = Math.ceil(Math.random() * 10 * i) + "px";

    //ramdom number between 0 and 1
    var precision = 50; // 2 decimals
    var randomnum =
      Math.floor(
        Math.random() * (10 * precision - 1 * precision) + 1 * precision
      ) /
      (1 * precision);
    var rOpacity = randomnum / 10;
    var rSize = randomnum / 120 + 0.06;

    elem.style.position = "fixed";
    elem.classList.add("star-five");
    elem.style.zIndex = 6;
    //   elem.style.transform = `rotate(35deg) scale(${rSize})`
    elem.style.scale = rSize;
    //elem.style.transform = `rotate(35deg) scale(${rSize}) translate(-1450px, -250px)`
    elem.style.top =
      e.pageY -
      window.scrollY +
      Math.round(Math.random() * j - j / 2) -
      100 +
      "px";
    elem.style.left =
      e.pageX + Math.round(Math.random() * j - j / 2) - 100 + "px";
    //elem.style.width = size;
    //console.log(rSize);
    elem.style.opacity = rOpacity;
    //elem.style.height = size;
    // elem.style.background = 'hsla(' +
    //   Math.round(Math.random() * 160) + ', ' +
    //   '60%, ' +
    //   '100%, ' +
    //   i + ')';
    //elem.style.borderRadius = size;
    elem.style.pointerEvents = "none";

    document.body.appendChild(elem);
    window.setTimeout(function () {
      document.body.removeChild(elem);
    }, Math.round(Math.random() * i * 1000));
  });
});
