window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var contact_height = document.getElementById("contact_pos").getBoundingClientRect().top
  offset = contact_height - (document.body.getBoundingClientRect().top + screen.height)
  if (document.documentElement.scrollTop > offset) {
      document.getElementById("contact_bar").className = "non_contact"
  } else {
      document.getElementById("contact_bar").className = "contact"
  }
}
