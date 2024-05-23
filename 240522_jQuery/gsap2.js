$('a[href="#"]').on('click', e => e.preventDefault());

/* 로딩 이벤트
setTimeout(() => $('.loader-container').addClass('loader-hide'), 0),
setTimeout(() => $('.loader-container').removeClass('loader-hide'), 2500);
*/
function hideLoader () {
  $('.loader-container').addClass('loader-hide');
}
window.addEventListener('load', hideLoader);

// .box4 .list-items li a .item-bg 
$('.list-items .list-item').each((idx, elem) => {
  const bgColor = $(elem).data('bg');
  $(elem).find('.item-bg').css({ backgroundColor : bgColor });
});

// 메뉴 클릭시 업 다운
$('.global-menu-button').on('click', () => $('.global-menu').toggleClass('on'));

// GSAP
// 스크롤트리거 
gsap.registerPlugin(ScrollTrigger);

// header opacity
/*
gsap.fromTo(
  ['.header .logo svg', '.header .nav .global-menu-button'], 
  { opacity: 0 },
  { 
    opacity: 1,
    duration: 0.5,
    scrollTrigger: {
      trigger: '.intro-bg-logo',
      start: 'bottom bottom',// 트리거 요소의 하단과 뷰포트의 하단이 만날때 시작
      toggleActions: 'play none none reverse'// onEnter onLeave onEnterBack onLeaveBack
    }
  }
);
*/

const headerOpacity = {
  trigger: '.intro-bg-logo',
  start: '100% 100%',
  toggleActions: 'play none none reverse'
}

gsap.fromTo(
  '.header .logo svg',
  { opacity: 0.5 },
  { 
    opacity: 1,
    duration: 0.5,
    scrollTrigger: headerOpacity
  }
);
gsap.fromTo(
  '.header .nav .global-menu-button',
  { opacity: 0 },
  { 
    opacity: 1,
    duration: 0.5,
    scrollTrigger: headerOpacity
  }
);
// .box6을 만나면 색상 반전
const headerInvert = {
  trigger: '.box6',
  start: '50% 100%',
  end: '100% 0',
  toggleActions: 'play reverse play reverse',
  onEnter: () => 
    gsap.to(".global-menu-button", {
      filter: 'invert(100%)',
      duration: 0.4
    }),
  onLeave: () => 
    gsap.to(".global-menu-button", {
      filter: 'invert(0)',
      duration: 0.4
    }), 
  onEnterBack: () => 
    gsap.to(".global-menu-button", {
      filter: 'invert(100%)',
      duration: 0.4
    }), 
  onLeaveBack: () => 
    gsap.to(".global-menu-button", {
      filter: 'invert(0)',
      duration: 0.4
    }),    
}

ScrollTrigger.create(headerInvert);

// .intro-bg-logo .fat-logo svg 애니메이션(q,u,d,e)
// gsap.to("#q", {x: , y:, rotate: , ease:, duration: });

const fatLogoAni = gsap.timeline({
  scrollTrigger: {
    trigger: '.box1',
    start:'100% 100%',
    end: '100% 0',
    scrub: 1, // scrollTrigger 이벤트가 스크롤 될 때만 재생되도록 만들어 줌. true: 바로 진행. 1~3의 숫자인 경우 더 부드럽게 진행
    // markers: true
  },
});

const xVal = [-100, 50, 100, 50];
const yVal = [300, 200, 100, 450];
const rotateVal = [-10, 10, -10, 10];

gsap.utils.toArray('.fat-logo path').forEach((path, idx) => {
  fatLogoAni.to(
    path,
    {
      x: xVal[idx], 
      y: yVal[idx], 
      rotate: rotateVal[idx], 
      ease: "expoScale(0.5,7,none)", 
      duration: 0.5
    },
    0 // 타임라인 내에서 애니메이션이 시작될 시간. 0은 동시 시작
  );
});

// .podcast-title
gsap.fromTo(
  '.podcast-title', 
  { overflow: 'hidden', y: 150, opacity: 0.5 },
  { y: 0, ease: 'none', opacity: 1, duration: 5, scrollTrigger: { trigger: '.podcast-title', start: '100% 100%', end: '100% 100%', scrub: 1 }}
  )

// .rolled-over-txt
gsap.utils.toArray('.rolled-over-txt').forEach((txt) => {
  gsap.timeline({
    scrollTrigger: {
      trigger: txt,
      start: '100% 100%',
      end: '100% 100%',
      scrub: 1
    }
  }).fromTo(
    txt,
    {
      y: 100,
      opacity: 0
    },
    {
      y: 0,
      opacity: 1,
      ease: 'none',
      duration: 5
    }
  );
});

// .txt-ani
const txtAniLis = gsap.utils.toArray('.txt-ani li');
/* 타임라인을 변수 대입후 적용하면 순차적 실행
  gsap 매서드 안에 직접 작성시 생성과 동시에 실행
*/
const txtAniTl = gsap.timeline({ repeat: -1 });
txtAniLis.forEach((txt) => {
  txtAniTl.to(
    txt, {
      opacity: 1,
      duration: 0.8,
      repeat: 1,
      x: 0,
      yoyo: true,
      ease: "power4.out",
    });
});

// .list-items
gsap.utils.toArray('.list-items .list-item').forEach((elem, idx)=>{
  ScrollTrigger.create({
    trigger: elem,
    start: "30% 50%",
    onEnter: () => {
      gsap.set(elem, {
        rotateX: '-65deg',
        z : -500,
        opacity: 0,
      });
      gsap.to(elem, {
        rotateX: 0,
        z : 0,
        opacity: 1,
        delay: (idx % 3) * 0.1,// 요소의 애니메이션 시작 대기 시간
        stagger: 0.1// 요소 간의 애니메이션 지연 시간
      })
    },
    onEnterBack: () => {
      gsap.set(elem, {
        rotateX: '-65deg',
        z : -500,
        opacity: 0,
      });
      gsap.to(elem, {
        rotateX: 0,
        z : 0,
        opacity: 1,
        delay: (idx % 3) * 0.1,
        stagger: 0.1
      })
    },
  });
});

// ScrollTrigger.batch(); 여러 객체에 동일한 스크롤 트리거 적용
/*
ScrollTrigger.batch('.list-items .list-item', {
  start: '30% 50%',
  onEnter: (batch) => {
    gsap.set(elem, {
      rotateX: '-65deg',
      z : -500,
      opacity: 0,
    });
    gsap.to(elem, {
      rotateX: 0,
      z : 0,
      opacity: 1,
      delay: (idx % 3) * 0.1,
      stagger: 0.1
    });
  }
});
*/

// .meters-bottom-title
gsap.utils.toArray('.meters-bottom-title span').forEach((elem) => {
  gsap.to(elem, {
    // 스크롤 이동시 왼쪽으로 이동
    // gsap에서는 (인덱스,  해당요소)
    x: (idx, target) => -target.offsetWidth * 0.8,
    scrollTrigger: {
      trigger: '.box6',
      start: '0 100%',
      end: '100% 0',
      scrub: 1
    }
  })
})