import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

articles = [
      {
        "source": { "id": "bild", "name": "Bild" },
        "author": "BILD",
        "title": "Finale der Basketball-WM: Deutschland gegen Serbien läuft heute im Free-TV! | Sport",
        "description": "Werden wir Weltmeister? So sehen Sie das Basketball-WM-Finale heute im Free-TV.",
        "url": "https://www.bild.de/sport/mehr-sport/basketball/finale-der-basketball-wm-deutschland-gegen-serbien-laeuft-live-im-free-tv-85344952.bild.html",
        "urlToImage": "https://images.bild.de/64fb3950f4070a1f32b994a3/b8a61979d44a8be6992dea3aa79ec4ab,69817ebf?w=1280",
        "publishedAt": "2023-09-10T11:57:59Z",
        "content": "Werden wir Weltmeister?\r\nNach dem sensationellen Sieg im Halbfinale gegen Mega-Favorit USA (113:111) steht die deutsche Nationalmannschaft im Finale der Basketball-Weltmeisterschaft. Heute gegen Serb… [+1266 chars]"
      },
      {
        "source": { "id": "espn", "name": "ESPN" },
        "author": "Brian Windhorst",
        "title": "Team USA loses OT thriller to Canada in World Cup bronze medal game - ESPN",
        "description": "Team USA lost a thrilling overtime contest at the World Cup to Canada, which won a major international medal in men's basketball for the first time in 87 years.",
        "url": "https://www.espn.com/olympics/basketball/story/_/id/38367723/team-usa-loses-ot-thriller-canada-world-cup-bronze-medal-game",
        "urlToImage": "https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0910%2Fr1222495_1296x729_16%2D9.jpg",
        "publishedAt": "2023-09-10T10:55:00Z",
        "content": "MANILA, Philippines -- An NBA game broke out at the FIBA World Cup on Sunday, with Team USA and Team Canada falling into the high-octane, free-flowing, star vs. star game they are so comfortable with… [+3416 chars]"
      },
      {
        "source": { "id": "cbc-news", "name": "CBC News" },
        "author": "CBC News",
        "title": "Canada beats U.S. in OT for bronze at men's Basketball World Cup | CBC Sports",
        "description": "Canada won the bronze-medal match at the FIBA men's Basketball World Cup on Sunday in Manila, Philippines. The Canadians did it in dramatic fashion, taking a 127-118 overtime win against the United States.",
        "url": "http://www.cbc.ca/sports/olympics/summer/basketball/world-cup-basketball-men-canada-united-states-bronze-recap-1.6962177",
        "urlToImage": "https://i.cbc.ca/1.6962185.1694340451!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/1671404804.jpg",
        "publishedAt": "2023-09-10T10:52:16.0091193Z",
        "content": "Canada won the bronze-medal match at the FIBA men's Basketball World Cup on Sunday in Manila, Philippines.\r\nThe Canadians did it in dramatic fashion, taking a 127-118 overtime win against the United … [+165 chars]"
      },
      {
        "source": { "id": "al-jazeera-english", "name": "Al Jazeera English" },
        "author": "Beatrice Go",
        "title": "How dark horses Serbia, Germany reached the 2023 FIBA World Cup final",
        "description": "Serbia and Germany defeated NBA star-studded USA and Canada to make it an all-Europe 2023 basketball World Cup final.",
        "url": "http://www.aljazeera.com/sports/2023/9/10/how-serbia-and-germany-reached-2023-fiba-world-cup-final",
        "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2023/09/2023-09-08T110927Z_1200182658_UP1EJ980UZP45_RTRMADP_3_BASKETBALL-WORLDCUP-SRB-CAN-1694283674.jpg?resize=1920%2C1440",
        "publishedAt": "2023-09-10T09:14:33Z",
        "content": "Manila, Philippines Most fans and experts had predicted a North-American basketball World Cup final, with the USA and Canada both built on NBA stars.\r\nBut while Serbia and Germany may lack their riva… [+8483 chars]"
      },
      {
        "source": { "id": "focus", "name": "Focus" },
        "author": "Dominik Rosing",
        "title": "Basketball-Experte Alex Vogel: „Dieses Team ist auf einer Mission!“",
        "description": "Die deutsche Basketball-Nationalmannschaft steht sensationell im WM-Finale. Selbst Topfavorit USA kann die DBB-Truppe nicht stoppen. Jetzt wartet im Endspiel Serbien. TV-Experte Alex Vogel erklärt im Interview, was unsere Basketballer so stark macht.",
        "url": "https://www.focus.de/sport/basketball/tv-experte-alex-vogel-im-interview-dieses-team-ist-auf-einer-mission-warum-unsere-basketballer-jetzt-wm-gold-holen_id_204071668.html",
        "urlToImage": "https://p6.focus.de/img/fotos/id_204072282/dieses-team-ist-auf-einer-mission-sagt-tv-experte-alex-vogel-zum-deutschen-basketball-maerchen.jpg?im=Crop%3D%280%2C258%2C3098%2C1549%29%3BResize%3D%281200%2C627%29&impolicy=perceptual&quality=mediumHigh&hash=6ff2f3057f0cd837a8e90355c7399ed6694b040a5fd0a3cb5d930ccee9f1a5cf",
        "publishedAt": "2023-09-08T18:03:53Z",
        "content": "Die deutsche Basketball-Nationalmannschaft steht sensationell im WM-Finale. Selbst Topfavorit USA kann die DBB-Truppe nicht stoppen. Jetzt wartet im Endspiel Serbien. TV-Experte Alex Vogel erklärt im… [+7929 chars]"
      }
    ]
  
constructor () {
    super();
    console.log("Hello I am a Constructor");

    this.state = {
        articles : this.articles,
        loading: false
    }
}

render() {
    return (
    <div>
        <div className='container my-3'>
            <h2>NewsApp - Top Headlines</h2>
            <div className='row'>
                <div className='col-md-4'>
                    <NewsItem title="myTitle" description="myDesc" imageUrl="https://images.bild.de/64fb3950f4070a1f32b994a3/b8a61979d44a8be6992dea3aa79ec4ab,69817ebf?w=1280"/>
                </div>
                {/* <div className='col-md-4'>
                    <NewsItem title="myTitle" description="myDesc"/>
                </div>
                <div className='col-md-4'>
                    <NewsItem title="myTitle" description="myDesc"/>
                </div>
                <div className='col-md-4'>
                    <NewsItem title="myTitle" description="myDesc"/>
                </div>
                <div className='col-md-4'>
                    <NewsItem title="myTitle" description="myDesc"/>
                </div> */}
            </div>
        </div>
    </div>
    )
  }
}

export default News


// 3a9b831529604c99a94346d7cf767fbe - API Key