import React, { useState } from 'react';
import './qualification.css';

const Qualification = () => {
  const [activeTab, setActiveTab] = useState('education');

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personal Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div 
            className={`qualification__button button--flex ${activeTab === 'education' ? 'qualification__active' : ''}`} 
            onClick={() => setActiveTab('education')}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i> Education
          </div>

          <div 
            className={`qualification__button button--flex ${activeTab === 'experience' ? 'qualification__active' : ''}`} 
            onClick={() => setActiveTab('experience')}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div className={`qualification__content ${activeTab === 'education' ? 'qualification__content-active' : ''}`}>
            <div className="qualification__data">
            <div>
                <h3 className="qualification__title">REACT - REACT NATİVE</h3>
                <span className="qualification__subtitle">www.udemy.com</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2024
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">BOOTSTRAP 4</h3>
                <span className="qualification__subtitle">www.udemy.com</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2023
                </div>
              </div>
            </div>

            <div className="qualification__data">
            <div>
                <h3 className="qualification__title">BİLGİSAYAR PROGRAMCILIĞI</h3>
                <span className="qualification__subtitle">ONDOKUZ MAYIS ÜNİVERSİTESİ</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2020 - 2022
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
              </div>
              <div>
                <h3 className="qualification__title">WEB PROGRAMCILIĞI</h3>
                <span className="qualification__subtitle">AYANCIK MESLEKİ VE TEKNİK ANADOLU LİSESİ</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2016 - 2020
                </div>
              </div>
            </div>
          </div>

          <div className={`qualification__content ${activeTab === 'experience' ? 'qualification__content-active' : ''}`}>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">AYHAS HOLDİNG- BİLSA</h3>
                <span className="qualification__subtitle">TEKNİSYEN</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2022-2024
                </div>
              </div>
            </div>

            <div className="qualification__data">
            <div>
                <h3 className="qualification__title">FOTO BARIŞ</h3>
                <span className="qualification__subtitle">STAJER GRAFİKER</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2022-2022
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">AYANCIK ÖĞRETMENEVİ</h3>
                <span className="qualification__subtitle">STAJER SRESEPSİYONİST</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2020 -2020
                </div>
              </div>
            </div>

            <div className="qualification__data">
            <div>
                <h3 className="qualification__title">AV. ERTUĞRUL ÇETİNKAYA</h3>
                <span className="qualification__subtitle">STAJER SEKRETER YARDIMSI</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2019-2020
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
             
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Qualification;
