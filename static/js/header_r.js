// 대상 요소 선택
const header = document.querySelector("#header");
const subBg = document.querySelector(".sub-bg");
const btnHamburger = document.querySelector('.btn-hamburger');
const btnClose = document.querySelector('.btn-close')
const gnb = document.querySelector('.gnb');
const menuOverlay = document.querySelector('.menu-overlay')
const depth2List = document.querySelectorAll(".depth2");
const depth1Links = document.querySelectorAll('.depth1 > li > a')


// 마우스가 들어왔을 때 (mouseenter)
header.addEventListener("mouseenter", function () {
  if (window.innerWidth > 991) {
    if (subBg) subBg.classList.add("active");
    
    // depth2는 여러 개이므로 반복문을 돌며 각각 클래스 추가
    depth2List.forEach(function (depth2) {
      depth2.classList.add("active");
    });
  }
});

// 마우스가 나갔을 때 (mouseleave)
header.addEventListener("mouseleave", function () {
  if (window.innerWidth > 991) {
    if (subBg) subBg.classList.remove("active");
    
    // depth2는 여러 개이므로 반복문을 돌며 각각 클래스 제거
    depth2List.forEach(function (depth2) {
      depth2.classList.remove("active");
    });
  }
});

// 햄버거 버튼 클릭 시 오픈 캔버스 메뉴 등장
btnHamburger.addEventListener('click', function(){
  // gnb가 오른쪽(right:-100%)에서 왼쪽(right:0)으로 등장
  gnb.classList.add('active')
  menuOverlay.classList.add('active')
})

// 메뉴를 열고 닫는 기능
btnClose.addEventListener('click', closeMobileMenu);
menuOverlay.addEventListener('click', closeMobileMenu);

function closeMobileMenu(){
  gnb.classList.remove('active')
  menuOverlay.classList.remove('active')
}

depth1Links.forEach(function(link){
  link.addEventListener('click', function(e){
    if (window.innerWidth <= 991) {
      const subMenu = this.nextElementSibling;

      if (subMenu && subMenu.classList.contains('depth2')) {
        e.preventDefault();
        const parentLi = this.parentElement;

        parentLi.classList.toggle('open');
        subMenu.classList.toggle('active');
      }
    }
  });
});

window.addEventListener('resize', function(){
  if (window.innerWidth > 991) {
    closeMobileMenu();
    document.querySelectorAll('.depth1 > li').forEach(function(li){
      li.classList.remove('open');
    });
    depth2List.forEach(function(depth2){
      depth2.classList.remove('active');
    });
    if (subBg) subBg.classList.remove('active');
  }
});
