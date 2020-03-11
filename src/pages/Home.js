import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import { Container, Row, Col, Media, Badge } from "reactstrap";

const streamList = [
  {
    name: "ВСЕ ОТМЕНИЛИ НАХУЙ",
    image: "https://pbs.twimg.com/media/ESyy-QpU0AsNibu?format=jpg&name=small",
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
