import { Card, Col, Row, Carousel } from 'antd'
import React, { useEffect } from 'react'
import { useBanner } from '@/services/api'

const index: React.FC = () => {
  useEffect(() => {
    useBanner().then((res) => {
      console.log(res)
    })
  }, [])

  const contentStyle: React.CSSProperties = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79'
  }

  return (
    <Row gutter={16} style={{ margin: '10px' }}>
      <Col span={24}>
        <Card bordered={false}>
          <Carousel autoplay>
            <div>
              <h3 style={contentStyle}>1</h3>
            </div>
            <div>
              <h3 style={contentStyle}>2</h3>
            </div>
            <div>
              <h3 style={contentStyle}>3</h3>
            </div>
            <div>
              <h3 style={contentStyle}>4</h3>
            </div>
          </Carousel>
        </Card>
      </Col>
      <Col span={24} style={{ marginTop: '10px' }}>
        <Card title="热门推荐" bordered={false}>
          Card content
        </Card>
      </Col>
    </Row>
  )
}

export default index
