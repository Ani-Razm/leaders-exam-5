class Book {
    constructor(title, author, pages, img, id) {
        this.title = title;
        this.pages = pages;
        this.author = author;
        this.img = img;
        this.id = id;
    }
}

const book1 = new Book("To Kill a Mockingbird", "by Harper Lee", 200, "1885.jpg", "b1");
const book2 = new Book("Pride and Prejudice", "by Jane Austen", 250, "1885.jpg", "b2");
const book3 = new Book("To Kill a Mockingbird", "by Harper Lee", 210, "1885.jpg", "b3");
const book4 = new Book("To Kill a Mockingbird", "by Harper Lee", 100, "1885.jpg", "b4");
const book5 = new Book("To Kill a Mockingbird", "by Harper Lee", 190, "1885.jpg", "b5");
const book6 = new Book("To Kill a Mockingbird", "by Harper Lee", 340, "1885.jpg", "b6");

console.log(book1.img);
const booksLst = [book1, book2, book3, book4, book5, book6];

let booksDiv = document.querySelector(".books");
console.log(booksLst);

booksLst.forEach(book => {
    console.log(book.img)
    booksDiv.innerHTML += `
     <div class="book">
            <img src=${book.img} alt=${book.title}>
            <h2>${book.title}</h2>
            <p>author: <span>${book.author}</span></p>
            <p>pages: <span>${book.pages}</span></p>
            <button id=${book.id} >add to Library</button>
    </div>
    `;
})

function addtoLS(obj) {
    const library = JSON.parse(localStorage.getItem('library')) || [];
    library.push(obj);
    localStorage.setItem('library', JSON.stringify(library));
}

document.getElementById("b1").addEventListener('click', function () {
    console.log('ani');
    const library = JSON.parse(localStorage.getItem('library')) || [];
    library.push(book1);
    console.log(library);
    localStorage.setItem('library', JSON.stringify(library));
});

document.getElementById("b2").addEventListener('click', function () {
    console.log('ani');
    addtoLS(book2)
})

document.getElementById("b3").addEventListener('click', function () {
    console.log('ani')
    addtoLS(book3)
})

document.getElementById("b4").addEventListener('click', function () {
    console.log('ani')
    addtoLS(book4)
})

document.getElementById("b5").addEventListener('click', function () {
    console.log('ani')
    addtoLS(book5)
})

document.getElementById("b6").addEventListener('click', function () {
    console.log('ani')
    addtoLS(book6)
})