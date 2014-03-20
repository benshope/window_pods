
// SCROLLING
$(function() {
  $('#topnav a, .site-title').on('click', function(e) {
    e.preventDefault();
    var scrolldiv = $(this).attr('href');
    $(scrolldiv).animatescroll({ padding:50 });
  });
});

$(window).scroll(function() {
if ($(".navbar").offset().top > 2) { $(".navbar-fixed-top").addClass("sticky"); }
else { $(".navbar-fixed-top").removeClass("sticky"); }
});

$(window).resize(function() {
    $('#header').height($(window).height());
    $('.header-description').css('margin-top',($(window).height()/2)+'px');
});

$(window).trigger('resize');

// PLUGINS
var map;
$(document).ready(function() {

  $('#header').height($(window).height());
  $('.header-description').css('margin-top',($(window).height()/2)+'px');

  if ($(".navbar").offset().top > 2) { $(".navbar-fixed-top").addClass("sticky"); }
  else { $(".navbar-fixed-top").removeClass("sticky"); }
  
  // activate the second carousel
  $('#slider-carousel').carousel({ interval: false });
  $('#testimonials-carousel').carousel({ interval: false });
  
  // GOOGLE MAPS PLUGIN
  map = new GMaps({
    el: '#map',
    lat: 37.3894,
    lng: -122.0819
  });
  map.setContextMenu({
    control: 'map',
    options: [{
      title: 'Add marker',
      name: 'add_marker',
      action: function(e){
        this.addMarker({
          lat: e.latLng.lat(),
          lng: e.latLng.lng(),
          title: 'New marker'
        });
        this.hideContextMenu();
      }
    }, {
      title: 'Center here',
      name: 'center_here',
      action: function(e){
        this.setCenter(e.latLng.lat(), e.latLng.lng());
      }
    }]
  });
  map.setContextMenu({
    control: 'marker',
    options: [{
      title: 'Center here',
      name: 'center_here',
      action: function(e){
        this.setCenter(e.latLng.lat(), e.latLng.lng());
      }
    }]
  });


  // SLIDING CONTACT
  $('.contact-form-btn').click( function(){
    if($(this).hasClass('closes')) {
      $('.contact-form-inner').slideDown();
      $(this).removeClass('closes').addClass('open');
    } else {
      $('.contact-form-inner').slideUp();
       $(this).removeClass('open').addClass('closes');
    }
  });
  
  // AJAX CONTACT SUBMIT
  $('#contact-form').submit(function(){
      $('#contact-form button').html('Sending...')
      $.post('mail', $(this).serialize(), function(data) {
        $('#contact-form').html(data);
        $('#contact-form input, #contact-form textarea').val('');
      });
      return false;
  });

  // AJAX SUBSCRIPTION SUBMIT
  $('#subsc-form').submit(function(){
    $.post('mail', $(this).serialize(), function(data){
    
      $('.subscribe-wrapper > *').fadeIn();
      $('.subscribe-wrapper').html(data);
      $('#subsc-form input').val('');
    });
    return false;
  });

});