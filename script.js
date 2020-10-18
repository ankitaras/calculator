function aditya() {
  // Get the checkbox
  var a = document.getElementById("raj");

  // Get the output text
  var b = document.getElementById("god");

  // If the checkbox is checked, display the output text
 if (a.checked == true) {
    b.style.backgroundImage = "url(https://wallpapersprinted.com/download/2/early_morning_in_bulgaria-wallpaper-1280x800.jpg)";
  } else {
    b.style.backgroundImage = "url(https://images.unsplash.com/photo-1518818419601-72c8673f5852?ixlib=rb-1.2.1&w=1000&q=80)";;
  }
}
