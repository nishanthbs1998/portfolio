  import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import crown from "../../src/crown.svg"
import hackerNews from"../../src/hackerNews.png"
const Project=()=>{
    return(<>
        <div className='cards'>
          


    <Card style={{ width: '19rem', marginLeft:"1.5em", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)"}}>
      <Card.Img variant="top" src={crown} style={{ padding: '1em' }}/>
      <Card.Body>
        <Card.Title>Crown Clothing</Card.Title>
        <Card.Text>
          An apparel shopping website built using React with Redux along with the implementation of firebase authentication. 
        </Card.Text>
        <button className="customButton" ><a style={{textDecoration:"none", color:"inherit"}} href="https://timely-melba-fe1369.netlify.app/">See project {'>'}</a></button>
      </Card.Body>
    </Card>

        <Card style={{ width: '19rem', marginLeft:"1.5em", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)"}}>
      <Card.Img variant="top" src={hackerNews} style={{ padding: '1em' }}/>
      <Card.Body>
        <Card.Title>hackerNews</Card.Title>
        <Card.Text>
          hackerNews is a single page React application whose functionality is to aggregate tech news and articles accross the web. It uses the algolia search API to fetch information. 
        </Card.Text>
        <button className="customButton" ><a style={{textDecoration:"none", color:"inherit"}} href="https://hacker-news-ce1ab.web.app/">See project {'>'}</a></button>
      </Card.Body>
    </Card>

     

        </div>
           <button style={{marginLeft:"7em"}} className="customButton" ><a style={{textDecoration:"none", color:"inherit"}} href="https://github.com/nishanthbs1998?tab=repositories">View all {'>'} </a></button>
    </>
           )
}

export default Project