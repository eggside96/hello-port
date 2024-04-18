window.onscroll = function () { myFunction() };

var navbar = document.getElementById("navbar");
var mainPage = document.getElementById("main-page");
var aboutPage = document.getElementById("about-page");
var sticky = aboutPage.offsetTop;  // 'about-page'가 시작되는 위치를 sticky 포인트로 설정

function myFunction() {
    // main-page 영역을 벗어날 때만 네비게이션 바가 보이도록 조건을 추가
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
        navbar.style.display = "block";  // 스크롤이 about-page에 도달했을 때 네비게이션 바를 보이게 함
    } else {
        navbar.classList.remove("sticky");
        if (window.pageYOffset <= mainPage.offsetHeight) {
            navbar.style.display = "none";  // main-page 영역에서는 네비게이션 바를 숨김
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {
    navbar.style.display = "none";  // 초기 페이지 로딩 시 네비게이션 바 숨기기
});