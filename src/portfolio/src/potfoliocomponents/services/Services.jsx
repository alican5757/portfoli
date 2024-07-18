import React, { useState } from 'react';
import './services.css';

const Services = () => {
    const [activeModal, setActiveModal] = useState(null);

    const openModal = (index) => {
        setActiveModal(index);
    };

    const closeModal = () => {
        setActiveModal(null);
    };

    return (
        <section className="services section" id="services">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What I Offer</span>

            <div className="services__container container grid">
                  <div className="services__content">
                    <div>
                        <i className="uil uil-web-grid services__icon"></i>
                        <h3 className="services__title">PRODUCT <br/> TASARIMCISI</h3>
                    </div>
                    <span className="services__button" onClick={() => openModal(1)}>View More
                        <i className='uil uil-arrow-right services__button-icon'></i>
                    </span>
                    <div className={activeModal === 1 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close" onClick={closeModal}></i>
                            <h3 className="services__modal-title">Product Designer</h3>
                            <p className="services__modal-description">Your description here...</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Tek Sayfa Uygulamalar (SPA) geliştirme</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Yeniden kullanılabilir bileşenler oluşturma</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Uygulama durumu yönetimi </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">CSS, SASS, LESS kullanarak stil oluşturma</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">TailwindCSS, Bootstrap gibi CSS çerçeveleri </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Styled-Components kullanarak JavaScript     </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Mobil uyumlu ve duyarlı tasarımlar</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-arrow services__icon"></i>
                        <h3 className="services__title">UI UX <br/> DESIGNER</h3>
                    </div>
                    <span className="services__button" onClick={() => openModal(2)}>View More
                        <i className='uil uil-arrow-right services__button-icon'></i>
                    </span>
                    <div className={activeModal === 2 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close" onClick={closeModal}></i>
                            <h3 className="services__modal-title">UI UX Designer</h3>
                            <p className="services__modal-description">Your description here...</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Tek Sayfa Uygulamalar (SPA) geliştirme</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Yeniden kullanılabilir bileşenler oluşturma</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Uygulama durumu yönetimi </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">CSS, SASS, LESS kullanarak stil oluşturma</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">TailwindCSS, Bootstrap gibi CSS çerçeveleri </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Styled-Components kullanarak JavaScript     </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Mobil uyumlu ve duyarlı tasarımlar</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-edit services__icon"></i>
                        <h3 className="services__title">VISUAL <br/> DESIGNER</h3>
                    </div>
                    <span className="services__button" onClick={() => openModal(3)}>View More
                        <i className='uil uil-arrow-right services__button-icon'></i>
                    </span>
                    <div className={activeModal === 3 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close" onClick={closeModal}></i>
                            <h3 className="services__modal-title">Visual Designer</h3>
                            <p className="services__modal-description">Your description here...</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Tek Sayfa Uygulamalar (SPA) geliştirme</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Yeniden kullanılabilir bileşenler oluşturma</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Uygulama durumu yönetimi </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">CSS, SASS, LESS kullanarak stil oluşturma</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">TailwindCSS, Bootstrap gibi CSS çerçeveleri </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Styled-Components kullanarak JavaScript     </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Mobil uyumlu ve duyarlı tasarımlar</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
