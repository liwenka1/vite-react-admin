import { useState } from 'react'
import CompOne from './components/CompOne'
import CompTwo from './components/CompTwo'
import { Button, Space } from 'antd'
import { StepBackwardOutlined } from '@ant-design/icons'

function App() {
  const [count, setCount] = useState(0)
  const handClick = () => {
    setCount((count) => {
      return count + 1
    })
  }

  return (
    <div className="App">
      top
      {count}
      <button onClick={handClick}>点我佳佳</button>
      <CompOne></CompOne>
      <CompTwo></CompTwo>
      <Space wrap>
        <Button type="primary">Primary Button</Button>
        <Button>Default Button</Button>
        <Button type="dashed">Dashed Button</Button>
        <Button type="text">Text Button</Button>
        <Button type="link">Link Button</Button>
        <StepBackwardOutlined />
      </Space>
    </div>
  )
}

export default App
