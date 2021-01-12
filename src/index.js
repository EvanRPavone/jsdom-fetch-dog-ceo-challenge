console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function() {
    fetchDogPics();
    fetchDogBreeds();
});

function fetchDogPics() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(res => res.json())
    .then(json => {
        for (const img of json.message) {
            let element = document.createElement('img');
            element.src = img;
            document.body.appendChild(element);
        }
    })
}

function fetchDogBreeds() {
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(res => res.json())
    .then(json => {
        breeds = Object.keys(json.message);
        renderDogBreeds(breeds);
        addBreedSelection();
    })
}

function renderDogBreeds(breeds) {
    const ul = document.getElementById('dog-breeds');
    for (const breed of breeds) {
        const li = document.createElement('li');
        li.innerText = breed;
        ul.appendChild(li);
        li.addEventListener('click', () => {
            event.target.style.color = 'purple';
        })
    }
}

function addBreedSelection() {
    const dropDown = document.getElementById('breed-dropdown')
    dropDown.addEventListener('change', updateBreedList)
}

function updateBreedList(event) {
    const ul = document.getElementById('dog-breeds');
    ul.innerHTML = '';
    renderDogBreeds(breeds.filter(breed => breed.startsWith(event.target.value)));
}
