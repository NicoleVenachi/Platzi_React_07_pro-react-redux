import React from 'react'

import { Button } from 'antd'
import { StarFilled, StarOutlined } from '@ant-design/icons'


function StarButton({ isFavorite, onClick }) {
  //recibe si es favorito y que hace si le dan click

  //si es favorito, renderizomestre llnea o vacioa
  const Icon = isFavorite ? StarFilled : StarOutlined

  return (
    <Button
      icon={<Icon />}
      onClick={onClick}
    >

    </Button >
  )
}

export default StarButton
