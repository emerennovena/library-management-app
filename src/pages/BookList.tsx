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
    
    useEffect(() => {
        const storedBooks = localStorage.getItem(LOCAL_STORAGE_KEY);
        if(storedBooks){
            setBooks(JSON.parse(storedBooks));
        }
    }, []);

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
    </div>
);
}

export default BookList;
