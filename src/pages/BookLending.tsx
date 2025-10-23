import { LucideScanText } from "lucide-react";

const BookLending = () => {
    return (
        <div className="page-container">
            
            <div className="form-row">
            <div className="form-column">
            <h2 style={{color: 'black', fontFamily: 'Consolas, monospace'}}>Book ID</h2>
            <label>
                <input type="text" className="input-text"/>
            </label>
            </div>

            <div className="form-column">
            <h2 style={{color: 'black', fontFamily: 'Consolas, monospace'}}>Loan Duration</h2>
            <label>
                <input type="text" className="input-text"/>
            </label>
            </div>
            </div>

            <div className="form-row">
            <div className="form-column">
            <h2 style={{color: 'black', fontFamily: 'Consolas, monospace'}}>Admin ID</h2>
            <label>
                <input type="text" className="input-text"/>
            </label>
            </div>

            <div className="form-column">
            <h2 style={{color: 'black', fontFamily: 'Consolas, monospace'}}>Loan Date</h2>
            <label>
                <input type="text" className="input-text"/>
            </label>
            </div>
            </div>

        </div>
    );
};

export default BookLending;