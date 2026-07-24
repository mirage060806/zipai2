// 대상 요소 선택
const header = document.querySelector("#header");
const subBg = document.querySelector(".sub-bg");
const depth1List = document.querySelectorAll(".depth1 > li"); // 클래스이므로 전체 선택
const depth2List = document.querySelectorAll(".depth2"); // 클래스이므로 전체 선택

// header에 mouseenter을 depth1의 li에 mouseenter로 변경!!
depth1List.forEach(function (depth1) {
  // 마우스가 들어왔을 때 (mouseenter)
  depth1.addEventListener("mouseenter", function () {
    if (subBg) subBg.classList.add("active");

    const depth2 = depth1.querySelector('.depth2');
    // depth2는 여러 개이므로 반복문을 돌며 각각 클래스 추가
    depth2.classList.add("active");
    // depth2.style.background = "#ddd";
  });

  // 마우스가 나갔을 때 (mouseleave)
  depth1.addEventListener("mouseleave", function () {
    if (subBg) subBg.classList.remove("active");

    // depth2는 여러 개이므로 반복문을 돌며 각각 클래스 제거
    depth2List.forEach(function (depth2) {
      depth2.classList.remove("active");
      // depth2.style.background = "none";
    });
  });

  // shift+alt+f
});