import { Input, Space } from 'antd'
import React from 'react'

const { Search } = Input

const onSearch = (value: string) => console.log(value)

const SearchInput: React.FC = () => (
  <Space direction="vertical" style={{ float: 'right' }}>
    <Search
      placeholder="input search text"
      onSearch={onSearch}
      enterButton
      style={{ width: 300, marginTop: 15, marginRight: 15 }}
    />
  </Space>
)

export default SearchInput
