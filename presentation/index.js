import React, { Component } from 'react'
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from 'spectacle'
import theme from './theme'
import PrimarySlide from './PrimarySlide'
import TertiarySlide from './TertiarySlide'

require('normalize.css')

export default class Presentation extends Component {
  render() {
    return (
      <Deck
        transition={['fade']}
        transitionDuration={500}
        theme={theme}
      >
        <PrimarySlide>EthicalJS</PrimarySlide>

        <TertiarySlide size={2}>
          Why Our Next Frameworks Need to be Ethical Ones
        </TertiarySlide>

        <PrimarySlide size={2}>Who Am I?</PrimarySlide>

        <PrimarySlide size={3}>
          Kyle Shevlin<br />
          Senior Software Engineer at Formidable<br />
          @kyleshevlin
        </PrimarySlide>

        <PrimarySlide size={2}>
          The Imitation Game
        </PrimarySlide>

        <PrimarySlide style={{ fontFamily: 'Palatino' }}>
          ἠθικός
        </PrimarySlide>

        <TertiarySlide size={2}>
          The Difference Between Ethics and Morals
        </TertiarySlide>
      </Deck>
    )
  }
}
