import React from 'react'
import type { PlayListDetail } from '@/models/playlist'
import PlayList from '@/components/playList'

interface Props {
  topPlaylist: {
    playlists: PlayListDetail[]
    total: number
    more: boolean
    lasttime: number
  }
}

const main: React.FC<Props> = (props) => {
  return (
    <>
      <PlayList topPlaylist={props.topPlaylist} />
    </>
  )
}
export default main
