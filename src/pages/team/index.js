import React,{useEffect,useState} from "react"
import {Button} from '@material-ui/core'
import {apiGet} from '../../helpers/api'

import News from "../../components/news"
import Footer from '../../components/footer'
import { useParams } from "react-router-dom"

import { Container, NewsContainer, DoubleContainer, TeamDiv, TeamImg, AdDiv } from "./style"

function MainPage() {
  const {team,titleNews} = useParams()
  const [teamEmblem,setTeamEmblem] = useState()
  const [fans,setFans] = useState()
  const [news,setNews] = useState([])
  const [activeNew, setActiveNew] = useState()

  useEffect(()=>{
    getTeamAndNews()
    getSelectedNews()
  },[])

  async function getSelectedNews(){
    const news = await apiGet(null,`${team}/news/${titleNews}`)
    console.log(news)
    setActiveNew(news)
  }

  async function getTeamAndNews(){
    //Pickup news
    const news = await apiGet(null,`${team}/news`)
    setNews(news)

    //Pickup teamData
    const teamData = await apiGet(null,`teams/${team}`)
    setTeamEmblem(teamData.emblem)
    setFans(teamData.fansCounter)
  }

  return (
    <Container>
      <DoubleContainer>
          <TeamDiv>
              <TeamImg src={teamEmblem}></TeamImg>
              <h1>{team}</h1>
              <h3>Somos {fans}</h3>
              <Button color='primary' variant='contained'>Sou torcedor!</Button>
          </TeamDiv>
          <AdDiv/>
      </DoubleContainer>
      {
        activeNew ? (
          <NewsContainer>
            <News key={activeNew.id} title={activeNew.title} time={activeNew.createdAt.slice(0,10)} url={activeNew.url} image={activeNew.imageUrl.replace('(','').replace(')','')}/>
          </NewsContainer>
        ) : null
      }
      <NewsContainer>
        {
          news.map(news=>{
            return <News key={news.id} title={news.title} time={news.createdAt.slice(0,10)} url={news.url} image={news.imageUrl.replace('(','').replace(')','')}/>
          })
        }
      </NewsContainer>
      <Footer/>
    </Container>
  )
}

export default MainPage
