const Home = () => {
    const handleClick = (e) => {
        console.log('Halo', e);
    }

    const handleClicklagi = (name, e) => {
        console.log('Halo', name);
        console.log(e);
    }
    return ( 
        <div className="home">
            <h3>Contact List</h3>
            <button onClick={handleClick}>Halo</button>
            <button onClick={(e) => handleClicklagi('Luffy', e)}>Halo lagi</button>
        </div>
     );
}
 
export default Home;