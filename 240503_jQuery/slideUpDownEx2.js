$(function () {
  /*
  $('ul > li.menu1 > h4').on('click', () => {
    $('ul > li.menu1 > .none').slideToggle();
    $('ul > li.menu2 > .none').slideUp();
    $('ul > li.menu3 > .none').slideUp();
    $('ul > li.menu4 > .none').slideUp();
  });
  $('ul > li.menu2 > h4').on('click', () => {
    $('ul > li.menu2 > .none').slideToggle();
    $('ul > li.menu1 > .none').slideUp();
    $('ul > li.menu3 > .none').slideUp();
    $('ul > li.menu4 > .none').slideUp();
  });
  $('ul > li.menu3 > h4').on('click', () => {
    $('ul > li.menu3 > .none').slideToggle();
    $('ul > li.menu1 > .none').slideUp();
    $('ul > li.menu2 > .none').slideUp();
    $('ul > li.menu4 > .none').slideUp();
  });
  $('ul > li.menu4 > h4').on('click', () => {
    $('ul > li.menu4 > .none').slideToggle();
    $('ul > li.menu1 > .none').slideUp();
    $('ul > li.menu2 > .none').slideUp();
    $('ul > li.menu3 > .none').slideUp();
  });
  */
      // 1. 전부닫고 내가 클릭한 것만 오픈
 /*
 $('ul > li > h4').on('click', (e) => {
   $('ul > li > .none').slideUp();
    // 내가 클릭한 h3의 바로 그 형제 !
   $(e.target).next('div').slideToggle();
 }); 
 */
      // 2. method chaning 으로 클릭한 거 외 닫기
 $('ul > li > h4').on('click', (e) => {
    // 내가 클릭한 h3의 바로 그 형제 !
   $(e.target).next('div').slideToggle().parent().siblings().find('div').slideUp();
 });

});
