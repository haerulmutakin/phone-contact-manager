import { useState } from 'react';
import ContactList from './ContactList';

const Home = () => {
    const [contacts, setContacts] = useState([
        {id: 1, name: 'Monkey D. Luffy', number: '081281212912'},
        {id: 2, name: 'Roronoa Zoro', number: '085208651294'},
        {id: 3, name: 'Nami', number: '081567823799'}
    ]);


    const handleDelete = (id) => {
        const filteredContacts = contacts.filter((contact) => contact.id !== id  );
        setContacts(filteredContacts);
    }

    return ( 
        <div className="home">
           <ContactList contacts={contacts} title="All Contacts" onDelete={handleDelete} />
        </div>
     );
}
 
export default Home;