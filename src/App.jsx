import Home from '../pages/home/Home'
import './App.css'
import './reset.css'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import QrComponent from '../challanges/qr-Component/QrComponent'
import SocialLinksProfile from '../challanges/socialLinksProfile/SocialLinksProfile'
import AcordeonApp from '../challanges/menu-acordeon/AcordeonApp'
import RatingApp from '../challanges/rating-component/RatingApp'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/qrComponent' element={<QrComponent />}/>
          <Route path='/socialLinksProfile' element={<SocialLinksProfile />} />
          <Route path='/acordeonMenu' element={<AcordeonApp />} />
          <Route path='/ratingApp' element={<RatingApp />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App
