import React from 'react'

const info = () => {
    return (
        <div className="about__info grid">

            <div className="about__box">
                <i class='bx bx-award about__icon'></i>
                <h3 className="about__title">Deneyim</h3>
                <input
    style={{
      fontSize: '0.625rem',
      width: '100%', // Adjusted to take full width within the box
      height: '30px', // Increased height for better readability
    
      border: 'none', // Optional border for better visibility
      borderRadius: '5px', // Rounded corners for a nicer look
      textAlign: 'center', // Center text alignment
      boxSizing: 'border-box' // Include padding and border in the element's total width and height
    }}
    placeholder="1 yıldır çalışıyorum"
  />
            </div>

            <div className="about__box">
                <i class='bx bx-briefcase about__icon' ></i>
                <h3 className="about__title">Projeler</h3>
                <input
    style={{
      fontSize: '0.625rem',
      width: '100%', // Adjusted to take full width within the box
      height: '30px', // Increased height for better readability
      padding: '5px 10px', // Added padding for inner spacing
      border: 'none', // Optional border for better visibility
      borderRadius: '5px', // Rounded corners for a nicer look
      textAlign: 'center', // Center text alignment
      boxSizing: 'border-box' // Include padding and border in the element's total width and height
    }}
    placeholder="1"
  />
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