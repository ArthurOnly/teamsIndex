import React from 'react'

import {Container, Overlay, Title,IconsContainer} from './style'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

import {Button} from '@material-ui/core'

function News(props) {
  return (
    <Container 
      image='https://www.netvasco.com.br/img/destaques/padroes/aleatorio-21.jpg'
      big={props.big}
      >
      <Overlay big={props.big}/>
      <Title>{props.title}</Title>
      <IconsContainer>
        <FacebookIcon color='primary'/>
        <InstagramIcon color='primary'/>
        <TwitterIcon color='primary'/>
      </IconsContainer>
    </Container>
  );
}

export default News