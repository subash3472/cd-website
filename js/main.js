$(document).ready(function() {
  const menuIcon = $('.fas.fa-bars');
  const pannel = $('.pannel');
  const lists = {
    music: $('#musiclist'),
    flim: $('#flimlist'),
    technology: $('#technologyList'),
    merchandise: $('#merchandiseList'),
    gaming: $('#gaminglist'),
    blog: $('#bloglist')
  };
  let isCartOpen = false; // Flag variable to track cart state

   $(".cartslide").hide();   
  pannel.hide();

  menuIcon.click(function() {
    if (!isCartOpen) {
      pannel.slideToggle();
      $.each(lists, function(key, value) {
        value.slideUp();
      });
      console.log("clicked");
    }
  });

  $('#music, #flim, #technology, #merchandise, #gaming, #blog').click(function() {
    if (!isCartOpen) {
      const currentList = lists[$(this).attr('id')];
      $.each(lists, function(key, value) {
        if (value[0] !== currentList[0]) { // Compare DOM elements, not jQuery objects
          value.slideUp();
        }
      });
      currentList.slideToggle();
    }
  });

  $(".fa-shopping-cart").click(function() {
    $(".cartslide").slideDown("fast");
    console.log("cart opened");
    isCartOpen = true;
  });

  $("#close_cartslide,#close_cartslide2").click(function() {
    $(".cartslide").slideUp("fast");
    console.log("cart closed");
    isCartOpen = false;
  });
});


// end slide function
/* $(document).ready(function(){
  $('#text1').click(function(){
    $('#text_slide1').slideToggle();
  });   */

 


// sigh up for emil , slide function

/* let check = document.querySelector(".fans_reg_email");
check.addEventListener("click",function(){
  console.log("cliked")
})

$(document).ready(function() {
  $(".fans_reg_email").click(function() {
    $('.slide_fans').slideToggle();
  });
});


function addtobasket(event){
  const addButton = event.target;


}              */



  // JavaScript
  // Retrieve the elements you want to store data from
const inputsDiv = document.querySelector('.inputss');
const submitButton = document.getElementById('submit');

// Listen for the button click event to trigger storage
submitButton.addEventListener('click', () => {
  // Get the text content of all the <p> elements within the "inputs" div
  const inputElements = inputsDiv.querySelectorAll('p');
  const data = [];

  // Store the text content in an array
  inputElements.forEach((element) => {
    data.push(element.textContent);
  });

  // Convert the array to a JSON string and store it in local storage with a key (e.g., 'myData')
  localStorage.setItem('myData', JSON.stringify(data));
});





// 
// Wait for the DOM to finish loading
$(document).ready(function(){
  $('#text1').click(function(){
    if ($(window).width() < 620) {
      $('#text_slide1').slideToggle();
    }
  });
});




$(document).ready(function(){
  $('#text2').click(function(){
    if ($(window).width() < 620) {
      $('#text_slide2').slideToggle();
    }
  });
});

$(document).ready(function(){
  $('#text3').click(function(){
    if ($(window).width() < 620) {
      $('#text_slide3').slideToggle();
    }
  });
});


