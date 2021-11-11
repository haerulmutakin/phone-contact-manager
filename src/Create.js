import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Api from './api/contact-api';

const Create = () => {
    const browserHistory = useHistory();
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [loading, setLoading] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        const contact = {name, number};

        setLoading(true);
        Api.post('/contacts', contact).then(() => {
            setLoading(false);
            browserHistory.goBack();
        });
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
                    <button type="button" className="btn btn-danger" onClick={() => browserHistory.goBack()}>Cancel</button>
                    <button type="submit" className="btn btn-primary">
                        {loading ? 'Submitting...' : 'Submit'}
                    </button>
                </div>
            </form>
        </div>
     );
}
 
export default Create;