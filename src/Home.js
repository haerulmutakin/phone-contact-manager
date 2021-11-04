import { useState, useEffect } from 'react';
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

    const [nakama, setNakama] = useState('Robin');

    console.log('component is rendered');

    useEffect(() => {
        console.log('useEffect 1 is called');
    }, [contacts]);

    useEffect(() => {
        console.log('useEffect 2 is called');
    }, [nakama]);

    return ( 
        <div className="home">
           <ContactList contacts={contacts} title="All Contacts" onDelete={handleDelete} />
           <button onClick={() => setNakama('Franky')}>Update Nakama</button>
           <h5>{ nakama }</h5>
        </div>
     );
}
 
export default Home;