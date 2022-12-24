import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import { useTelegram } from './components/hooks/usetelegram';
import ProductList from './components/ProductList/ProductList';


function App() {

  const {onToggleButton, tg} = useTelegram()

  useEffect(() => {
    tg.ready();
  }, [])


  return (
    <>
      <Header/>
      <Routes>
        <Route index element={<ProductList/>}/>
        <Route path={'form'} element={<Form/>}/>
      </Routes>
    </>
  )
}

export default App;
