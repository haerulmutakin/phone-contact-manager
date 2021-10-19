import './App.css';

const Nakama = (props) => {
  console.log(props);
  return(
    <div className="nakama">
      <p>My name is {props.name}</p>
      <p>My power is {props.power}</p>
    </div>
  )
}

function App() {
  const greetings = 'Halo Nakama!';
  return (
    <div className="App">
      <h1>{greetings}</h1>
      <Nakama name="Monkey D. Luffy" power="Gatling" />
      <Nakama name="Roronoa Zoro" power="Santoryu" />
    </div>
  );
}

export default App;
