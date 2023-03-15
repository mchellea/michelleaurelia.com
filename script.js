function toggleNav() {
    var hiddenItems = document.querySelectorAll(".hidden");
    for (var i = 0; i < hiddenItems.length; i++) {
      if (hiddenItems[i].style.display === "none") {
        hiddenItems[i].style.display = "block";
      } else {
        hiddenItems[i].style.display = "none";
      }
    }
  }