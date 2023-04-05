import React from 'react'

import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import StarButton from './StarButton';
import { useDispatch } from 'react-redux';
import { setFavorite } from '../slices/data';



function PokemonCard({ name, image, types, id, favorite }) {

  //vamos a modificar estado, traigo dispatch
  const disptach = useDispatch();

  const typeString = types.map(item => item.type.name).join(', ')

  //funcoin para el click al logo
  const handleOnFavorite = () => {
    disptach(setFavorite({ pokemonId: id }))
  }

  return (
    <Card
      title={name}
      cover={<img src={image} alt={name} />}
      extra={<StarButton
        isFavorite={favorite}
        onClick={handleOnFavorite} />
      }
    >
      {/* Meta, para meter ell tipo en la parte de abajo */}
      <Meta description={typeString} />
    </Card>
  )
}

export default PokemonCard;