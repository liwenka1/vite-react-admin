import { Card, Col, Row } from 'antd'
import React, { useEffect, useState } from 'react'
import { useBanner, useTopPlaylistHighquality } from '@/services/api'
import Swiper from './swiper'
import type { Banner } from '@/models/banner'
import Main from './main'
import type { PlayListDetail } from '@/models/playlist'

const index: React.FC = () => {
  const [bannnerList, setBannnerList] = useState([] as Banner[])
  const [topPlaylist, setPlayList] = useState({
    playlists: [] as PlayListDetail[]
  } as {
    playlists: PlayListDetail[]
    total: number
    more: boolean
    lasttime: number
  })

  useEffect(() => {
    const getBanner = async () => {
      const res = await useBanner()
      setBannnerList(res)
    }
    getBanner()

    const getTopPlaylist = async () => {
      const res = await useTopPlaylistHighquality()
      setPlayList(res)
    }
    getTopPlaylist()
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
          <Main topPlaylist={topPlaylist} />
        </Card>
      </Col>
    </Row>
  )
}

export default index
