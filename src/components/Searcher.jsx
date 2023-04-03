import { Input } from 'antd';

import React from 'react'

function Searcher() {
  return (
    <Input.Search
      placeholder='Search ...'
      style={{ marginBottom: 10 }}
    />
  )
}

export default Searcher