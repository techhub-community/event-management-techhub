import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import "./global.css"

const HomePage = lazy(() => import('./pages/HomePage'))
const Register = lazy(() => import('./register/AuthenticationPage'))
const Login = lazy(() => import('./login/LoginPage'))


function App() {

  return (
    <div>
      
      <BrowserRouter>
        <NavBar  />
        <Routes>
            <Route path="/login" element={<Suspense fallback={"loading ..."}><Login /></Suspense>} />
            <Route path="/register" element={<Suspense fallback={"loading ..."}><Register /></Suspense>} />
            <Route path="/" element={<Suspense fallback={"loading ..."}><HomePage /></Suspense>} />

            {/* <Route path='/login' element={<Login />} />
            <Route path='/' element={<Register />} /> */}
        </Routes>
      </BrowserRouter>

    </div>
  )
}

function NavBar () {
  const navigate = useNavigate(); // --> Client Side Routing

  return <div>
      <div>
        <button onClick={() => {
          navigate("/register"); 
        }}>Register</button>

        <button onClick={() => {
          navigate('/login');
        }}>Login</button>
        
        {/* <button onClick={() => {
          navigate('/');
        }}>Home</button> */}

      </div>
  </div>
}


export default App;
