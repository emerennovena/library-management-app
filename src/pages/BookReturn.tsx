const BookReturn = () => {

    return (
        <div className='page-container'>
        <div className='form-row'>
            <div className='form-column'>
            <h2 style={{color: 'black', fontFamily: 'Consolas, monospace'}}>Book ID</h2>
            <label>
                <input type="text" className="input-text"/>
            </label>
            </div>
        </div>
        <button className="button-lending-position" style={{marginLeft: 0}}>Confirm Return</button>
        </div>
        
    )
}

export default BookReturn;