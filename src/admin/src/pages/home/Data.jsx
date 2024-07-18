import React from 'react';
import myIcon from '../../assets/3d-render-victory-hand-gesture-white.svg'; // Dosya yolunu doğru belirttiğinizden emin olun

const Data = () => {
  return (
    <div className='home__data'>
        <h1 className="home__title">
          Ali C. ALTUNEL
          <img src={myIcon} alt="My Icon" width="35" height="35" style={{ marginLeft: '10px' }} />
        </h1>
        <h3 className="home__subtitle">REACT FRONTEND DEVELOPMENT</h3>
        <p className='home__description'>22 yaşındayım ve yazılım eğitimi aldım. Yazılım geliştirme konusunda bilgi ve tecrübe sahibiyim. Çeşitli programlama dillerinde kendimi geliştirdim ve teknolojiyi yakından takip ediyorum.</p>
        <a href="#contact" className="button button--flex" >MERHABA'DE
    
        </a>
    </div>
  )
}

export default Data;
