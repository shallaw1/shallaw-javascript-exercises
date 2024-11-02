const getTheTitles = function(book) {
    bookTitle = [];
    for (let i = 0; i < book.length; i++){
        bookTitle.push(book[i].title);
    }
    return bookTitle;
};

// Do not edit below this line
module.exports = getTheTitles;
