import { LucideScanText } from "lucide-react";

const BookLending = () => {
    return (
        <div className="page-container">
            <h2 style={{color: 'black'}}>Book ID</h2>
            <label>
                <input type="text" 
                style={{
                    backgroundColor:'#D3D3D3', 
                    color: 'black',
                    padding: '10px',
                    fontSize: '24px',
                    }}/>
            </label>
        </div>
    );
};

export default BookLending;