import styles from "../styles/container.module.scss"

import React from "react"

export class Container extends React.Component {
  render() {
    return (
      <div id={styles.main}>
        {this.props.children}
        <div id={styles.footer}></div>
      </div>
    )
  }
}

export class Section extends React.Component {
  render() {
    return (
      <div className={styles.section} id={this.props.id}>
        <h1 className={styles.sectionTitle}>{this.props.title}</h1>
        {this.props.children}
      </div>
    )
  }
}
