class Library{
    constructor(){
        this.book = [] //all books stores here
    }

    addBooks(book){
        this.book.push(book)
    }

    listBooks(){
        this.book.forEach((b)=>{
            console.log(b)
        })
    }
}

let BennettLibrary = new Library();
BennettLibrary.addBooks("Mera AAjevan Karavas")
BennettLibrary.listBooks()
console.log(BennettLibrary)