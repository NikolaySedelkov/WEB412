const form = document.getElementById('form_calc-post');

form.addEventListener('submit', e => {
    e.preventDefault();

    fetch('/calc-post', {
        method: 'POST',
        body: new FormData(
            e.target
        )
    }).then(res => res.text()).then(alert)
})