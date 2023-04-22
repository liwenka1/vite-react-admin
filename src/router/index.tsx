import { Navigate } from 'react-router-dom'
import React, { lazy } from 'react'

const Home = lazy(() => import('@/pages/home'))
const Index = lazy(() => import('@/pages/index'))
const Album = lazy(() => import('@/pages/album'))
const Artist = lazy(() => import('@/pages/artist'))
const PlayList = lazy(() => import('@/pages/playList'))
const MvList = lazy(() => import('@/pages/mvList'))
const Rank = lazy(() => import('@/pages/rank'))

const Loading = (comp: JSX.Element) => (
  <React.Suspense fallback={<div>loading...</div>}>{comp}</React.Suspense>
)

const routers = [
  {
    path: '/',
    element: <Navigate to="/index" />
  },
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/index',
        element: Loading(<Index />)
      },
      {
        path: '/album',
        element: Loading(<Album />)
      },
      {
        path: '/artist',
        element: Loading(<Artist />)
      },
      {
        path: '/playList',
        element: Loading(<PlayList />)
      },
      {
        path: '/mvList',
        element: Loading(<MvList />)
      },
      {
        path: '/rank',
        element: Loading(<Rank />)
      }
    ]
  }
]

export default routers
