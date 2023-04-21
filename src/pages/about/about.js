import React from 'react';
import './about.css';
import { ReactComponent as PeopleTalkingSVG } from './people_talking.svg';
import { ReactComponent as WomanStandingSVG } from './woman_standing.svg';


const About = () => {
  return (
    <body>
      <div className='header-about'>
        <PeopleTalkingSVG/>
        <h2>Who We Are: CompareKarma's Mission</h2>
        <p>In a world where opportunities are overwhelming, CompareKarma aims to be the most effective online education search tool on the market. 
        </p>
      </div>

      <div className='row1'>
      <h2>How We Started</h2>
        <p>ComparKarma began with the act of contextual research. What began as a series of interviews with people from all walks of life transformed
          into an idea that could save many people precious time and money that could be better used elsewhere. After understanding the motivations
          behind why people choose to learn industry-standards skills, we were able to understand that most of the job demand is concentrated in the
          tech industry. With this information, we knew what to pursue next: creating a tool that allows people to better find learning opportunities
          that suit their time and budget demands.</p>
      </div>

      {/* <div className='row2'>
        <h2>CompareKarma Offers The Following Features:</h2>
      </div> */}

    </body>
  );
};

export default About;