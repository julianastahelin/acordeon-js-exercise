const questionAndAnswer = document.querySelectorAll('.question-answer');

questionAndAnswer.forEach(function (item) {
    item.addEventListener('click', function () {
        if (item.classList.contains('active')) {
            item.classList.remove('active');
        } else {
            let openAnswer = document.querySelector('.active');
            if (openAnswer) {
                openAnswer.classList.remove('active');
            }
            item.classList.toggle('active');
        }
    }
    )
})
