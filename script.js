var hamburger = document.getElementById ('hamburger')
var menu = document.getElementById ('nav-menu')

$(document).ready(function(){
    $('#hamburger').on('click',function(){
      $('nav-menu').toggle();
    });
  });