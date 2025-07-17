import {Route , Router, Routes} from 'react-router-dom'
import MainPage from './components/MainPage.jsx'
import Mealinfo from './components/Mealinfo.jsx'
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/:mealid' element={<Mealinfo/>}/>
      </Routes>
    </>
  )
}

export default App
