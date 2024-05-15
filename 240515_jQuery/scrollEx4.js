// 로고 클릭시 맨 위로 이동
$('.title strong').on('click', () => {
  scrollTo({
    top: 0,
    behavior: 'smooth'
  })
});

// 스크롤에 따른 header 변화
// addEventListener('scroll', ()=>{})
$(window).on('scroll', ()=>{
  const box1 = $('.box1').offset().top;
  console.log(box1);
  const headerHt = $('header').outerHeight();
  console.log(headerHt);
  console.log($('header').height());
  if(scrollY > box1) {
    $('header').addClass('active');
    $('article').css({height:'calc(100vh - ${headerHt}px)'});
  } else {
    $('header').removeClass('active');
    $('article').css({height:'calc(100vh - ${headerHt}px)'});
  }
});

// 해당 박스로 부드러운 이동
/*
$('.globa;-menu li:nth-child a').on('click', (e) => {
  e.prevntDefault();
  scrollTo({
    top: $('.box1').offset().top - $('header'),
    behavior: 'smooth'
  })
})
요소를 순차적으로 순회
js
Array.forEach(elem => {});
[a[0], a[1], a[2], a[3]].forEach(a => {});

jQuery
배열이나 객체를 반복하고자 할 때  사용
$.each(배열 혹은 객체, 콜백 함수);
배열인 경우, 인덱스, 값 순서로 인자를 받음
$.each((index, vaule) => {});
*/

$('.global-menu a').each(function (idx, elem) {
  // console.log(`index: ${idx}, value: ${elem}`);
  $(elem).on('click', (e) => {
    e.preventDefault();
    const getArticle = $('article').eq(idx).offset().top - $('header').height();
     scrollTo({
      top: getArticle,
      behavior: 'smooth'
      })
  })
});
// .on('click', (e) => {
//   e.prevntDefault();
//   scrollTo({
//     top: $('.box1').offset().top - $('header'),
//     behavior: 'smooth'
//   })
// })
// 모바일 토글 버튼
$('.mobile-button').on('click', (e) => {
  $(e.target).toggleClass('toggle-btn');
  $('.global-menu').toggleClass('show-menu')
  
  $('.global-menu li').each( (idx, li) => {
    $(li).on('click', () => {
      $('.mobile-button').removeClass('toggle-btn');
      $('.global-menu').removeClass('show-menu');
    })
  })
})