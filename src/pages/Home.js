import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import { Container, Row, Col, Media, Badge } from "reactstrap";

const streamList = [
  {
    name: "EA",
    twitch: "https://www.twitch.tv/ea",
    youtube: "https://www.youtube.com/watch?v=qw16v3oGXso",
    time: "8 Июня 19:30",
    image: "https://i.imgur.com/X62S2PT.png"
  },
  {
    name: "Microsoft",
    twitch: "https://www.twitch.tv/xbox",
    youtube: "https://www.youtube.com/user/xbox/videos",
    time: "9 Июня 23:00",
    image: "https://i.imgur.com/Udn002b.png"
  },
  {
    name: "Bethesda",
    twitch: "https://www.twitch.tv/bethesda",
    youtube: "https://www.youtube.com/bethesda",
    time: "10 Июня 03:30",
    image: "https://i.imgur.com/6BoiPER.png"
  },
  {
    name: "Devolver Digital",
    twitch: "https://www.twitch.tv/devolverdigital",
    youtube: "https://www.youtube.com/user/DevolverDigital",
    time: "10 Июня 05:00",
    image: "https://i.imgur.com/Ae10JBp.png"
  },
  {
    name: "PC Gaming Show",
    twitch: "https://www.twitch.tv/pcgamer",
    youtube: "https://www.youtube.com/pcgamer",
    time: "10 Июня 22:00",
    image: "https://i.imgur.com/lGYxmFb.png"
  },
  {
    name: "Square Enix",
    twitch: "https://www.twitch.tv/squareenix",
    youtube: "https://www.youtube.com/squareenixpresents",
    time: "11 Июня 04:00",
    image: "https://i.imgur.com/nqROuDQ.jpg"
  },
  {
    name: "Nintendo",
    twitch: "https://www.twitch.tv/nintendo",
    youtube: "https://www.twitch.tv/nintendo",
    time: "11 Июня 19:00",
    image: "https://i.imgur.com/RmAYpZh.png"
  },
  {
    name: "Ubisoft",
    twitch: "https://www.twitch.tv/ubisoft",
    youtube: "https://www.youtube.com/channel/UCBMvc6jvuTxH6TNo9ThpYjg",
    time: "11 Июня 23:00",
    image: "https://i.imgur.com/2YeWBmJ.png"
  },
  {
    name: "Сони пидорасы",
    image: "https://up.vidyagam.es/images/logo_smol.png",
    pizda: true
  }
];

class Home extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Container>
        <div style={{ textAlign: "center" }}>
          <img
            width="200"
            height="200"
            src={"https://i.imgur.com/ruTRMib.png"}
          />
          <h5>
            <Badge color={"danger"}>E3 still fucking sucks</Badge>
          </h5>
          <audio autoPlay={true}>
            <source
              src="https://drop3.dropmefiles.com/upl/B/B4COc80wgiHs/BmbnH_o_1dcplae6215091bd411aj1t4214lma"
              type="audio/mpeg"
            />
          </audio>
        </div>
        {streamList.map(item => (
          <Wrap>
            <Media>
              <Media left href="#">
                <Media
                  object
                  src={item.image}
                  alt="Generic placeholder image"
                />
              </Media>
              <Media className={"show-body"} body>
                <Media heading className={"show-name"}>
                  {item.name}
                </Media>
                <GridRow>
                  <FieldName>Time</FieldName>
                  <div>{item.time}</div>
                </GridRow>
                {item.twitch && (
                  <GridRow>
                    <FieldName>Twitch</FieldName>
                    <a href={item.twitch} target={"_blank"}>
                      Link
                    </a>
                  </GridRow>
                )}
                {item.youtube && (
                  <GridRow>
                    <FieldName>Youtube</FieldName>
                    <a href={item.youtube} target={"_blank"}>
                      Link
                    </a>
                  </GridRow>
                )}
                {item.pizda && (
                  <GridRow>
                    <h1>ПОШЕЛ НАХУЙ</h1>
                  </GridRow>
                )}
              </Media>
            </Media>
          </Wrap>
        ))}
      </Container>
    );
  }
}

const GridRow = styled.div`
  display: grid;
  grid: 1fr / 150px 2fr;
  margin: 15px 0px;
  @media only screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }
`;

const FieldName = styled.div`
  font-weight: bold;
`;

const Wrap = styled.div`
  margin: 20px 0px;
  background-color: white;
  padding: 20px;
  border: 1px solid #252525;
  & .show-name {
    padding-top: 20px;
  }
  & .show-body {
    padding-left: 20px;
  }
  & img {
    width: 100px;
    height: 100px;
  }
`;

export default Home;
