class Library{
    constructor(){
        this.books = [] //all books stores here
    }

    addBooks(b){
        this.books.push(...b)
    }

    listBooks(){
        this.books.forEach((elem)=>{
            console.log(elem.name)
        })
    }
}


class Book{
    constructor(name,isbn,price,author){
        this.name = name;
        this.price = price;
        this.isbn = isbn;
        this.author = author
        this.readStatus = false
    }

    info(){
        console.log(`${this.name} book is available on amazon at price ${this.price} and it was written by ${this.author} ${this.readStatus ? "🟢You have read this book" : "🔴You haven't read yet thius book"} `)
    } 

    changeStatus(){
        this.readStatus = !this.readStatus
    }

}
let b1 = new Book("ram teri ganaga maili", '#7abcd52', 250, "Raveena singh")
let b2 = new Book("ganaga", '#88bcd52', 50, "Chandra Shekharsingh")


let BennettLibrary = new Library()
BennettLibrary.addBooks([b1,b2])
