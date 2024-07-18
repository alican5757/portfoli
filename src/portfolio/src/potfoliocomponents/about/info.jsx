import React from 'react'

const info = () => {
    return (
        <div className="about__info grid">

            <div className="about__box">
                <i class='bx bx-award about__icon'></i>
                <h3 className="about__title">Deneyim</h3>
                <span className="about__subtitle">1 yıldır çalışıyorum</span>
            </div>

            <div className="about__box">
                <i class='bx bx-briefcase about__icon' ></i>
                <h3 className="about__title">Projeler</h3>
                <span className="about__subtitle">1</span>
            </div>

            <div className="about__box">
                <i class='bx bx-support about__icon' ></i>
                <h3 className="about__title">Destek</h3>
                <span className="about__subtitle">ONLİNE 7/24</span>
            </div>

        </div>
    )
}

export default info