import './App.css';
import Header from './components/Header';
import Signature from './components/Signature';
import SignatureShirts from './components/SignatureShirts';
import VisualContainer from './components/VIsualContainer';
import { Route, Routes } from 'react-router-dom';
import ProdPage from "./components/ProdPage"
import AppProvider from './AppProvider';



function App() {
  return (
    <AppProvider>
      <Header/>
      <VisualContainer/>
      <Signature/>
      <SignatureShirts/>
      <ProdPage/>
    </AppProvider>
  );
}

export default App;
