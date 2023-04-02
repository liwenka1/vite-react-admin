// import { useState } from 'react'
// import CompOne from './components/CompOne'
// import CompTwo from './components/CompTwo'
// import { Button, Space } from 'antd'
// import { StepBackwardOutlined } from '@ant-design/icons'
import { useRoutes, Link } from 'react-router-dom'
import routers from './router'

function App() {
  // const [count, setCount] = useState(0)
  // const handClick = () => {
  //   setCount((count) => {
  //     return count + 1
  //   })
  // }
  const outlet = useRoutes(routers)
  return (
    <div className="App">
      <Link to="/Home">h</Link>
      <p>||||</p>
      <Link to="/About">a</Link>
      {/* <Outlet></Outlet> */}
      {outlet}
    </div>
  )
}

export default App
