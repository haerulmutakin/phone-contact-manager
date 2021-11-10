import { useState } from 'react';

const Create = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        const contact = {name, number};
        console.log(contact);
    }

    return ( 
        <div className="contact-form">
            <h3>Contact Form</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="control-label">Contact name</label>
                    <input 
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label className="control-label">Contact number</label>
                    <input 
                        type="number"
                        className="form-control"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                    />
                </div>
                <div className="btn-group">
                    <button type="button" className="btn btn-danger">Cancel</button>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
     );
}
 
export default Create;