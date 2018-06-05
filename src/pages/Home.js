import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import {
  Container, Row, Col, Media, Badge
} from 'reactstrap'

const streamList = [
  {
    name: 'EA',
    twitch: 'https://www.twitch.tv/ea',
    youtube: 'https://www.youtube.com/watch?v=qw16v3oGXso',
    time: '9 Июня 21:00',
    image: 'https://i.imgur.com/X62S2PT.png'
  },
  {
    name: 'Microsoft',
    twitch: 'https://www.twitch.tv/xbox',
    youtube: 'https://www.youtube.com/user/xbox/videos',
    time: '10 Июня 23:00',
    image: 'https://i.imgur.com/Udn002b.png'
  },
  {
    name: 'Bethesda',
    twitch: 'https://www.twitch.tv/bethesda',
    youtube: 'https://www.youtube.com/bethesda',
    time: '11 Июня 04:30',
    image: 'https://i.imgur.com/6BoiPER.png'
  },
  {
    name: 'Devolver Digital',
    twitch: 'https://www.twitch.tv/devolverdigital',
    youtube: 'https://www.youtube.com/user/DevolverDigital',
    time: '11 Июня 06:00',
    image: 'https://i.imgur.com/Ae10JBp.png'
  },
  {
    name: 'Square Enix',
    twitch: 'https://www.twitch.tv/squareenix',
    youtube: 'https://www.youtube.com/squareenixpresents',
    time: '11 Июня 20:00',
    image: 'https://i.imgur.com/nqROuDQ.jpg'
  },
  {
    name: 'Ubisoft',
    twitch: 'https://www.twitch.tv/ubisoft',
    youtube: 'https://www.youtube.com/channel/UCBMvc6jvuTxH6TNo9ThpYjg',
    time: '11 Июня 23:00',
    image: 'https://i.imgur.com/2YeWBmJ.png'
  },
  {
    name: 'PC Gaming Show',
    twitch: 'https://www.twitch.tv/pcgamer',
    youtube: 'https://www.youtube.com/pcgamer',
    time: '12 Июня 01:00',
    image: 'https://i.imgur.com/lGYxmFb.png'
  },
  {
    name: 'Sony',
    twitch: 'https://www.twitch.tv/playstation',
    youtube: 'https://www.youtube.com/user/PlayStation',
    time: '12 Июня 04:00',
    image: 'https://i.imgur.com/QBmNYes.png'
  },
  {
    name: 'Nintendo',
    twitch: 'https://www.twitch.tv/nintendo',
    youtube: 'https://www.twitch.tv/nintendo',
    time: '12 Июня 17:00',
    image: 'https://i.imgur.com/RmAYpZh.png'
  },
]

class Home extends Component {
  constructor () {
    super()
  }

  render () {
    return (
      <Container>
        <div style={{textAlign: 'center'}}>
          <img width='200' height='200' src={'https://i.imgur.com/ruTRMib.png'}/>
          <h5><Badge color={'danger'}>E3 fucking sucks</Badge></h5>
          <iframe width="0" height="0"
                  src="https://www.youtube.com/embed/odGExIQTxvg?rel=0&amp;controls=0&amp;showinfo=0&autoplay=1&volume=50"
                  frameBorder="0"
                  allow="autoplay; encrypted-media" allowFullScreen></iframe>
        </div>
        {streamList.map(item => (
          <Wrap>
            <Media>
              <Media left href="#">
                <Media object src={item.image} alt="Generic placeholder image"/>
              </Media>
              <Media className={'show-body'} body>
                <Media heading className={'show-name'}>
                  {item.name}
                </Media>
                <GridRow>
                  <FieldName>Time</FieldName>
                  <div>{item.time}</div>
                </GridRow>
                <GridRow>
                  <FieldName>Twitch</FieldName>
                  <a href={item.twitch} target={'_blank'}>Link</a>
                </GridRow>
                <GridRow>
                  <FieldName>Youtube</FieldName>
                  <a href={item.youtube} target={'_blank'}>Link</a>
                </GridRow>
              </Media>
            </Media>
          </Wrap>
        ))}

      </Container>
    )
  }
}

const GridRow = styled.div`
  display: grid;
  grid: 1fr / 150px 2fr ;
  margin: 15px 0px;
  @media only screen and (max-width: 700px) {
     display: flex;
     flex-direction: column;
  }
`

const FieldName = styled.div`
  font-weight: bold;
`

const Wrap = styled.div`
  margin: 20px 0px;
  background-color: white;
  padding: 20px;
  border: 1px solid #252525;
  & .show-name {
    padding-top: 20px;
  }
  & .show-body {
    padding-left: 20px
  }
  & img {
    width: 100px;
    height: 100px;
  }
`

export default Home
