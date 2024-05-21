$('a[href="#"]').on('click', e => e.preventDefault());
/* 로딩 이벤트
setTimeout(() => $('.loader-container').addClass('loader-hide'), 0),
setTimeout(() => $('.loader-container').removeClass('loader-hide'), 3000);
*/

function hideLoader () {
  $('.loader-container').addClass('loader-hide');
}
window.addEventListener('load', hideLoader);

$('.list-items .list-item').each((idx, elem) => {
  const bgColor= $(elem).data('bg');
  $(elem).find('.item-bg').css({backgroundColor : bgColor})
});