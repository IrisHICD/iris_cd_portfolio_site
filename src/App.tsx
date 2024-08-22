import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Cover } from './components/Cover/Cover'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Cover/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
