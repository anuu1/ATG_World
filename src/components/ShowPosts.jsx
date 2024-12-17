import { articles, educational_posts, events, jobs } from '../data/data'
import Article from './Article'
import Education from './Education'
import Event from './Event'
import Job from './Job'

const ShowPosts = ({ postType = 'all' }) => {
  return (
    <div className="w-full flex flex-col">
      {
        (postType == 'all' || postType == 'article') &&
        articles.map(({ title, description, author, imageURL, authorIconURL, views }, index) => (
          <div key={index} className='w-full mb-3'>
            <Article title={title} description={description} author={author} imageURL={imageURL} authorIconURL={authorIconURL} views={views} />
          </div>
        ))
      }
      {
        (postType == 'all' || postType == 'education') &&
        educational_posts.map(({ title, description, author, imageURL, authorIconURL, views }, index) => (
          <div key={index} className='w-full mb-3'>
            <Education title={title} description={description} author={author} imageURL={imageURL} authorIconURL={authorIconURL} views={views} />
          </div>
        ))
      }
      {
        (postType == 'all' || postType == 'event') &&
        events.map(({ title, date, location, link, author, imageURL, authorIconURL, views }, index) => (
          <div key={index} className='w-full mb-3'>
            <Event title={title} date={date} location={location} link={link} author={author} imageURL={imageURL} authorIconURL={authorIconURL} views={views} />
          </div>
        ))
      }
      {
        (postType == 'all' || postType == 'job') &&
        jobs.map(({ title, company, location, imageURL, link, author, authorIconURL, views }, index) => (
          <div key={index} className='w-full mb-3'>
            <Job title={title} company={company} location={location} imageURL={imageURL} link={link} author={author} authorIconURL={authorIconURL} views={views} />
          </div>
        ))
      }
    </div>
  )
}

export default ShowPosts