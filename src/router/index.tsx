// import About from '@/pages/about'
import Home from '@/pages/home'
import { Navigate } from 'react-router-dom'
import React, { lazy } from 'react'

const About = lazy(() => import('@/pages/about'))
//const Home = lazy(() => import('@/pages/home'))

const Loading = (comp: JSX.Element) => (
  <React.Suspense fallback={<div>loading...</div>}>{comp}</React.Suspense>
)

const routers = [
  {
    path: '/',
    element: <Navigate to="/Home" />
  },
  {
    path: '/Home',
    element: <Home />
  },
  {
    path: '/About',
    element: Loading(<About />)
  }
]

export default routers
