import { useState } from 'react';

const Home = () => {
    const [contacts, setContacts] = useState([
        {id: 1, name: 'Monkey D. Luffy', number: '081281212912'},
        {id: 2, name: 'Roronoa Zoro', number: '085208651294'},
        {id: 3, name: 'Nami', number: '081567823799'}
    ]);

    return ( 
        <div className="home">
            <h3>Contact List</h3>
            {contacts.map((contact) => (
                <div className="contact" key={contact.id}>
                    <div className="contact-info">
                        <p className="contact-name">{contact.name}</p>
                        <p>{contact.number}</p>
                    </div>
                    <div className="contact-actions">
                        <button className="btn btn-primary">Edit</button>
                        <button className="btn btn-danger">Delete</button>
                    </div>
                </div>
            ))}
        </div>
     );
}
 
export default Home;