window.onscroll = function () { myFunction() };

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
    var aboutPage = document.getElementById("about-page");

    // 'about-page'가 존재하면 네비게이션 바 숨기기
    if (aboutPage) {
        navbar.style.display = 'none';
    } else {
        // 기존의 sticky navbar 로직
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
    }
}