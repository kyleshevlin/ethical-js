import React, { Component } from 'react'
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Heading,
  Image,
  Link,
  ListItem,
  List,
  Quote,
  S,
  Slide,
  Table,
  TableItem,
  TableHeaderItem,
  TableRow,
  Text
} from 'spectacle'
import PrimarySlide from './primary-slide'
import TertiarySlide from './tertiary-slide'

class Ideas extends Component {
  render() {
    return (
      <div>
        <TertiarySlide size={3} heading="Propositional Logic">
          <Appear>
            <Table style={{ marginTop: '1.5em' }}>
              <TableRow style={{ fontStyle: 'bold' }}>
                <TableHeaderItem>Name</TableHeaderItem>
                <TableHeaderItem>Definition</TableHeaderItem>
              </TableRow>
              <TableRow style={{ textAlign: 'left' }}>
                <TableItem>
                  <em>Modus Ponens</em>
                </TableItem>
                <TableItem className="leftAligned">
                  If <em>p</em>, then <em>q</em>. <em>p</em>, therefore{' '}
                  <em>q</em>
                </TableItem>
              </TableRow>
              <TableRow style={{ textAlign: 'left' }}>
                <TableItem>
                  <em>Modus Tollens</em>
                </TableItem>
                <TableItem className="leftAligned">
                  If <em>not q</em>, then <em>not p</em>. <em>not q</em>,
                  therefore, <em>not p</em>
                </TableItem>
              </TableRow>
              <TableRow style={{ textAlign: 'left' }}>
                <TableItem>
                  <em>Hypothetical Syllogism</em>
                </TableItem>
                <TableItem className="leftAligned">
                  If <em>p</em>, then <em>q</em>, and if <em>q</em>, then{' '}
                  <em>r</em>. <em>p</em>, therefore <em>r</em>
                </TableItem>
              </TableRow>
            </Table>
          </Appear>
        </TertiarySlide>

        <TertiarySlide size={3} heading="Propositional Logic, pt. 2">
          <Text textColor="secondary" style={{ marginTop: '1.5em' }}>
            <div>
              <em>De Morgan's Laws</em>: <em>not</em> the conjuction of{' '}
              <em>p</em> and <em>q</em> is equivalent to the disjunction of{' '}
              <em>not p</em> and <em>not q</em> and vice versa.
            </div>
          </Text>
        </TertiarySlide>

        <PrimarySlide>
          <Text textColor="secondary" style={{ fontSize: '2em' }}>
            <div style={{ marginBottom: '.75em' }}>!(p && q) === !p || !q</div>
            <div>!(p || q) === !p && !q</div>
          </Text>
        </PrimarySlide>

        <TertiarySlide size={3} heading="Types of Ethical Programmers">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Appear>
              <div style={{ padding: '1em' }}>
                <h3>The Virtuous Programmer</h3>
                <div
                  style={{
                    width: 200,
                    height: 'auto',
                    borderRadius: '50%',
                    overflow: 'hidden'
                  }}
                >
                  <Image src="" />
                </div>
                Kent C. Dodds
              </div>
            </Appear>
            <Appear>
              <div style={{ padding: '1em' }}>
                <h3>
                  The <S type="strikethrough">Dogmatic</S> Dutiful Programmer
                </h3>
                Any random ass functional programmer
              </div>
            </Appear>
            <Appear>
              <div style={{ padding: '1em' }}>
                <h3>The Utilitarian Programmer</h3>
                <div
                  style={{
                    width: 200,
                    height: 'auto',
                    borderRadius: '50%',
                    overflow: 'hidden'
                  }}
                >
                  <Image src="" />
                </div>
                Ryan Florence
              </div>
            </Appear>
          </div>
        </TertiarySlide>

        <PrimarySlide heading="ἠθικός" style={{ fontFamily: 'Palatino' }} />
      </div>
    )
  }
}

export default Ideas
