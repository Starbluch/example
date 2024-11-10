document.querySelectorAll('.gallery-container img').forEach(img => {
    img.onclick = () => {
        document.querySelector('.pop-up').style.display = 'block';
        document.querySelector('.pop-up img').src = img.getAttribute('src');
        
    };
});
document.querySelector('.pop-up span').onclick = () => {
document.querySelector('.pop-up').style.display = 'none';
};

$(document).ready(function () {
    $("a.scrollto").click (function() {
      var elementClick = $(this).attr("href")
      var destination = $(elementClick).offset().top;
      jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 1000);
    return false;
    });
  });

  document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('.pop-up').style.display = 'none';
});