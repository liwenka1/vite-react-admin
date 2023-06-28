import React from 'react'
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined
} from '@ant-design/icons'
import { Avatar, Card } from 'antd'
import type { PlayListDetail } from '@/models/playlist'
import './index.scss'

const { Meta } = Card

interface Props {
  topPlaylist: {
    playlists: PlayListDetail[]
    total: number
    more: boolean
    lasttime: number
  }
}

const PlayList: React.FC<Props> = (props) => (
  <>
    {props.topPlaylist.playlists.map((item) => (
      <Card
        className="card"
        cover={<img alt="example" src={item.coverImgUrl} />}
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />
        ]}
        key={item.id}
      >
        <Meta
          avatar={<Avatar src={item.creator.avatarUrl} />}
          title={item.name}
          description={
            <span className="card-description">{item.description}</span>
          }
        />
      </Card>
    ))}
  </>
)

export default PlayList
