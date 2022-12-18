import { useEffect } from 'react';
import './App.css';

const tg = window.Telegram.WebApp;

function App() {

  useEffect(() => {
    tg.ready();
  }, [])

  const onClose = () => {
    tg.close()
  }

  return (
    <>
      <h1>hello telegram</h1>
      <button onClick={onClose}>close</button>
    </>
  )
}

export default App;
