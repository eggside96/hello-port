document.addEventListener("DOMContentLoaded", function () {
    // 페이지 섹션 별로 HTML 로드
    loadHtml('main-page', 'main-page.html');
    loadHtml('nav-page', 'nav-page.html');
    loadHtml('about-page', 'about-page.html');
    loadHtml('project-page', 'project-page.html');

    // HTML을 로드하고 DOM에 삽입하는 함수
    function loadHtml(elementId, url) {
        fetch(url)
            .then(response => response.text())
            .then(html => {
                document.getElementById(elementId).innerHTML = html;
            })
            .catch(error => console.error(`Error loading the ${elementId}:`, error));
    }
});