const message = document.querySelector('#message')

const addMovie = (evt) => {
    evt.preventDefault();
    let inputField = document.querySelector('input');
    let movie = document.createElement('li');
    let movieTitle = document.createElement('span');
    movieTitle.textContent = inputField.value;
    movieTitle.addEventListener('click', crossOffMovie)
    movie.appendChild(movieTitle);
    let deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'X';
    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn);
    document.querySelector('ul').appendChild(movie);
    inputField.value = "";
}

document.querySelector('form').addEventListener('submit', addMovie);

const deleteMovie = (evt) => {
    evt.target.parentNode.remove()
    message.textContent = "MOVIE DELETED!"
}

const crossOffMovie = (evt) => {
    evt.target.classList.toggle('checked')
    
    if (evt.target.classList.contains('checked')) {
        message.textContent = "ALREADY WATCHED IT!"
    } else {
        message.textContent = "MOVIE RE-ADDED!"
    }
}




