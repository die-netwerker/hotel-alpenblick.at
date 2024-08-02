document.getElementById("top").querySelector(".menu").addEventListener("click", () => {
    document.body.classList.toggle("modal");
});

var $menu_toggle = document.getElementsByClassName("menulink");
var $menu_iteration;
for ($menu_iteration = 0; $menu_iteration < $menu_toggle.length; $menu_iteration++) {
    $menu_toggle[$menu_iteration].addEventListener("click", function() {
      if (this.parentElement.classList.contains("active")) {
        this.parentElement.classList.remove("active");
      } else {
        const menulinkWithIsopen = document.querySelectorAll('.active');
        menulinkWithIsopen.forEach((menulinkWithIsopen) => {
          menulinkWithIsopen.classList.remove('active');
        });
        this.parentElement.classList.toggle("active");
      }
    });
}
function addScrolled() {
  const hero = document.getElementsByClassName("frame-type-netwerk_hero").length;
  if ( hero === 0 ) {
      document.getElementById("top").classList.add("sticky");
      document.getElementById("modal").classList.add("sticky");
  } else {
      let sp = window.scrollY;
      if (sp >= 8) {
          document.querySelector("#top").classList.add("sticky");
          document.querySelector("#modal").classList.add("sticky");
      } else {
          document.querySelector("#top").classList.remove("sticky");
          document.querySelector("#modal").classList.remove("sticky");
      }
  }
}
addScrolled();
window.addEventListener("scroll", function () {
  addScrolled();
});