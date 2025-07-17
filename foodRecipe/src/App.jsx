import {Route , Router, Routes} from 'react-router-dom'
import MainPage from '../../../Food_recipe/src/Component/MainPage'
import Mealinfo from '../../../Food_recipe/src/Component/Mealinfo'
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
