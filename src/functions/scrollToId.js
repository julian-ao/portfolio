import $ from 'jquery'

export const scrollToId = (id) => {
  var reqId = "#"+id;
  $('html, body').animate({
      scrollTop: $(reqId).offset().top-85
  }, 1000, "easeOutQuint");
}