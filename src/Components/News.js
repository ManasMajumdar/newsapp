import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
    <div>
        <div className='container my-3'>
            <h2>NewsApp - Top Headlines</h2>
            <div className='row'>
                <div className='col-md-4'>
                    <NewsItem title="myTitle" description="myDesc"/>
                </div>
                <div className='col-md-4'>
                    <NewsItem title="myTitle" description="myDesc"/>
                </div>
                <div className='col-md-4'>
                    <NewsItem title="myTitle" description="myDesc"/>
                </div>
            </div>
        </div>
    </div>
    )
  }
}

export default News


// 3a9b831529604c99a94346d7cf767fbe - API Key