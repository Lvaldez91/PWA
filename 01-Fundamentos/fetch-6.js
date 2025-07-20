// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
fetch('not-found.html')
    .then(resp => resp.text())
    .then(html => {
        console.log(html)
    });