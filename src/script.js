(async function() {
    const { text } = await( await fetch(`/api/message`)).json();
    document.querySelector('#name').textContent = text;
}());