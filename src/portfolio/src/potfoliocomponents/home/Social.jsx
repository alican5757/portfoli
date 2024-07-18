import React from 'react';

const Social = () => {
  const handleSocialClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className='home__social'>
      <div className="home__social-icon" onClick={() => handleSocialClick("https://www.instagram.com/ali.can.altunel/?next=%2F")}>
        <i className="uil uil-instagram"></i>
      </div>    
      <div className="home__social-icon" onClick={() => handleSocialClick("https://www.linkedin.com/in/ali-can-altunel-4a296123b/")}>
        <i className="uil uil-linkedin-alt"></i>
      </div> 
      <div className="home__social-icon" onClick={() => handleSocialClick("https://github.com/")}>
        <i className="uil uil-github-alt"></i>
      </div> 
    </div>
  );
}

export default Social;
