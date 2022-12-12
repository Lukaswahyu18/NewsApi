import React from 'react'
import './NewsCard.css'

const NewsCard = (newsItem) => {
  console.log(newsItem)

  const fulldate = new Date(newsItem.newsItem.publishedAt)
  var date = fulldate.toString().split(' ')
  const hour = parseInt(date[4].substring(0, 2))
  const time = hour > 12 ? true : false

  return (
    <div className="newsCard">
      <img
        alt={newsItem.title}
        src={
          newsItem.newsItem.urlToImage
            ? newsItem.newsItem.urlToImage
            : 'https://th.bing.com/th/id/R.855e8ca01684f0d61e302ba09a177bfd?rik=TbKuqNR1U%2bV6Iw&riu=http%3a%2f%2fwww.fremontgurdwara.org%2fwp-content%2fuploads%2f2020%2f06%2fno-image-icon-2.png&ehk=CSKwfMp5gN3Q7qhs6urcmM7WX1EHsd%2f3sCS8jJu8lRU%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1'
        }
        className="newsImage"
      />
      <div className="newsText">
        <div>
          <span className="title"> {newsItem.newsItem.title}</span>
          <br />{' '}
          <span className="author">
            <a href={newsItem.newsItem.url} target="__blank">
              <b> </b>
            </a>{' '}
            <span className="muted">
              By{' '}
              {newsItem.newsItem.author ? newsItem.newsItem.author : 'unknow'} /{' '}
              {time
                ? `${hour - 12}:${date[4].substring(3, 5)} pm`
                : `${hour}:${date[4].substring(3, 5)} am`}{' '}
              on {date[2]} {date[1]} {date[3]}, {date[0]}
            </span>
          </span>
        </div>
        <div className="lowerNewsText">
          <div className="description">{newsItem.newsItem.description}</div>
          <span className="readmore">
            read more at {'  '}
            <a href={newsItem.newsItem.url} target="__blank">
              <b>{newsItem.newsItem.source.name}</b>
            </a>
          </span>
        </div>
      </div>
    </div>
  )
}

export default NewsCard
