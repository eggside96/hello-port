document.addEventListener("DOMContentLoaded", function () {

    // 어두운 섹션 로드
    fetch('main-page.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('main-page').innerHTML = html;
        });

    // 내비바 로드
    fetch('nav-page.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('nav-page').innerHTML = html;
        });

    // 밝은 섹션 로드
    fetch('about-page.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('about-page').innerHTML = html;
        });

    // 프로젝트 섹션 로드
    fetch('project-page.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('project-page').innerHTML = html;
        });
});