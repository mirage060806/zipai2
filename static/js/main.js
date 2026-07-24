// header.html
// getElementById(): 하나만
// getElementsByClassName(): 하나 이상
// getElementsByTagName(): 하나 이상
// querySelector('선택자'): 하나만
// querySelectorAll('선택자'): 하나 이상
// var -> const(안바뀔떄, 기본), let(바뀔때)
// 변수이름: 카멜표기법

// 요소 선택
const header = document.querySelector('#header');
const depth2List = document.querySelectorAll('.depth2');
const subBg = document.querySelector('.sub-bg');

// 이벤트 작성
// 객체.addEventListener('이벤트종류', 함수);
// 이벤트 종류: mouseenter, mouseleave, ...
// 객체는 이벤트 발생 주체: header
header.addEventListener('mouseenter', function () {
    // 객체.classList.add('클래스명'): 객체에 클래스 추가
    // 객체.classList.remove('클래스명'): 객체에 클래스 제거
    // depth2가 active 클래스를 가진다.
    // 객체.forEach(function(item[, index][, nodelist]){});
    depth2List.forEach(function (depth2) {
      depth2.classList.add('active');
    });
    
    // subbg에 active 클래스 추가
    if (subBg) subBg.classList.add('active');
    
    this.classList.add('active');

});

// header에서 마우스가 벗어나면 함수를 실행
header.addEventListener('mouseleave', function () {
    
  // subbg에 active 클래스 제거
    this.classList.remove('active');
  if (subBg) subBg.classList.remove('active');
  
  // depth2는 여러 개이므로 반복문을 돌며 각각 클래스 제거
  depth2List.forEach(function (depth2) {
    depth2.classList.remove('active');
  });
});