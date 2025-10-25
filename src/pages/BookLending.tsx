import {useState} from 'react';

const LOCAL_STORAGE_KEY = "library_books";

interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean;
}

const BookLending = () => {
    const [bookId, setBookId] = useState('');
    const [message, setMessage] = useState('');

    const handleLoan = ()  => {
        const storedBooks = localStorage.getItem(LOCAL_STORAGE_KEY);
        if(!storedBooks){
            setMessage('No books in library');
            return;
        }

        const books: Book[] = JSON.parse(storedBooks);
        const bookIndex = books.findIndex(book => book.id === Number(bookId));

        if(bookIndex === -1){
            setMessage('book ID not found');
            return;
        }

        if(!books[bookIndex].available){
            setMessage('book is already loaned out');
            return;
        }

        books[bookIndex].available = false;
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(books));

        setMessage(`Book "${books[bookIndex].title}" has been loaned successfully`);
        setBookId('');
    }

    return (
        <div className='page-container'>
        <div className='form-row'>
            <div className='form-column'>
            <h2 style={{color: 'black', fontFamily: 'Consolas, monospace'}}>Book ID</h2>
            <label>
                <input type="text" 
                className="input-text"
                value={bookId}
                onChange={(e) => setBookId(e.target.value)}
                />
            </label>
            </div>
        </div>
        {message && <p style={{color: 'black'}}>{message}</p>}
        <button 
        className="button-lending-position" 
        style={{marginLeft: 0}}
        onClick={handleLoan}
        >
            Confirm Loan</button>
        </div>
    );
};

export default BookLending;