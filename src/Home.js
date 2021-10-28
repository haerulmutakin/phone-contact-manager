import { useState } from 'react';

const Home = () => {
    // let like = 0;
    const [like, setLike] = useState(1);
    const [dislike, setDislike] = useState(0);
    const handleClick = () => {
        setLike(like + 1);
    }

    const handleDislike = () => {
        setDislike(dislike + 1);
    }

    return ( 
        <div className="home">
            <h3>Contact List</h3>
            <h5>Like: { like }, Dislike: { dislike }</h5>
            <button onClick={handleClick}>Like</button>
            <button onClick={handleDislike}>Dislike</button>
        </div>
     );
}
 
export default Home;