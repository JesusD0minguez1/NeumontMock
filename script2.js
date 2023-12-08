document.addEventListener("DOMContentLoaded", function () {
    
    function switchPage(pageId) {
        window.location.href = pageId + '.html';
    }

    document.getElementById('admissionsLink').addEventListener('click', function() {
        switchPage('admissions');
    });

    document.getElementById('academicsLink').addEventListener('click', function() {
        switchPage('academics');
    });

    document.getElementById('studentlifeLink').addEventListener('click', function() {
        switchPage('studentlife');
    });
});
