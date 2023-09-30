window.addEventListener = function () {
  var pionter = document.querySelector("#pionter");
  window.onmousemove = function (e) {
    pionter["style"]["left"] = e.clientX + "px";
    pionter["style"]["top"] = e.clientY + "px";
  };
};
