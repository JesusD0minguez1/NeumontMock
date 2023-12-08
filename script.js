document.addEventListener("DOMContentLoaded", function () {
    
    const options = {
        strings: ["Welcome to <strong>Neumont!</strong> <br> Please Apply now", "Performed by Typed.js"],
        typeSpeed: 50,
        backSpeed: 25,
        startDelay: 500,
        backDelay: 1000,
        loop: true,
        showCursor: true,
        cursorChar: "|",
        smartBackspace: true,
        onComplete: (self) => {
            console.log("Animation completed!");
        },
    };
    
    const typed = new Typed("#typed-output", options);
    const typed2 = new Typed("#difference", {
        strings: ["This is a different animation with different options"],
        typeSpeed: 100,
        backDelay: 700,
    });
    const typed3 = new Typed("#visit", {
        strings: ["Check out our visit page"],
        typeSpeed: 75,
        fadeOutClass: 'typed-fade-out',
    });
    const typed4 = new Typed("#student", {
        strings: ["Apply as a student"],
        typeSpeed: 50
    });

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
