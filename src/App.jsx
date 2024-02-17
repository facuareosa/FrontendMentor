import Home from '../pages/home/Home'
import './reset.css'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import QrComponent from '../challanges/qr-Component/QrComponent'
import SocialLinksProfile from '../challanges/socialLinksProfile/SocialLinksProfile'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/qrComponent' element={<QrComponent />}/>
          <Route path='/socialLinksProfile' element={<SocialLinksProfile />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App
