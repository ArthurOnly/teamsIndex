import React from 'react'

import {Container, Overlay, Title,IconsContainer,Time} from './style'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

function News(props) {
  return (
    <Container 
      image={props.image}
      big={props.big}
      >
      <Overlay big={props.big}/>
      <Time>{props.time}</Time>
      <Title onClick={()=>window.open(props.url)}>{props.title}</Title>
      <IconsContainer>
        <FacebookIcon color='primary'/>
        <InstagramIcon color='primary'/>
        <TwitterIcon color='primary'/>
      </IconsContainer>
    </Container>
  );
}

export default News