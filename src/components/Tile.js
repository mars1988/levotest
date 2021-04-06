import React from 'react'
import PropTypes from 'prop-types'

const Tile = (props) => {
  const card = props.item
  return (
    <div className={`tile__item ${card.backgroundColor}`} >
      <span className="tile__item__date">{card.date}</span>
      <h3 className="tile__item__title">{card.title}</h3>
      <div className="tile__item__content">
        {card.content}
      </div>
      <button className="tile__item__btn">
        Read more
      </button>
    </div>
  )
}

Tile.propTypes = {
  item: PropTypes.object,
  card: PropTypes.object
}

export default Tile
