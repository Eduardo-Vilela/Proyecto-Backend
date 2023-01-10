import React,{Suspense} from 'react'
import { Navigate, Route, Routes,BrowserRouter } from "react-router-dom";
const Login  = React.lazy(() => import('../components/Login'));
const Home  = React.lazy(() => import('../components/Home'));




export default function Rutas() {
  return (
    <Suspense fallback={<div></div>}>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Login" element={<Login/>} />
        </Routes>
    </BrowserRouter>
</Suspense>
  )
}
