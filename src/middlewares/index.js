export const logger = (store) => (next) => (action) => {
  console.log(action)
  next(action)
}

export const featuring = (store) => (next) => (actionInfo) => {
  //agrego al payload el elemento extra
  const featured = [{name: 'quilava'}, ...actionInfo.action.payload]


  //ahora, actialuzo la acción, mantengo acción, cambio payload
  const updatedActionInfo = {
    //copio todo de la acción (hay mas cosas que la accion)
    ...actionInfo,

    //copio en accion, copio el action, pero le cambio el payload
    action: {
      ... actionInfo.action,
      payload: featured
    }

  }

  //next(updatedActionInfo) 
  next(actionInfo) 
}

