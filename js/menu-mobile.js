$(document).ready(function () {
  $('.toggle').click(() => {
    $('.toggle').addClass('active-in')
    $('.toggle img').addClass('active-in')
    $('.toggle').removeClass('active-out')
    $('.toggle img').removeClass('active-out')
    $('.header-desktop').addClass('active-in')
    $('.header-desktop').removeClass('active-out')
    // $('.overlapblack').addClass('active-in')
    // $('.overlapblack').removeClass('active-out')
  })
  $('.toggle-out').click(()=> {
    $('.toggle').addClass('active-out')
    $('.toggle img').addClass('active-out')
    $('.toggle').removeClass('active-in')
    $('.toggle img').removeClass('active-in')
    $('.header-desktop').removeClass('active-in')
    $('.header-desktop').addClass('active-out')
    // $('.overlapblack').addClass('active-out')
    // $('.overlapblack').removeClass('active-in')
  })
});