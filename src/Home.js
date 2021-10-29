import { useState } from 'react';

const Home = () => {
    const [person, setPerson] = useState({
        firstname: 'Roronoa',
        lastname: 'Zoro',
        age: 20,
        address: {
            address1: 'Jogja',
            address2: 'Malang'
        }
    });

    const handleUpdateAge = () => {
        setPerson({
            ...person,
            age: 22
        });
    }

    const handleUpdateAddress = () => {
        setPerson({
            ...person,
            address: {
                ...person.address,
                address2: 'Surabaya'
            }
        });
    }

    return ( 
        <div className="home">
            <h3>Contact List</h3>
            <div>Firstname: {person.firstname}</div>
            <div>Lastname: {person.lastname}</div>
            <div>Age: {person.age}</div>
            <div>Address:</div>
            <ul>
                <li>{person.address.address1}</li>
                <li>{person.address.address2}</li>
            </ul>
            <button onClick={handleUpdateAge}>Update Age</button>
            <button onClick={handleUpdateAddress}>Update Address</button>
        </div>
     );
}
 
export default Home;