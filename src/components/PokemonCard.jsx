import React from 'react'

import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import { StarOutlined } from '@ant-design/icons'


function PokemonCard({ name }) {
  return (
    <Card
      title={name}
      cover={<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png" alt="Psyduck" />}
      extra={<StarOutlined />}
    >
      {/* Meta, para meter ell tipo en la parte de abajo */}
      <Meta description='Water and psychic' />
    </Card>
  )
}

export default PokemonCard;