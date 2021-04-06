import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => {
  const header = props.header
  const summary = props.summary
  return (
    <div className="tile__top">
      <div className="tile__header">
        <h2>{header}</h2>
      </div>
      <div className="tile__summary">
        <p>{summary}</p>
      </div>
    </div>
  )
}

Header.defaultProps = {
  header: 'Related Articles'
}

Header.propTypes = {
  summary: PropTypes.string
}

Header.propTypes = {
  header: PropTypes.string,
  title: PropTypes.string
}

export default Header
