const booksDiv = document.querySelector('.books')

const library = JSON.parse(localStorage.getItem('library')) || [];
library.forEach(book => {
    console.log(book.img)
    booksDiv.innerHTML += `
         <div class="book">
                <img src=${book.img} alt=${book.title}>
                <h2>${book.title}</h2>
                <p>author: <span>${book.author}</span></p>
                <p>pages: <span>${book.pages}</span></p>
                <button id=${book.id} onclick=${deleteFromLC(book)}>delete</button>
        </div>`})

function deleteFromLC(obj) {
    const library = JSON.parse(localStorage.getItem('library')) || [];
    const result = [];
    for(let book of library){
        if(JSON.stringify(book) != JSON.stringify(obj)){
            result.push(book);
            console.log(book);
        }
    }
    console.log(result)
    localStorage.setItem('library', JSON.stringify(result));
}

