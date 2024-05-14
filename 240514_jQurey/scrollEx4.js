// 로고 클릭시 맨 위로 이동
  $('.title strong').on('click', () => {
    scrollTo({
      top : 0,
      behavior: 'smooth'
    })
  })

// 스크롤에 따른 header의 변화
$(window).on('scroll', () => {
  const box1Top = $('#content1').offset().top;
  // console.log(box1Top);
  if(scrollY > box1Top - 60) {
    $('header').addClass('active')
  } else {
    $('header').removeClass('active')
  }
})

// 해당 박스로 부드러운 이동
// 모바일 토글 버튼