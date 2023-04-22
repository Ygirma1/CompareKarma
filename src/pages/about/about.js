import React from 'react';
import './about.css';
import { ReactComponent as PeopleTalkingSVG } from './people_talking.svg';
import { ReactComponent as WomanStandingSVG } from './woman_standing.svg';
const handleHomeButton = () => {
    
  window.location.href='/';
}
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
      <div className='header-about2'>   
<h2>CompareKarma Offers The Following Features:</h2>  
</div>


<div className="container">
      <div className='row1'>
      <h2>For Industry Newcomers</h2>
      <ul>
  <li>Easily search for online education choices by filtering from costs, availability, and course type</li>
  <li>Select options and compare between options using an intuitive and helpful interface  </li>
  <li>Leaving ratings for individual courses that you took, helping education companies better serve future customers 
</li>
<li>Recommend courses to your friends
</li>
</ul>
      </div>
<div className="border"> </div>
      <div className='row2'>
      <h2>For Businesses</h2>
        <ul>
  <li>Create a business profile and add courses via the website</li>
  <li>Easily view the ratings that course-takers have left on your business profile and improve upon the quality of your content   </li>
  <li>Build a better understanding of your customers as they engage with your posts and enter your sales funnels</li>
  <li>Post courses via our website, customizing courses through lengths of time, cost, and course type</li>
</ul>
      </div>
</div>
<div>
<div className='row3'>
      <h2>We’re Dedicated To Everyone’s Success</h2>
        <p> Businesses, industry newcomers, you name it - CompareKarma was designed to serve these audiences and bring them closer to their goals. As a product build on selflessness, CompareKarma’s mission is to build a community of success-seekers dedicated to landing a job in their ideal career. We aim to be a technology that’s powered by possibility.</p>
      </div>
</div>
<div className='pic'> <WomanStandingSVG/>
<h2>Interested in trying CompareKarma?</h2>
        <p className='bottomp'>
        Click the button below to enter the main page and start using the site to search - or sign up as a business today! 
        </p>
  
    
</div>

<div className='pic2'> 

   
        <button onClick={handleHomeButton} className='bottom'>
      {"Go to homepage"}
    </button>
    
</div>


    </body>
  );
};

export default About;