var rating1 = document.getElementById("rating-1");
var rating2 = document.getElementById("rating-2");
var rating3 = document.getElementById("rating-3");
var rating4 = document.getElementById("rating-4");
var rating5 = document.getElementById("rating-5");

$( "#rating-1" ).click(function() {
    if(rating1.getAttribute('data-show') === "true") {
        rating1.setAttribute('data-show', "false"); 
        rating1.classList.add('form-check-input__active');
        rating2.setAttribute('data-show', "true");
        rating2.classList.remove('form-check-input__active');
        rating3.setAttribute('data-show', "true");
        rating3.classList.remove('form-check-input__active');
    }
    else if(rating2.getAttribute('data-show') === 'false')
    {

        rating2.setAttribute('data-show', "true");
        rating2.classList.remove('form-check-input__active');
        rating3.setAttribute('data-show', "true");
        rating3.classList.remove('form-check-input__active');
        rating4.setAttribute('data-show', "true");
        rating4.classList.remove('form-check-input__active');
        rating5.setAttribute('data-show', "true");
        rating5.classList.remove('form-check-input__active');
    }
    else {
        rating1.setAttribute('data-show', "true");
        rating1.classList.remove('form-check-input__active');
        rating2.setAttribute('data-show', "true");
        rating2.classList.remove('form-check-input__active');
        rating3.setAttribute('data-show', "true");
        rating3.classList.remove('form-check-input__active');
    }
  });
  $( "#rating-2" ).click(function() {
    if(rating2.getAttribute('data-show') === "true") {
        rating2.setAttribute('data-show', "false"); 
        rating2.classList.add('form-check-input__active');
        rating1.setAttribute('data-show', "false"); 
        rating1.classList.add('form-check-input__active');
        rating3.setAttribute('data-show', "true");
        rating3.classList.remove('form-check-input__active');
    }
    else if(rating3.getAttribute('data-show') === 'false')
    {
        rating3.setAttribute('data-show', "true");
        rating3.classList.remove('form-check-input__active');
        rating4.setAttribute('data-show', "true");
        rating4.classList.remove('form-check-input__active');
        rating5.setAttribute('data-show', "true");
        rating5.classList.remove('form-check-input__active');
        
    }
    else {
        rating2.setAttribute('data-show', "true");
        rating2.classList.remove('form-check-input__active');
        rating1.setAttribute('data-show', "true");
        rating1.classList.remove('form-check-input__active');
        rating3.setAttribute('data-show', "true");
        rating3.classList.remove('form-check-input__active');
    }
  });

  $( "#rating-3" ).click(function() {
    if(rating3.getAttribute('data-show') === "true") {
        rating2.setAttribute('data-show', "false"); 
        rating2.classList.add('form-check-input__active');
        rating1.setAttribute('data-show', "false"); 
        rating1.classList.add('form-check-input__active');
        rating3.setAttribute('data-show', "false");
        rating3.classList.add('form-check-input__active');
    }
    else if(rating4.getAttribute('data-show') === 'false')
    {
        rating4.setAttribute('data-show', "true");
        rating4.classList.remove('form-check-input__active');
        rating5.setAttribute('data-show', "true");
        rating5.classList.remove('form-check-input__active');
        
    }
    else {
        rating2.setAttribute('data-show', "true");
        rating2.classList.remove('form-check-input__active');
        rating1.setAttribute('data-show', "true");
        rating1.classList.remove('form-check-input__active');
        rating3.setAttribute('data-show', "true");
        rating3.classList.remove('form-check-input__active');
    }
  });
  $( "#rating-4" ).click(function() {
    if(rating4.getAttribute('data-show') === "true") {
        rating2.setAttribute('data-show', "false"); 
        rating2.classList.add('form-check-input__active');
        rating1.setAttribute('data-show', "false"); 
        rating1.classList.add('form-check-input__active');
        rating3.setAttribute('data-show', "false");
        rating3.classList.add('form-check-input__active');
        rating4.setAttribute('data-show', "false");
        rating4.classList.add('form-check-input__active');
    }
    else if(rating5.getAttribute('data-show') === 'false')
    {
        rating5.setAttribute('data-show', "true");
        rating5.classList.remove('form-check-input__active');
        
    }
    else {
        rating2.setAttribute('data-show', "true");
        rating2.classList.remove('form-check-input__active');
        rating1.setAttribute('data-show', "true");
        rating1.classList.remove('form-check-input__active');
        rating3.setAttribute('data-show', "true");
        rating3.classList.remove('form-check-input__active');
        rating4.setAttribute('data-show', "true");
        rating4.classList.remove('form-check-input__active');
    }
  });
  $( "#rating-5" ).click(function() {
    if(rating5.getAttribute('data-show') === "true") {
        rating2.setAttribute('data-show', "false"); 
        rating2.classList.add('form-check-input__active');
        rating1.setAttribute('data-show', "false"); 
        rating1.classList.add('form-check-input__active');
        rating3.setAttribute('data-show', "false");
        rating3.classList.add('form-check-input__active');
        rating4.setAttribute('data-show', "false");
        rating4.classList.add('form-check-input__active');
        rating5.setAttribute('data-show', "false");
        rating5.classList.add('form-check-input__active');
    }
    else {
        rating2.setAttribute('data-show', "true");
        rating2.classList.remove('form-check-input__active');
        rating1.setAttribute('data-show', "true");
        rating1.classList.remove('form-check-input__active');
        rating3.setAttribute('data-show', "true");
        rating3.classList.remove('form-check-input__active');
        rating4.setAttribute('data-show', "true");
        rating4.classList.remove('form-check-input__active');
        rating5.setAttribute('data-show', "true");
        rating5.classList.remove('form-check-input__active');
    }
  });

