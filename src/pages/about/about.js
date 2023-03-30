import React from 'react';
import './about.css';


const About = () => {
  return (
    <body>
      <div className='header'>
        <h1>About</h1>
      </div>

      <div className='row'>
        <div className='leftcolumn'>
          <div className='card2'>
            <h2>How we started</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Amet dictum sit amet justo donec enim diam vulputate. Erat nam at lectus urna duis convallis convallis
              tellus id. Mattis pellentesque id nibh tortor id aliquet lectus. Tempus quam pellentesque nec nam. Id venenatis a
              condimentum vitae sapien. Non blandit massa enim nec dui nunc mattis enim. Lorem dolor sed viverra ipsum nunc
              aliquet bibendum enim. Platea dictumst vestibulum rhoncus est pellentesque. Ipsum dolor sit amet consectetur
              adipiscing elit. Sed tempus urna et pharetra pharetra massa massa ultricies mi. Dictum varius duis at
              consectetur lorem donec massa sapien. Eget dolor morbi non arcu risus quis varius. Tortor condimentum 
              lacinia quis vel. Nulla aliquet enim tortor at auctor urna. Augue interdum velit euismod in pellentesque massa
              placerat duis. Ut eu sem integer vitae justo eget. Vel orci porta non pulvinar neque laoreet suspendisse
              interdum.
            </p>
          </div>
          <div className='card2'>
            <h2>Why choose CompareKarma?</h2>
            <p>Lorem ipsum dolor sit amet. Ut minus delectus sed galisum consequatur qui dolorem voluptatibus qui totam quae.
              Et odio accusantium ab recusandae magnam ut minima alias. Aut dolor molestiae 33 quas consequuntur et alias
              voluptatibus nam itaque aliquam! Eos eligendi voluptatem ut excepturi obcaecati qui accusantium quia et soluta
              reprehenderit non iure dolorem!
            </p>
          </div>
       </div>
       <div className='rightcolumn'>
        <div className='card2'>
          <h2>Features</h2>
          <h5>Feature 1</h5>
          <h5>Feature 2</h5>
          <h5>Feature 3</h5>
          <h5>Feature 4</h5>
        </div>
       </div>
      </div>
    </body>
  );
};

export default About;