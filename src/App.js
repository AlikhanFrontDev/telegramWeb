import { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import { useTelegram } from './components/hooks/usetelegram';


function App() {

  const {onToggleButton, tg} = useTelegram()

  useEffect(() => {
    tg.ready();
  }, [])


  return (
    <>
      <Header/>
      <button onClick={onToggleButton}>Toggle</button>
    </>
  )
}

export default App;
