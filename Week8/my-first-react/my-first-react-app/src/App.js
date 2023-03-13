import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import Bye from './Bye';

function App() {
  // const name = 'John'
  // const lastname = 'Due'
  const users = [
    {email:'john@gmail.com', username:'johnny'},
    {email:'keren@gmail.com', username:'karen'},
    {email:'deigo@gmail.com', username:'deigo'},
  ]
  return (
    <div>
      {users.map(item => {
        return (
          <h5> Hello, {item.email} {item.username} </h5>
        );
      })}
    </div>
  );
}

export default App;
