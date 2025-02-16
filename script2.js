const booksDiv = document.querySelector('.books')

const library = JSON.parse(localStorage.getItem('library')) || [];

function render() {
    library.forEach(book => {
        console.log(book.img)
        booksDiv.innerHTML += `
             <div class="book">
                    <img src=${book.img} alt=${book.title}>
                    <h2>${book.title}</h2>
                    <p>author: <span>${book.author}</span></p>
                    <p>pages: <span>${book.pages}</span></p>
                    <button id=${book.id} onclick=${deleteFromLC(book.id)}>delete</button>
            </div>`})
}

render();

function deleteFromLC(objId) {
    
    const library = JSON.parse(localStorage.getItem('library')) || [];
    const result = [];
    for(let book of library){
        if(book.id !== objId){
            result.push(book);
            console.log(book)
            render();
        }
    }
    console.log(result)
    localStorage.setItem('library', JSON.stringify(result));
    render()
}

