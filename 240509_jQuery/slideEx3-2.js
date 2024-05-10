$(function () {
  let current = 0;
  const $slideItems = $('.slide-wrapper .slide-item');

  const simpleSlide = (idx) => {

    if(idx >= $slideItems.length) {// 다음 버튼 클릭시 section의 수 보다 커지면 인덱스 0으로 
      idx = 0;
    } else if(idx < 0) {// 이전 버튼 클릭시 0보다 작아지면 인덱스가 section의 수보다 적은 값으로(== 인덱스)
      idx = $slideItems.length - 1;
    } 

    current = idx;
    $slideItems.removeClass('active').eq(current).addClass('active');
  }

  // 다음 버튼
  $('#nextBtn').on('click', () => {
    simpleSlide(current + 1);
  });

  // 이전 버튼
  $('#prevBtn').on('click', () => {
    simpleSlide(current - 1);
  });

  setInterval(() => {
    simpleSlide(current + 1)
  }, 3000);
});