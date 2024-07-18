import React from 'react';
import './home.css';
import Social from './Social';
import Data from './Data';
import ScrollDown from './ScrollDown';

const Home = () => {
  return (
    <section className='home section' id='home'>
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social /> {/* Render your Social component */}
          <div className="home__img"></div> {/* Placeholder for an image */}
          <Data /> {/* Render your Data component */}
        </div>
        <ScrollDown /> {/* Render your ScrollDown component */}
      </div>
    </section>
  );
};

export default Home;
