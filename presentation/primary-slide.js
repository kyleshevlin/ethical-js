import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Slide, Heading } from 'spectacle'

export default class PrimarySlide extends Component {
  static propTypes = {
    children: PropTypes.any,
    heading: PropTypes.string,
    headingStyle: PropTypes.object,
    size: PropTypes.number,
    textColor: PropTypes.string
  }

  static defaultProps = {
    headingStyle: {},
    size: 1,
    textColor: 'secondary'
  }

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
    const {
      children,
      heading,
      headingStyle,
      size,
      textColor,
      ...rest
    } = this.props

    return (
      <Slide
        ref={r => {
          this.slide = r
        }}
        bgColor="primary"
        {...rest}
      >
        {heading && (
          <Heading size={size} textColor={textColor} style={headingStyle}>
            <div dangerouslySetInnerHTML={{ __html: heading }} />
          </Heading>
        )}
        {children}
      </Slide>
    )
  }
}
