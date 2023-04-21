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
<div className='conatiner0'>
      <div className='row0'>
      <h2>How We Started</h2>
        <p>ComparKarma began with the act of contextual research. What began as a series of interviews with people from all walks of life transformed
          into an idea that could save many people precious time and money that could be better used elsewhere. After understanding the motivations
          behind why people choose to learn industry-standards skills, we were able to understand that most of the job demand is concentrated in the
          tech industry. With this information, we knew what to pursue next: creating a tool that allows people to better find learning opportunities
          that suit their time and budget demands.</p>
      </div>
      </div>
<div className="container">
      <div className='row1'>
      <h2>For Industry Newcomers</h2>
        <p>Easily search for online education choices by filtering from costs, availability, and course type
Select options and compare between options using an intuitive and helpful interace
Leaving ratings for individual courses that you took, helping education companies better serve future customers 
Recommend courses to your friends</p>
      </div>
<div className="border"> </div>
      <div className='row2'>
      <h2>Features</h2>
        <ul>
  <li>Uncover bootcamps from a wider variety of disciplines such UI/UX, Project Management and Software Engineering</li>
  <li>Compare bootcamps by length, price and course type and many other options   </li>
  <li>Businesses can promote bootcamps with a sponsored status for more exposure</li>
</ul>
      </div>
</div>
<div>
<div className='row3'>
      <h2>Why choose compareKarma?</h2>
        <p> CompareKarma provides both businesses the opportunity to gain exposure and reach individuals that may not have considered their bootcamps.
          Our feature of sponsoring a bootcamp makes this possible. Backed by user research, we provide filtering options that potential bootcamp particpants look for ensuring they find the
          best fit. </p>
      </div>
</div>

    </body>
  );
};

export default About;