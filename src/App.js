import './App.css';
import Login from './components/LoginForm'
import DefectTracker from './components/DefectTracker'
import AddDefect from './components/AddDefectForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

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

          <Route path='*' element={<Login />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
