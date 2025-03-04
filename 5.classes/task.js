class PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix () {
        this.state = this.state * 1.5;
    }
    set state (state) {
        switch (true) {
          case state < 0:
            this._state = 0;
            break;
          case  state > 100:
            this._state = 100;
            break;
          default:
            this._state = state;
        }
    }
    get state () {
        return this._state;
    }
};


class Magazine extends PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount)
        this.type = "magazine";
    }
};

class Book extends PrintEditionItem {
    constructor (author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount)
        this.author = author;
        this.type = "book";
    }
};

class NovelBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount)
        this.type = "novel";
    }
};

class FantasticBook extends Book {
    constructor (name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount, author)
        this.type = "fantastic";
    }
};

class DetectiveBook extends Book {
    constructor (name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount, author)
        this.type = "detective";
    }
};

class Library {
    constructor (name) {
        this.name = name;
        this.books = [];
    }

    addBook (book) {
        if(book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy (type, value) {
       let needBook = this.books.filter((el) => el[type] === value);
       return needBook.length === 0 ? null :  needBook[0];
    }

    giveBookByName (bookName) {
       let needBook = this.books.filter((el) => el.name === bookName)
       this.books = this.books.filter((el) => el.name !== bookName);
       return needBook.length === 0 ? null :  needBook[0];
    }
}

// ------------------Задание со звёздочкой-----------------------

class Student {
    constructor(name, gender, age) {
        this.name = name;
        this.marks = {};
    }

    addMark (marks, subject) {
        if(marks >= 2 && marks <= 5){
            if(!this.marks.hasOwnProperty(subject)){
                this.marks[subject] = [marks];
            }else {
                this.marks[subject].push(marks)
            }
        } else {
            return;
        }
    }

    getAverageBySubject (subject) {
        if (this.marks.hasOwnProperty(subject)) {
            return (this.marks[subject].reduce((acc, mark) => acc += mark, 0) / this.marks[subject].length)
        } else {
            return 0;
        }
    }

    getAverage () {
        let mapAverage = new Map;
        let keys = Object.keys(this.marks);
        if(keys.length === 0){
            return 0;
        }else {
            keys.forEach((el) => {
                mapAverage.set(el, this.getAverageBySubject(el))
            })
            let avaregeMark = 0;
            for (let mark of mapAverage.values()){
                avaregeMark += mark;
            }
            return avaregeMark / mapAverage.size;
        }
    }
}