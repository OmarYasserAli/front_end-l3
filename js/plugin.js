$(function(){

$('html').niceScroll({
  cursorcolor :"#F7600E",
  autohidemode: true,
  cursorwidth: 10,
  cursorborder:0
});

  // Header Size 
  $('.header').height($(window).height());



  // Scroll to features

  $('.header .hire').click(function(){
    $('html ,body').animate({scrollTop:$('.our-team').offset().top},700)
  })

  $('.header .arrow i').click(function(){
    $('html ,body').animate({scrollTop:$('.features').offset().top},700)
  })



 
  //Show more photos

  $('.show-more').click(function(){
   
    $('.gallery .hidden').fadeToggle();
    $('html ,body').animate({scrollTop:$('.gallery').offset().top  +$('.gallery').height() },1500)
    $(this).addClass('hidden');

  })

   // Quotes Slider 

   var leftArrow  = $('.quotes .fa-chevron-left'),
       rightArrow = $('.quotes .fa-chevron-right');

       function checkArrows(){
          if( $('.quotes .quote:first').hasClass('active')){
            leftArrow.css({
              "opacity" :0.3,
              "cursor" : "default",
              "color" : "#fff"
            });

            leftArrow.mouseenter(function(){
                $(this).css("color", "#fff");
            });

          }
          else{
               leftArrow.css({
              "opacity" :1,
              "cursor" : "pointer"
            });

            leftArrow.mouseenter(function(){
                $(this).css("color", "#F7600E");
            });
            leftArrow.mouseout(function(){
                $(this).css("color", "#fff");
            });
          }


          if( $('.quotes .quote:last').hasClass('active')){
             rightArrow.css({
              "opacity" :0.3,
              "cursor" : "default",
              "color" : "#fff"
            });

            rightArrow.mouseenter(function(){
                $(this).css("color", "#fff");
            });

          }
          else{
               rightArrow.css({
              "opacity" :1,
              "cursor" : "pointer"
            });

            rightArrow.mouseenter(function(){
                $(this).css("color", "#F7600E");
            });
            rightArrow.mouseout(function(){
                $(this).css("color", "#fff");
            });
          }
       }

       rightArrow.click(function(){
           if(! $('.quotes .quote:last').hasClass('active')){
              $('.quotes .active').fadeOut(100,function(){
                $(this).removeClass('active').next('.quote').addClass('active').fadeIn();
                checkArrows();
                console.log("GG");
              })
           }
       })

       leftArrow.click(function(){
           if(! $('.quotes .quote:first').hasClass('active')){
              $('.quotes .active').fadeOut(100,function(){
                $(this).removeClass('active').prev('.quote').addClass('active').fadeIn();
                checkArrows();
              })
           }
       })

       checkArrows();
})