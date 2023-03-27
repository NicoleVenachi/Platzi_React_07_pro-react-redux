import React from 'react'

import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import { StarOutlined } from '@ant-design/icons'


function PokemonCard({ name, image }) {
  return (
    <Card
      title={name}
      cover={<img src={image} alt={name} />}
      extra={<StarOutlined />}
    >
      {/* Meta, para meter ell tipo en la parte de abajo */}
      <Meta description='Water and psychic' />
    </Card>
  )
}

export default PokemonCard;