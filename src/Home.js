import { useState, useEffect } from 'react';
import ContactList from './ContactList';
import Api from './api/contact-api';

const Home = () => {
    const [contacts, setContacts] = useState(null);

    const handleDelete = (id) => {
        const filteredContacts = contacts.filter((contact) => contact.id !== id  );
        setContacts(filteredContacts);
    }

    useEffect(() => {
        Api.get('/contacts').then(res => {
            setContacts(res.data);
        })
    }, []);

    return ( 
        <div className="home">
           <ContactList contacts={contacts} title="All Contacts" onDelete={handleDelete} />
        </div>
     );
}
 
export default Home;