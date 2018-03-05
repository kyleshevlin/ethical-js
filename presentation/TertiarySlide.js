import React, { Component } from 'react'
import { Slide, Heading } from 'spectacle'

export default class TertiarySlide extends Component {
  componentWillEnter(cb) {
    this.slide.componentWillEnter(cb)
  }

  componentWillAppear(cb) {
    this.slide.componentWillAppear(cb)
  }

  componentWillLeave(cb) {
    this.slide.componentWillLeave(cb)
  }

  render() {
    const { children, size = 1, ...rest } = this.props

    return (
      <Slide
        ref={r => {
          this.slide = r
        }}
        bgColor="tertiary"
        {...rest}
      >
        <Heading size={size} textColor="secondary">
          {children}
        </Heading>
      </Slide>
    )
  }
}
