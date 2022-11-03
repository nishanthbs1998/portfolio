import { borderRadius } from '@mui/system';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const Experience=()=> {
    const [content,setContent]=useState( <>
               <h4 style={{fontStyle:"italic"}}>Application Development Analyst @ <span className='accName'>  Accenture</span> </h4>
               <p style={{fontStyle:"italic"}} className="date">Jan 2021 - Present</p>        
               <ul style={{textAlign:'justify'}}>
                <li>Designed, developed and deployed a tool to facilitate the data team in performing data validation activities, which were earlier performed manually.</li>
               <li>Integrated APIs to facilitate mailing, file compressing and decompressing functionalities. Wrote unit tests for the tool while also following the agile methodology of development.</li>
               <li>I am currently working on incorporating other forms of validations required for a different set of files.</li>
               <li>Tools/Technologies: Javascript, Reactjs, React-Bootstrap, Nodejs, Jest, Heroku, Git and Github.</li>
               </ul>
            </>);
    const handleClickAcc=()=>{
        
        setContent(
            <>
               <h4 style={{fontStyle:"italic"}}>Application Development Analyst @  <span className='accName'>Accenture</span> </h4>
               <p style={{fontStyle:"italic"}} className="date">Jan 2021 - Present</p>        
               <ul style={{textAlign:'justify'}}>
                <li>Designed, developed and deployed a tool to facilitate the data team in performing data validation activities, which were earlier performed manually.</li>
               <li>Integrated APIs to facilitate mailing, file compressing and decompressing functionalities. Wrote unit tests for the tool while also following the agile methodology of development.</li>
               <li>I am currently working on incorporating other forms of validations required for a different set of files.</li>
               <li>Tools/Technologies: Javascript, Reactjs, React-Bootstrap, Nodejs, Jest, Heroku, Git and Github.</li>
               </ul>
            </>
            )    
        
    }

    const handleClickTransil=()=>{
        setContent(
             <>
               <h4 style={{fontStyle:"italic"}}>Junior Software Developer @ <span className='transilName'>Transil</span> </h4>
               <p style={{fontStyle:"italic"}} className="date">Jan 2020 - June 2020</p>        
               <ul style={{textAlign:'justify'}}>
              <li>Worked on building the backend of the customer support system for an educational platform using Nodejs and MongoDB.</li>
               <li>Actively participated in daily sprints and gave my input to the UI/UX team for design decisions. </li>
               <li>Worked on integrating multiple public APIs. Wrote and published an npm package called “fetch-store-json” whose functionality is to fetch the required data from an API and automatically store them into a JSON file in the local system.</li>
               <li>Tools/Technologies: Javascript, Nodejs, MongoDB, Mongoose, Git and Github.</li>
               </ul>
            </>
        )
    }
  return (
    <>
    <ButtonGroup style={{color:"white"}} aria-label="Experience" className='expContentButtons'>
      <Button variant='light' onClick={handleClickAcc}>Accenture</Button>
      <Button   variant='light' onClick={handleClickTransil}>Transil</Button>
    </ButtonGroup>
    <div className='expContent'>
        {content}
    </div>
    
    </>
  );
}

export default Experience;