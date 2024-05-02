/* 
  jQuery 기본 구조
  $('대상').method();

  https://api.jquery.com/category/selectors
  jQuery('*'); 제이쿼리 방식으로 전체 선택자를 탐색
  $('#id'); 아이디 선택자 탐색
  $('.class'); 클래식 선택자 탐색
  $('#id > .class, type type'); 다중 선택자 탐색
  $('type:nth-child()');
  $('type[attribute=value]');
  $(':hover');

  .method();
  $().parent(); 직계 부모 노드 탐색
  $().parents(); 모든 부모 노드 탐색
  $().children(); 모든 직계 자식 노드 탐색
  $().siblings(); 형제 노드 탐색
  $().prev(); 바로 이전 형제 노드 탐색
  $().next(); 바로 다음 형제 노드 탐색
  $().prevAll(); 이전 형제 노드 '모두' 탐색
  $().nextAll(); 다음 형제 노드 '모두' 탐색
  $().first(); 일치하는 요소에서 첫번째 노드 탐색
  $().last(); 일치하는 요소에서 마지막 노드 탐색
  $().find(); 일치하는 하위 노드 탐색. 반드시 매개변수 작성해야 함
  $().filter(); 일치하는 노드 탐색(주로 걸러냄)
*/

/* 문서 준비 이벤트
JS - >
window.onload = function() {}
document.addEventListener('DOMContentLoaded', function() {})

jQuery - >
$(document).ready(function() {});
*/

$(document).ready(function() {
  // == JS .style
  // $().css('속성');
  // $().css('속성','값');
  // $().css({'속성' : '값', '속성' : '값', '속성' : '값'});
  $('body').css('background-color', '#FEEFAD');
  $('body *').css({'border':'3px solid #0A6847', 'padding':'10px', 'margin':10, 'color':'#0A6847'});
  // px은 생략가능. 기본값이 px

  const item = $('a').parent(); // a의 부모를 탐색
  console.log(item);
  // method chaining 여러 개의 매서드를 연결하는 방식
  $('a').parent().css({'border-color':'#7ABA78'}); // 일촌부모만 !
  // $('a').parents().css({'border-style':'dashed'});  매개변수를 지정하지 않으면 a의 상위 노드 모두를 탐색. 즉 body, html 탐색. 모든 조상.. 👻
  $('a').parents('#wrapper').css({'border-style':'dashed'});
  $('.container').children(); // 자식 노드 탐색. 매개변수를 지정하지  않으면 같은 라인의 모든 자식 노드 탐색
  // $('.container').children().css({'border-color' : '#D37676'}); 일촌관계의 자식에게만 적용
  $('.container').children('h1').css({'border-color' : '#D37676'});

  $('li.part').siblings(); // 2촌관계 탐색. li.part의 형제관계 탐색
  $('li.part').siblings().css({ backgroundColor: '#FFC374'});
  // li.part의 마지막 형제의 자식인 a에게 display:block
  // $('li.part').siblings().last().find('a').css({'display' : 'block'});
  $('li.part').siblings('li:last-child').children().css({'display' : 'block'});

  // .first(); 첫번째 탐색한 노드를 반환
  // 제일 마지막 li의 첫번째 a
  $('li.part').siblings().last().children().first().css({
    'border-style':'double',
    textDecoration : 'none',
    'font-weight' : 'bold'
  });

  $('.p2').prev(); // .p2의 앞에 작성된 형제 노드 탐색
  $('.p2').prev().css({backgroundColor : '#C3E2C2'}); 

  $('.p2').next(); // .p2의 뒤에 작성된 형제 노드 탐색
  $('.p2').next().css({
    backgroundColor : '#CAE4DB',
    borderWidth : 5
  }); 

  $('.p2').prevAll(); // p2 앞에 작성된 형제 노드 *모두* 탐색
  $('.p2').prevAll().css({borderWidth : 8}); 
  $('.p2').nextAll(); // p2 뒤에 작성된 형제 노드 *모두* 탐색

  // .find(); 하위 노드 탐색. 반드시 *매개변수* 필요
  $('#header').siblings('ul').find('a:last-child').css({
    backgroundColor : '#F1AE89',
    textDecoration : 'none',
    'font-weight' : 'bold'
  });

  $('#header').find('p').css({
    backgroundColor : '#CCEABB',
    'color' : '#BB3B0E'
  })

  $('.part').filter('ul'); // .part 중 ul을 거르겠다
  $('.part').filter('ul').css({borderColor : '#EB8242'}); 
  $('.part').filter('li').css({listStyle : 'none'}); 

  $('.container :odd').css({fontStyle : 'italic'});
});