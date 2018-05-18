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
import theme from './theme'
import PrimarySlide from './primary-slide'
import TertiarySlide from './tertiary-slide'

import './index.css'
require('normalize.css')

const images = {
  annaAndMe: require('../assets/anna-and-me.jpg'),
  imitationGame: require('../assets/imitation-game.jpg'),
  occMeme: require('../assets/occ-meme-box.jpg'),
  turingMachine: require('../assets/turing-machine.jpg'),
  tweet: require('../assets/tweet.png')
}

const formatSrc = str => str.replace('/', '')

export default class Presentation extends Component {
  render() {
    return (
      <Deck transition={['fade']} transitionDuration={500} theme={theme}>
        {/* Opening comments about how you approached coming up with material for this talk */}
        <PrimarySlide />

        <PrimarySlide>
          <Image height={600} src={formatSrc(images.imitationGame)} />
        </PrimarySlide>

        <PrimarySlide heading="<div style=&quot;color: #f2545b; margin-bottom: .5em; text-transform: uppercase;&quot;>Spoiler Alert:</div>We Beat the F*&^king Nazis">
          <Text
            textColor="tertiary"
            style={{ fontSize: '.85em', marginTop: '2em' }}
          >
            I can not legitimately understand why we have to do this again,<br />
            but I digress...
          </Text>
        </PrimarySlide>

        <TertiarySlide>
          <Image src={formatSrc(images.turingMachine)} />
          <Text textColor="quarternary" style={{ marginTop: '.5em' }}>
            That's a bombe. With an "e".
          </Text>
        </TertiarySlide>

        {/* Discuss the pivotal moment of the movie, wrapping it up as potentially the very first ethical decisions made from the effects and ramifications of computers and computer science */}
        <PrimarySlide />

        <PrimarySlide heading="EthicalJS" />

        <TertiarySlide
          size={2}
          heading="Why Our Next Frameworks Need to be Ethical Ones*"
        >
          <Text textColor="quarternary" style={{ marginTop: '2em' }}>
            *Because the last thing we probably need is another JavaScript
            framework, amirite?
          </Text>
        </TertiarySlide>

        <PrimarySlide size={2} heading="Who Am I?" />

        <PrimarySlide>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div>
              <Image width={600} src={formatSrc(images.annaAndMe)} />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '1em'
              }}
            >
              <div style={{ fontSize: '2em', marginBottom: '.75em' }}>
                Kyle Shevlin
              </div>
              <div style={{ marginBottom: '1.5em' }}>
                Senior Software Engineer at{' '}
                <Link href="https://formidable.com" textColor="tertiary">
                  Formidable
                </Link>
              </div>
              <div style={{ marginBottom: '1.5em' }}>
                Host of the{' '}
                <Link
                  href="https://twitter.com/kyleshevlin"
                  textColor="tertiary"
                >
                  Second Career Devs
                </Link>{' '}
                podcast
              </div>
              <div>
                <Link
                  href="https://twitter.com/kyleshevlin"
                  textColor="tertiary"
                >
                  @kyleshevlin
                </Link>
              </div>
            </div>
          </div>
        </PrimarySlide>

        <TertiarySlide
          heading="Why Are You Qualified to Talk to Us About Philosophy and Ethics, Kyle?"
          headingStyle={{ lineHeight: 1.2 }}
          size={3}
        />

        <PrimarySlide>
          <Text textColor="secondary" style={{ marginBottom: '1.5em' }}>
            BA in Philosophy<br /> from Lenoir-Rhyne University
          </Text>
          <Text textColor="secondary" style={{ marginBottom: '1.5em' }}>
            Topic of my Senior Honor's Thesis was Postmodernity & Ethics
          </Text>
          <Text textColor="secondary">
            MA in Theology from<br /> Fuller Theological Seminary
          </Text>
        </PrimarySlide>

        <TertiarySlide
          size={2}
          heading="Oh! And I work in software, like most of you!"
        >
          <Text textColor="secondary" style={{ marginTop: '1.5em' }}>
            It might behoove us to have an interest in how ethics and our
            industry intersect
          </Text>
        </TertiarySlide>

        <PrimarySlide>
          <div
            style={{
              color: '#f2545b',
              fontSize: '6em',
              marginBottom: '.25em'
            }}
          >
            IANAAP
          </div>
          <div>( I am not an academic philosopher )</div>
        </PrimarySlide>

        <PrimarySlide>
          <Image height={600} src={formatSrc(images.tweet)} />
        </PrimarySlide>

        <TertiarySlide heading="What is Ethics?">
          <Text textColor="secondary" style={{ marginTop: '1.5em' }}>
            <span style={{ fontFamily: 'Palatino' }}>ἠθικός</span>
            {' - '}
            moral, showing moral character
          </Text>
          <Text textColor="secondary" style={{ marginTop: '1.5em' }}>
            Primarily concerned with figuring out<br />{' '}
            <em>how best to live</em>
          </Text>
        </TertiarySlide>

        <PrimarySlide>
          <BlockQuote style={{ fontSize: '2em', lineHeight: 1.5 }}>
            The most important thing is not life, but the good life
            <Cite style={{ textAlign: 'right' }}>Socrates</Cite>
          </BlockQuote>
        </PrimarySlide>

        <TertiarySlide
          heading="But why do we, as software engineers, need ethics?"
          size={2}
        />

        <PrimarySlide
          heading="Because we done <span style=&quot;color: #f2545b; text-transform: uppercase;&quot;>f*&%ed</span> up, time and time again, yo!"
          size={2}
        />

        <TertiarySlide heading="Volkswagen Emissions Scandal" size={2} />
        <PrimarySlide heading="Uber Greyball Software" size={2} />
        <TertiarySlide heading="Facebook Group Privacy Mistake" size={2} />
        <PrimarySlide heading="Hawaii Missile Crisis" size={2} />
        <TertiarySlide heading="Facebook Suggested Friends Dilemma" size={2} />

        <PrimarySlide
          heading="How do other engineering disciplines avoid similar catastrophes?"
          size={3}
        />

        <TertiarySlide>
          <List>
            <Appear>
              <ListItem style={{ marginBottom: '1em' }}>
                1912-1914 - First codes of engineering ethics come into
                existence
              </ListItem>
            </Appear>
            <Appear>
              <ListItem style={{ marginBottom: '1em' }}>
                1946 - National Society of Professional Engineers adopt their
                first formal Canon of Ethics
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                2000 - ABET formally requires the study of engineering ethics
                for all accredited programs
              </ListItem>
            </Appear>
          </List>
        </TertiarySlide>

        <PrimarySlide heading="The Paramouncy Principle" size={2} />

        <PrimarySlide>
          <BlockQuote
            style={{ fontStyle: 'italic', lineHeight: 1.5, marginTop: '1.5em' }}
          >
            Engineers, in the fulfillment of their professional duties, shall
            hold paramount the safety, health and welfare of the public.
            <Cite style={{ textAlign: 'right' }}>
              National Society of Professional Engineers - Code of Ethics for
              Engineers
            </Cite>
          </BlockQuote>
        </PrimarySlide>

        <TertiarySlide
          heading="Alright, Kyle. I'm convinced, but I don't know any ethical systems."
          size={3}
        />

        <PrimarySlide textColor="tertiary" heading="Ethics 101" />

        <PrimarySlide size={2} heading="Virtue Ethics">
          <List>
            <Appear>
              <ListItem style={{ marginBottom: '.5em' }}>
                Focuses on discovering the qualities of morally excellent
                people.
              </ListItem>
            </Appear>
            <Appear>
              <ListItem style={{ marginBottom: '.5em' }}>
                Often establishes a theoretical moral exemplar
              </ListItem>
            </Appear>
            <Appear>
              <ListItem style={{ marginBottom: '.5em' }}>
                Philosophers in this tradition: Confucius, Aristotle, St.
                Augustine, Hume, Nietzche
              </ListItem>
            </Appear>
          </List>
        </PrimarySlide>

        <TertiarySlide size={2} heading="Utilitarian Ethics">
          <List>
            <Appear>
              <ListItem style={{ marginBottom: '.5em' }}>
                Focuses on maximizing <em>utility</em>, that is maximum
                happiness from the consequences of one's actions.
              </ListItem>
            </Appear>
            <Appear>
              <ListItem style={{ marginBottom: '.5em' }}>
                Hedonic Calculus
              </ListItem>
            </Appear>
            <Appear>
              <ListItem style={{ marginBottom: '.5em' }}>
                Quantitative Pleasures vs. Qualitative Pleasures
              </ListItem>
            </Appear>
            <Appear>
              <ListItem style={{ marginBottom: '.5em' }}>
                Philosophers in this tradition: Bentham, Mill
              </ListItem>
            </Appear>
          </List>
        </TertiarySlide>

        <PrimarySlide size={2} heading="Deontological Ethics">
          <List>
            <Appear>
              <ListItem style={{ marginBottom: '.5em' }}>
                Principled, axiomatic, duty-based ethics
              </ListItem>
            </Appear>
            <Appear>
              <ListItem style={{ marginBottom: '.5em' }}>
                Examples: Ten Commandments, Bill of Rights
              </ListItem>
            </Appear>
            <Appear>
              <ListItem style={{ marginBottom: '.5em' }}>
                Categorial Imperative
              </ListItem>
            </Appear>
            <Appear>
              <ListItem style={{ marginBottom: '.5em' }}>
                Philosophers in this tradition: Kant
              </ListItem>
            </Appear>
          </List>
        </PrimarySlide>

        <PrimarySlide>
          <Image src={formatSrc(images.occMeme)} />
        </PrimarySlide>

        <TertiarySlide
          heading="Sweet. But what do we do with all this theory?"
          size={3}
        />

        <PrimarySlide heading="Apply it, of course!" size={3}>
          <List>
            <Appear>
              <ListItem style={{ marginBottom: '.5em' }}>
                What are the characteristics of a virtuous programmer?
              </ListItem>
            </Appear>
            <Appear>
              <ListItem style={{ marginBottom: '.5em' }}>
                Are we increasing happiness with our decisions?
              </ListItem>
            </Appear>
            <Appear>
              <ListItem style={{ marginBottom: '.5em' }}>
                Are there some principles and guidelines we could establish as
                an industry?
              </ListItem>
            </Appear>
          </List>
        </PrimarySlide>

        <TertiarySlide
          heading="Software Engineering Code of Ethics and Professional Practices"
          size={3}
        >
          <Text textColor="secondary" style={{ marginTop: '1.5em' }}>
            And it's been around since <em>1999</em>. Whaa?!?!
          </Text>
        </TertiarySlide>

        <PrimarySlide heading="8 Principles of SE Ethics" size={3}>
          <List>
            <ListItem>Public</ListItem>
            <ListItem>Client & Employer</ListItem>
            <ListItem>Product</ListItem>
            <ListItem>Judgment</ListItem>
            <ListItem>Management</ListItem>
            <ListItem>Profession</ListItem>
            <ListItem>Colleagues</ListItem>
            <ListItem>Self</ListItem>
          </List>
        </PrimarySlide>

        {/* Wrap shit up */}
        <PrimarySlide />

        {/* Resources */}

        <PrimarySlide size="3" heading="Resources & Links">
          <List>
            <ListItem style={{ marginBottom: '0.25em' }}>
              <Link
                textColor="tertiary"
                href="https://www.scu.edu/media/ethics-center/technology-ethics/Students.pdf"
              >
                An Introduction to Software Engineering Ethics - Shannon Vallor
                PhD, Santa Clara University
              </Link>
            </ListItem>
            <ListItem style={{ marginBottom: '0.25em' }}>
              <Link
                textColor="tertiary"
                href="https://www.computer.org/web/education/code-of-ethics"
              >
                IEEE Computer Society's Code of Ethics
              </Link>
            </ListItem>
            <ListItem style={{ marginBottom: '0.25em' }}>
              <Link
                textColor="tertiary"
                href="https://www.nytimes.com/2017/08/25/business/volkswagen-engineer-prison-diesel-cheating.html"
              >
                Volkswagen Scandal
              </Link>
            </ListItem>
            <ListItem style={{ marginBottom: '0.25em' }}>
              <Link
                textColor="tertiary"
                href="https://www.inverse.com/article/28646-uber-greyball-public-officials"
              >
                Uber "Greyball" Scandal
              </Link>
            </ListItem>
          </List>
        </PrimarySlide>

        <PrimarySlide size="3" heading="Resources & Links, pt. II">
          <List>
            <ListItem style={{ marginBottom: '0.25em' }}>
              <Link textColor="tertiary" href="https://vimeo.com/68470326">
                Mike Montiero - How Designers Destroyed the World
              </Link>
            </ListItem>
            <ListItem style={{ marginBottom: '0.25em' }}>
              <Link
                textColor="tertiary"
                href="https://dev.to/ben/the-hawaii-missile-alert-was-the-software-developers-fault-2bid"
              >
                Hawaii Missile Alert
              </Link>
            </ListItem>
            <ListItem style={{ marginBottom: '0.25em' }}>
              <Link
                textColor="tertiary"
                href="https://www.telegraph.co.uk/news/2018/05/05/facebook-accused-introducing-extremists-one-another-suggested/"
              >
                Facebook Suggested Friends
              </Link>
            </ListItem>
          </List>
        </PrimarySlide>
      </Deck>
    )
  }
}
