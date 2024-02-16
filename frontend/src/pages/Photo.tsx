import '../css/photo.css'
import { Link, Routes,Route } from "react-router-dom"
import Seeall from "./Seeall"
function Photo() {
  return (
    <div className='photosection'>
        <div className="ps">
            <h2>Photos</h2>
            <Link to="/seeall"><span>see all</span></Link>
        </div>
        <div className='sec'></div>

        <Routes>
          <Route path='/seeall' element={<Seeall />} />
        </Routes>
    </div>
  )
}

export default Photo