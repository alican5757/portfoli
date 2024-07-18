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
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 72 72" style={{ marginLeft: '10px' }}>
            <path d="M66.57 6.553c-1.746-2.278-4.928-3.089-8.502-2.133L10.343 17.177c-3.266.876-5.435 2.738-6.106 5.244-.677 2.527.285 5.253 2.709 7.676l17.818 17.818 17.148 17.147c1.904 1.906 4.011 2.912 6.09 2.912 3.225 0 5.781-2.363 6.844-6.322l12.721-47.688c.783-2.921.43-5.553-.997-7.411zm-2.867 6.377L50.98 60.619c-.271 1.007-1.103 3.355-2.979 3.355-.982 0-2.141-.617-3.262-1.74L29.006 46.501l12.021-12.022a2 2 0 1 0-2.828-2.828L26.178 43.673 9.774 27.27c-1.351-1.351-1.961-2.741-1.674-3.813.282-1.052 1.477-1.933 3.278-2.415L59.104 8.285a7.312 7.312 0 0 1 1.869-.27c.766 0 1.807.168 2.424.973.652.849.76 2.248.306 3.942z" fill="currentColor" />
            <path d="M52.232 43.67a1.006 1.006 0 00-1.221.717l-.103.393a1.002 1.002 0 001.937.505l.103-.394a1.002 1.002 0 00-.716-1.221zM51.479 46.572a1 1 0 00-1.22.717l-2.132 8.209a1 1 0 101.936.502l2.133-8.209a1.001 1.001 0 00-.717-1.219z" fill="currentColor" />
          </svg>
        </a>
    </div>
  )
}

export default Data;
