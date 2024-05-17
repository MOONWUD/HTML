// $().each(() => {
//   const baColor = $().data('bg');
//   $().css({backgroundColor : bgColor})
// })

// a 요소가 가지고 있느 기본 이벤트 제거
$('a[href="#"]').on('click', (e) => {
  e.preventDefault();
})

// 각 박스 안에 움직이는 이미지
const movedImg = (e) => {
  let x = e.clientX;
  let y = e.clientY;
  $('.box2-left').css({ left: -200 - x / 10, top: 10 - y / 30 })
  $('.box2-right').css({ right: 10 - x / 30, bottom: 10 - y / 10 })

  $('.box3-left').css({ left: -200 - x / 20, top: 10 - y / 30 })
  $('.box3-right').css({ right: 10 - x / 20, bottom: 10 - y / 30 })

  $('.box4-left').css({ left: -200 - x / 30, top: 10 - y / 10 })
  $('.box4-right').css({ right: 10 - x / 10, bottom: 10 - y / 20 })

  requestAnimationFrame(movedImg)
};
$('.box').on('mousemove', movedImg)

// 로고 컬러 변경 
$(window).on('scroll', () => {
  const box2Top = $('#box2').offset().top;

  $('header').toggleClass('colorChange', scrollY > box2Top);

})
// 네비메뉴 클릭시 해당 박스로 부드럽게 이동
$('.side-menu li').on('click', (e) => {
  const idx = $(e.currentTarget).index();
  const currentBox = 100 * idx;
  console.log(currentBox)
  scrollTo({
    top: `${currentBox}vh`,
    behavior: 'smooth'
  })
});