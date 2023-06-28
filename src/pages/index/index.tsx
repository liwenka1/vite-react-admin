import { Card, Col, Row } from 'antd'
import React from 'react'
import { useBanner, useTopPlaylistHighquality } from '@/services/api'
import BannerList from './bannerList'
import Main from './main'
import { useQueries } from 'react-query'

const Index: React.FC = () => {
  const [bannerQuery, playListQuery] = useQueries([
    { queryKey: ['banner'], queryFn: () => useBanner() },
    { queryKey: ['playList'], queryFn: () => useTopPlaylistHighquality() }
  ])
  let content = null
  if (bannerQuery.isSuccess && playListQuery.isSuccess) {
    content = (
      <Row gutter={16} style={{ margin: '10px' }}>
        <Col span={24}>
          <Card bordered={false}>
            <BannerList bannnerList={bannerQuery.data} />
          </Card>
        </Col>
        <Col span={24} style={{ marginTop: '10px' }}>
          <Card title="热门推荐" bordered={false}>
            <Main topPlaylist={playListQuery.data} />
          </Card>
        </Col>
      </Row>
    )
  }

  return <>{content}</>
}

export default Index
