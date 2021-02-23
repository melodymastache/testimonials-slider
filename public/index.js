var slides = document.getElementsByClassName('slide');

$('.prev').click(() => {
  for (var i in slides) {
    if (slides[i].id == 'active') {
      slides[i].id = 'inactive';
    }
    else {
      slides[i].id = 'active';
    }
  }
});

$('.next').click(() => {
  for (var i in slides) {
    if (slides[i].id == 'active') {
      slides[i].id = 'inactive';
    }
    else {
      slides[i].id = 'active';
    }
  }
});