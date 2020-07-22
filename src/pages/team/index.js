import React from "react"
import {Button} from '@material-ui/core'

import News from "../../components/news"
import Footer from '../../components/footer'

import { useParams } from "react-router-dom"

import { Container, NewsContainer, DoubleContainer, TeamDiv, TeamImg, AdDiv } from "./style"

function MainPage() {
  const {team} = useParams()

  return (
    <Container>
      <DoubleContainer>
          <TeamDiv>
              <TeamImg src='https://a.espncdn.com/i/teamlogos/soccer/500/3454.png'></TeamImg>
              <h1>{team}</h1>
              <h3>Somos 123</h3>
              <Button color='primary' variant='contained'>Sou torcedor!</Button>
          </TeamDiv>
          <AdDiv/>
      </DoubleContainer>
      <NewsContainer>
        <News />
        <News />
        <News big />
        <News />
        <News />
        <News />
        <News />
        <News />
      </NewsContainer>
      <Footer/>
    </Container>
  )
}

export default MainPage
