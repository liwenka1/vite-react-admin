import { Card, Col, Row } from 'antd'
import React, { useEffect, useState } from 'react'
import { useBanner } from '@/services/api'
import Swiper from './swiper'
import type { Banner } from '@/models/banner'

const index: React.FC = () => {
  const [bannnerList, setBannnerList] = useState([] as Banner[])

  useEffect(() => {
    const getBanner = async () => {
      const res = await useBanner()
      setBannnerList(res)
    }
    getBanner()
  }, [])

  return (
    <Row gutter={16} style={{ margin: '10px' }}>
      <Col span={24}>
        <Card bordered={false}>
          <Swiper bannnerList={bannnerList} />
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
