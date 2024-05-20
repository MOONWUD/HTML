// a 요소가 가지고 있는 기본 이벤트 제거
$('a[href="#"]').on('click', (e) => {
  e.preventDefault();
});

// 각 박스 안에 움직이는 이미지
const movedImg = (e) => {
  let x = e.clientX;
  let y = e.clientY;

  $('.box2-left').css({ left: -200 - x / 60, top: 50 - y / 30 });
  $('.box2-right').css({ right: -50 + x / 30, bottom: -50 + y / 60 });

  $('.box3-left').css({ left: -200 - x / 60, top: 50 - y / 40 });
  $('.box3-right').css({ right: -50 + x / 60, bottom: -50 - y / 30 });

  $('.box4-left').css({ left: -200 + x / 50, top: 50 - y / 50 });
  $('.box4-right').css({ right: -50 + x / 50, bottom: -50 - y / 60 });

  requestAnimationFrame(movedImg);
}

$('.box').on('mousemove', movedImg);


$(window).on('scroll', () => {
  // 로고 컬러 변경
  const box1PTop = $('.txt-wrapper p').offset().top;
  // console.log(box1PTop);
  /*
  if(scrollY > box1PTop) {
    $('header').addClass('colorChange');
  } else {
    $('header').removeClass('colorChange');
  }
  */
  $('header').toggleClass('colorChange', scrollY > box1PTop);


  // 해당 박스로 이동하면 내비에 .active 붙음
  const idx = Math.floor(scrollY / $(window).height());
  $('.side-menu li').removeClass('active').eq(idx).addClass('active');

  // active가 있으면 li의 date-bg 적용
  $('.side-menu li').each(function () {
    const bgColor = $(this).data('bg');
    // console.log(isBg);
    /*
    if($(this).hasClass('active')) {
      $(this).find('.dot').css({backgroundColor : bgColor})
    } else {
      $(this).find('.dot').css({backgroundColor : 'transparent'})
    }
    */
    const isBg = $(this).hasClass('active')
    $(this).find('.dot').css({ backgroundColor: isBg ? bgColor : 'transparent' })
  });
});

// 내비 메뉴 클릭시 해당 박스로 부드럽게 이동
$('.side-menu li').on('click', (e) => {
  const idx = $(e.currentTarget).index();
  // const currentBox = 100 * idx; scrollTop, scrollTo는 px 반환 받음
  const currentBox = $(window).height() * idx;
  console.log(currentBox);

  // scrollTo({ px 반환 받음
  //   top: `${currentBox}vh`,
  //   behavior: 'smooth'
  // })

  $('html, body').stop().animate({ scrollTop: currentBox }, 800, 'easeInOutCirc')
});

// 마우스 휠 이벤트

$('.box').each(function () {
  $(this).on('wheel', (e) => {
    e.preventDefault(); // 여기에서는 스크롤 기본 성격 제거

    let delta = e.originalEvent.deltaY;

    // const nextBox = this.nextElementSibling;
    const nextBox = $(this).next()[0];
    const prevBox = $(this).prev()[0];
    let currentTop = null;
    if(delta > 0) { // 휠 내렸을 때
      //  console.log(delta);
     
     /*
      if(nextBox) {
        currentTop = nextBox.offsetTop;
      } else {
        currentTop = this.offsetTop; // 다음 박스의 값이 없는 경우 현재 박스의 높이를 반환
      }
      */
     currentTop = nextBox ? nextBox.offsetTop : this.offsetTop;
    } else { // 휠 올렸을 때
      if(prevBox) {
        currentTop = prevBox.offsetTop;
      } else {
        // currentTop = 0; 첫번째 박스에 도달하면 높이값을 0으로 반환
        return; // 이전 박스의 값이 없는 경우 벗어남
      }
    }
    scrollTo ({
      top: currentTop,
      behavior: 'smooth'
    })
  });
});