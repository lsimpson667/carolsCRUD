const mongodb = require('mongodb');

// Get mongoClient to act as a bridge between node and mongo
const mongoClient = mongodb.MongoClient;
const DB_URL = 'mongodb://localhost:27017';

mongoClient.connect(DB_URL, (err, db) => {
    if (err) {
        // In case there was an error
        console.log(err);
    }
    else {
        // Here, we know there was no error. Now we have a db connection
        console.log("Connected to DB");
        // Equivalent of syaing 'use bookstore' 
        const db_handler = db.db('bookstore');

        // Equivalent of saying 'db.createCollection('books')'
        db_handler.createCollection('books', (err, res) => {
            if (err) {
                console.log(err);
            }
            else {
                console.log("Your collection was created!");
            }

        });

        // To add multiple objects in a single go
        let my_books = [
            {
                book_id: 1,
                name: "Gr33n Eggz and H@m",
                author: "Dr. Seuss",
                price: 10,
                num_sold: 60000
            },
            {
                book_id: 2,
                name: "The Giving Tree",
                author: "Shel Silverstein",
                price: 15,
                num_sold: 25000
            }
        ];

        db_handler.collection('books').insertMany(my_books, (err, res) => {
            if (err) {
                console.log(err);
            }
            else {
                // console.log(res);
                console.log("Inserted Multiple Entries");
            }
        });




        // To add multiple objects in a single go
        let my_books2 = [
            {
                book_id: 3, name: "To Kill a Mockingbird", author: "Harper Lee", price: 17, num_sold: 10000
            },
            {
                book_id: 4, name: "The Fellowship of the Ring", author: "J.R.R. Tolkien", price: 21, num_sold: 90000
            },
            {
                book_id: 5, name: "A Storm of Swords", author: "George R.R. Martin", price: 23, num_sold: 30000
            },
            {
                book_id: 6, name: "A Dance with Dragons", author: "George R.R. Martin", price: 25, num_sold: 40000
            }
        ];

        db_handler.collection('books').insertMany(my_books2, (err, res) => {
            if (err) {
                console.log(err);
            }
            else {
                // console.log(res);
                console.log("Inserted Multiple Entries");
            }
        });
    }
});
