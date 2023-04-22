// 旧写法
import App from '../App'
import Home from '@/pages/home'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

const baseRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Navigate to="/home" />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
)

export default baseRouter
