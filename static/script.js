function getRandomInt(max) {
    return Math.floor((Math.random() * Math.floor(max)) + 1)
}

document.getElementById('cover').src = 'static/covers/' + getRandomInt(3) + '.jpg';