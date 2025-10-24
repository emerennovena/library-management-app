import React, { useState, useEffect } from 'react';

// useState: store and update data
// useEffect: run code when component loads or updates.

interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean;
}

const LOCAL_STORAGE_KEY = "library_books";

const BookList: React.FC = () => {
    const [books, setBooks] = useState<Book[]>([]);
    const [newBook, setNewBook] = useState({ title: '', author: ''});
    const [showAddForm, setShowAddForm] = useState(false);
    
    useEffect(() => {
        const storedBooks = localStorage.getItem(LOCAL_STORAGE_KEY);
        if(storedBooks){
            setBooks(JSON.parse(storedBooks));
        }
    }, []);

    // save to local storage whenever books change
    useEffect(() => {
        if(books.length > 0){
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(books));
        }
    }, [books]);

    const addBook = () => {
        if (newBook.title != '' && newBook.author != ''){
            const book = {
                id: Date.now(),
                title: newBook.title,
                author: newBook.author,
                available: true
            };
            setBooks([...books, book]);
            setNewBook({title:'', author:''});
            setShowAddForm(false);
        }
    };

return (
    <div className="rest-screen"> 
        <table style={{color: 'black'}}>
        <thead>
            <tr>
                <th className='font-style'>Title</th>
                <th className='font-style'>Author</th>
                <th className='font-style'>Availability</th>
            </tr>
        </thead>
        <tbody>
            {books.map(book => (
                <tr key={book.id}>
                    <td className="font-style">{book.title}</td>
                    <td className="font-style">{book.author}</td>
                    <td className="font-style">{book.available ? 'Available' : 'Unavailable'}</td>
                </tr>
            ))}
        </tbody>
        </table>

        {showAddForm && (
            <div style={{ margin: '20px', padding: '15px', border: '1px solid black'}}>
            <h3>Add New Book</h3>
            <div>
                <label>Title:</label>
                <input
                    type="text"
                    value={newBook.title}
                    onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
                    placeholder='Enter Book Title'
                />
            </div>
            
            <div>
                <label>Author:</label>
                <input 
                type="text"
                value={newBook.author}
                onChange={(e) => setNewBook({ ...newBook, author: e.target.value})}
                placeholder='Enter Author Name'
                />
            </div>

            <button onClick={addBook}>Submit</button>
            <button onClick={() => setShowAddForm(false)}></button>

            </div>
        )}

        <div className="button-row">
        <button className="button-lending-position">Delete Book(s)</button>
        <button className="button-lending-position"
        onClick={() => setShowAddForm(true)}
        >Add Book</button>
        </div>
    </div>
);
}

export default BookList;
