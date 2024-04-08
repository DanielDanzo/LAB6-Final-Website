(async function() {
    const { text } = await( await fetch(`/api/cars-get`)).json();
    //document.querySelector('#name').textContent = text;
    console.log(text);
}());