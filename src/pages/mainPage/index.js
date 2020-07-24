import React,{useEffect,useState} from "react"
import {apiGet} from '../../helpers/api'

import { Container, TeamContainer, TeamsList, Header } from "./styles"

function MainPage() {
  const [teams,setTeams] = useState([])
  useEffect(()=>{
    getTeams()
  },[])

  async function getTeams(){
    const teams = await apiGet(null,`teams`)
    setTeams(teams)
  }

  return (
    <Container>
      <Header>
        <h1>Bem vindo ao meuclube!</h1>
        <h3>No nosso site você encontra todas as notícias do seu time, atualizadas a todo instante!</h3>
        <p>Nosso site ainda está em desenvolvimento</p>
      </Header>
      <TeamsList>
      {teams.map(team=>{
        return (
          <TeamContainer onClick={()=>window.open(window.location.href.toString()+team.name)}>
            <img src={team.emblem}/>
          </TeamContainer>
        )
      })}
      </TeamsList>
    </Container>
  )
}

export default MainPage
