import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import {Box} from '@mui/material'
import Login from './components/page/Login';

function App() {
  return (
    <Box sx={{ margin: "auto" }}>
      <Login /></Box>
  );
}

export default App;
