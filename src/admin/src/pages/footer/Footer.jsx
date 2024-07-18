import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer__container container">
        <h1 className="footer__title">
          <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 500.000000 500.000000" preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
              <path d="M2454 4581 c-50 -31 -96 -81 -158 -175 -56 -85 -184 -304 -220 -376-9 -19 -31 -57 -48 -85 -35 -56 -293 -507 -431 -750 -49 -88 -97 -173 -107-190 -111 -195 -206 -365 -270 -480 -42 -77 -100 -180 -128 -229 -111 -194-108 -285 14 -346 47 -24 57 -25 236 -25 233 0 202 -22 346 245 19 36 43 76 52 90 10 14 30 50 45 80 15 30 42 80 60 110 27 47 144 247 346 596 25 44 61 107 79 140 195 353 244 434 261 434 6 0 17 -12 25 -27 52 -95 143 -256 459 -813 149 -262 162 -289 145 -300 -8 -5 -70 -10 -136 -10 -102 0 -125 3 -143 17 -17 15 -211 336 -211 350 0 16 -67 98 -93 114 -41 24 -71 24 -113 -2 -31 -19 -78 -93 -198 -311 -14 -26 -45 -83 -69 -125 -100 -177 -177 -331 -186-374 -19 -85 21 -161 101 -195 40 -16 99 -17 873 -17 823 1 830 1 887 23 101 38 137 102 123 218 -10 81 -60 183 -292 592 -85 150 -195 340 -273 475 -51 88 -129 223 -173 300 -44 77 -105 185 -137 240 -31 55 -70 125 -86 155 -47 91 -194 350 -247 435 -52 83 -107 156 -142 188 -53 48 -138 61 -191 28z"/>
              <path d="M2425 1800 c-134 -21 -279 -93 -370 -184 -365 -364 -231 -963 255 -1143 l75 -28 758 -3 c853 -3 777 -11 758 80 -29 133 -121 263 -231 325 -112 63 -115 63 -679 70 -495 6 -515 7 -554 27 -84 42 -128 157 -98 249 15 45 82 113 124 126 19 6 244 12 547 14 574 5 549 2 678 79 102 62 188 187 213 312 20 95 92 86 -713 85 -392 -1 -735 -5 -763 -9z"/>
            </g>
          </svg>
        </h1>

        <ul className="footer__list">
          <li><a href="#about" className="footer__link">About</a></li>
          <li><a href="#testimonial" className="footer__link">Testimonials</a></li>
          <li><a href="#portfolio" className="footer__link">Projects</a></li>
        </ul>

        <div className="footer__social">
        <a href="https://www.facebook.com/alican.altunel.73" className="footer__social-link" target='_blank' rel='noopener noreferrer'>
  <i className="bx bxl-facebook" style={{ width: '24px', height: '24px' }}></i>
</a>
<a href="https://www.instagram.com/ali.can.altunel/?next=%2F" className="footer__social-link" target='_blank' rel='noopener noreferrer'>
  <i className="bx bxl-instagram" style={{ width: '24px', height: '24px' }}></i>
</a>
<a href="https://x.com/AliCanALTUNEL18" className="footer__social-link" target='_blank' rel='noopener noreferrer'>
  <svg xmlns="http://www.w3.org/2000/svg" width="80%" height="24" viewBox="0 0 16 16">
    <path fill="currentColor" d="M9.294 6.928L14.357 1h-1.2L8.762 6.147L5.25 1H1.2l5.31 7.784L1.2 15h1.2l4.642-5.436L10.751 15h4.05zM7.651 8.852l-.538-.775L2.832 1.91h1.843l3.454 4.977l.538.775l4.491 6.47h-1.843z"></path>
  </svg>
</a>
        </div>
        <span className="footer__copy">© Ali Can Altunel. All rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
