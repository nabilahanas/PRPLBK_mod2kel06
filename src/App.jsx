import { useState } from 'react'
import './App.css'
import ReactJSX from './components/ReactJSX'
import CompAndProps from './components/CompAndProps'
import Profile from './components/Card'
import Button from './elements/Button'
import TextInput from './elements/TextInput'

function App() {
  const [name, setName] = useState('');
  const [submittedName, setSubmittedName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Nama Anda: ', name);
    setSubmittedName(name);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    // <>
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
    <div className="App">
      <header className="App-header">
        <ReactJSX />
        <div className="Components">
          <Profile />
        </div>
        <form action="" onSubmit={handleSubmit}>
          <TextInput border="#61dafb" placeholder="Nama" value={name} onChange={handleNameChange} />
          <Button background="black" type='submit'>Kirim</Button>
        </form>
        {submittedName && (
          <div>
            <p>Hai, {submittedName}!</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
