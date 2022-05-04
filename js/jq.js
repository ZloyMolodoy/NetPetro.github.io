var rating1 = document.getElementById("rating-1");
var rating2 = document.getElementById("rating-2");
var rating3 = document.getElementById("rating-3");
var rating4 = document.getElementById("rating-4");
var rating5 = document.getElementById("rating-5");

$( "#rating-1" ).click(function() {
    rating1 = this;
    if(rating1.getAttribute('data-show') === "true") {
        rating1.setAttribute('data-show', "false"); 
        rating1.classList.add('form-check-input__active');
        rating2.setAttribute('data-show', "true");
        rating2.classList.remove('form-check-input__active');

    }
    else {
        rating1.setAttribute('data-show', "true");
        rating1.classList.remove('form-check-input__active');
        rating2.setAttribute('data-show', "true");
        rating2.classList.remove('form-check-input__active');

    }
  });
  $( "#rating-2" ).click(function() {
      rating2 = this;
    if(rating2.getAttribute('data-show') === "true") {
        rating2.setAttribute('data-show', "false"); 
        rating2.classList.add('form-check-input__active');
        rating1.setAttribute('data-show', "false"); 
        rating1.classList.add('form-check-input__active');

    }
    else {
        rating2.setAttribute('data-show', "true");
        rating2.classList.remove('form-check-input__active');
        rating1.setAttribute('data-show', "true");
        rating1.classList.remove('form-check-input__active');
    }
  });