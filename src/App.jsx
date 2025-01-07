import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Pnf from "./pages/Pnf"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import UpdatePage from "./pages/UpdatePage"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";

function App() {

  return (
   <>
   <ToastContainer 
  position="top-right"
  autoClose={3000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  theme="dark"/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/projects' element={<Projects/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/updatepage' element={<UpdatePage/>}></Route>
        <Route path='*' element={<Pnf/>}></Route>
      </Routes>
   </>
  )
}

export default App
