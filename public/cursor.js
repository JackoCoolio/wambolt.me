import React from "react"

import styles from "../styles/cursor.module.scss"

class Cursor extends React.Component {
  render() {
    return (
      <span
        id={styles.cursor}
        style={{ borderLeftColor: this.props.color }}
      ></span>
    )
  }
}

export default Cursor
