function h1_b() {
  setTimeout(function () {
    document.getElementById("h1_b_2").innerHTML = ".";
    setTimeout(function () {
      document.getElementById("h1_b_2").innerHTML = "..";
      setTimeout(function () {
        document.getElementById("h1_b_2").innerHTML = "...";
        h1_b();
      }, 900);
    }, 600);
  }, 600);
}
