import { Container } from '@mui/material'
import React from 'react'
import NewsCard from '../components/NewsCard/NewsCard'
import './NewsContent.css'

const NewsContent = ({ newsArray, newsResults }) => {
  return (
    <Container maxWidth="md">
      <div>
        {newsArray.map((newsItem) => (
          <NewsCard newsItem={newsItem} key={newsItem.title} />
        ))}
      </div>
    </Container>
  )
}

export default NewsContent
