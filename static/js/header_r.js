// 대상 요소 선택
const header = document.querySelector("#header");
const subBg = document.querySelector(".sub-bg");
const depth2List = document.querySelectorAll(".depth2"); // 클래스이므로 전체 선택

const btnHamburger = document.querySelector('.btn-hamburger');
const btnClose = document.querySelector('.btn-close')
const gnb = document.querySelector('.gnb');
const menuOverlay = document.querySelector('.menu-overlay')



// 마우스가 들어왔을 때 (mouseenter)
header.addEventListener("mouseenter", function () {
  this.classList.add("active");
  if (subBg) subBg.classList.add("active");
  
  // depth2는 여러 개이므로 반복문을 돌며 각각 클래스 추가
  depth2List.forEach(function (depth2) {
    depth2.classList.add("active");
  });
});

// 마우스가 나갔을 때 (mouseleave)
header.addEventListener("mouseleave", function () {
  this.classList.remove("active");
  if (subBg) subBg.classList.remove("active");
  
  // depth2는 여러 개이므로 반복문을 돌며 각각 클래스 제거
  depth2List.forEach(function (depth2) {
    depth2.classList.remove("active");
  });
});

// 햄버거 버튼 클릭 시 오픈 캔버스 메뉴 등장
// 이벤트 작성 형식
// 객체(변수).addEventListener('이벤트종류',함수)
// 익명함수 -> 화살표 함수
btnHamburger.addEventListener('click', function(){
  // gnb가 오른쪽(right:-100%)에서 왼쪽(right:0)으로 등장
  gnb.classList.add('active')
  menuOverlay.classList.add('active')
})

btnClose.addEventListener('click', function(){
  // gnb가 오른쪽(right:-100% = 제거)에서 왼쪽(right:0 = 추가)으로 등장
  gnb.classList.remove('active')
  menuOverlay.classList.remove('active')
})
menuOverlay.addEventListener('click', function(){
  // gnb가 오른쪽(right:-100% = 제거)에서 왼쪽(right:0 = 추가)으로 등장
  gnb.classList.remove('active')
  menuOverlay.classList.remove('active')
})