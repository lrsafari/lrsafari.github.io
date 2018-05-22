// When the user scrolls the page, execute myFunction 
window.onscroll = function() {funcStickyHeader()};

// Get the header
var sjmHeader = document.getElementById("myHeader");

// Get the offset position of the navbar
var sjmSticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function funcStickyHeader() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}