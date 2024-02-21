import Home from '../pages/home/Home'
import './App.css'
import './reset.css'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import QrComponent from '../challanges/qr-Component/QrComponent'
import SocialLinksProfile from '../challanges/socialLinksProfile/SocialLinksProfile'
import AcordeonApp from '../challanges/menu-acordeon/AcordeonApp'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/qrComponent' element={<QrComponent />}/>
          <Route path='/socialLinksProfile' element={<SocialLinksProfile />} />
          <Route path='/acordeonMenu' element={<AcordeonApp />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App
