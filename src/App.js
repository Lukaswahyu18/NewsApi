import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer/Footer'
import NewsContent from './NewsContent/NewsContent'

function App() {
  const [category, setCategory] = useState('General')
  const [newsArray, setNewsArray] = useState([])
  const [newsResults, setNewsResult] = useState()

  const newsApi = async () => {
    try {
      const news = await axios.get(
        `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=90009d14c3e14a68aedffb9629a80052`,
      )
      setNewsArray(news.data.articles)
      setNewsResult(news.data.totalResults)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    newsApi()
  }, [newsResults, category])

  return (
    <div className="App">
      <NavBar setCategory={setCategory} />
      <NewsContent newsArray={newsArray} newsResults={newsResults} />
      <Footer />
    </div>
  )
}

export default App
