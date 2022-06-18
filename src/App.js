import './App.css';
import Login from './components/Login'
import DefectTracker from './components/DefectTracker'
import AddDefect from './components/AddDefect';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={
            <Login />
          } />

          <Route path="/login" element={
            <Login />
          } />

          <Route path="/viewDefects" element={
            <DefectTracker />
          } />

          <Route path="/addDefect" element={<AddDefect />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
