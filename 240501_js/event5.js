/* 
  event.target
    실제 이벤트가 발생하는 요소를 반환. 이벤트 리스너가 등록되어 있는 자식 요소 반환

  event.currentTarget
    이벤트 리스너가 있는 요소를 반환. 이벤트를 등록해 놓은 요소 반환(일반적으로는 버튼)
*/

const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const ul = document.querySelector("ul");
const list = document.querySelector("li");
const link = document.querySelector("a");

// box1에 이벤트를 binding
box1.addEventListener('click', (evt) => {
  console.log(`target -> ${evt.target.tagName}`);
  console.log(`currentTarget -> ${evt.currentTarget.tagName}`);
});
/* 
box1에 이벤트를 binding한 상태, 
box1 클릭 : target -> DIV currentTarget -> DIV
h1 클릭 : target -> H1(실제 이벤트가 발생한 지점) currentTarget -> DIV(이벤트리스너)
h2 클릭 : target -> H2(실제 이벤트가 발생한 지점) currentTarget -> DIV(이벤트리스너)
*/

box2.addEventListener('click', (evt) => {
  evt.preventDefault();
  console.log(`target -> ${evt.target.tagName}`);
  console.log(`currentTarget -> ${evt.currentTarget.tagName}`);

  evt.target.style.borderColor = '#A5DD9B';
  evt.currentTarget.style.borderStyle = 'dotted';
});
/* 
box2에 이벤트를 binding한 상태, 
box2 클릭 : target -> DIV currentTarget -> DIV
ul 클릭 : target -> UL  currentTarget -> DIV
li 클릭 : target -> LI currentTarget -> DIV
a 클릭 : target -> A currentTarget -> DIV
*/

