(async function() {
    const { text } = await( await fetch(`https://gentle-smoke-062483f0f.5.azurestaticapps.net/api/cars`)).json();
    //document.querySelector('#name').textContent = text;
    console.log(text);
}());