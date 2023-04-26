import React from 'react'
import type { PlayListDetail } from '@/models/playlist'

interface Props {
  topPlaylist: {
    playlists: PlayListDetail[]
    total: number
    more: boolean
    lasttime: number
  }
}

const main: React.FC<Props> = (props) => {
  console.log(props)

  return (
    <>
      {props.topPlaylist.playlists.map((item) => (
        <img style={{ width: '10%' }} src={item.coverImgUrl} key={item.id} />
      ))}
    </>
  )
}
export default main
