import logo from './logo.svg';
import './App.css';
import 'tachyons';
import Hello from './Hello';
import Bye from './Bye';

function App() {
  const name = 'John'
  const lastname = 'Due'
  //props
  const users = [
    {email:'john@gmail.com', username:'johnny'},
    {email:'keren@gmail.com', username:'karen'},
    {email:'deigo@gmail.com', username:'deigo'},
  ]
  return (
    <div className='App'>
      <header className='App-header'>
        {
        users.map((item,i) => {
          return(
            <Hello a={item} key={i} />
          )
        })
        }
      </header>
    </div>
  );
}

export default App;
