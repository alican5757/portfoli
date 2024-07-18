import React, { useRef, useState } from 'react';
import './about.css';
import axios from 'axios';
import Info from './info';

const Aboutnew = () => {
  const fileInputRefImage = useRef(null);
  const fileInputRefCV = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCV, setSelectedCV] = useState(null);
  const [aboutText, setAboutText] = useState('');

  const handleFileUploadImage = () => {
    if (fileInputRefImage.current) {
      fileInputRefImage.current.click();
    }
  };

  const handleFileUploadCV = () => {
    if (fileInputRefCV.current) {
      fileInputRefCV.current.click();
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setSelectedImage(file);
    } else {
      alert('Lütfen geçerli bir resim dosyası seçin (jpeg, png, gif).');
    }
  };

  const handleCVChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'application/pdf') {
      setSelectedCV(file);
    } else {
      alert('Lütfen geçerli bir PDF dosyası seçin.');
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
  };

  const handleRemoveCV = () => {
    setSelectedCV(null);
  };

  const handleSave = () => {
    if (aboutText && selectedImage && selectedCV) {
      const formData = new FormData();
      formData.append('hakkimda', aboutText);
      formData.append('resim', selectedImage);
      formData.append('cv', selectedCV);

      axios.post('http://localhost:8000/api/aboutnew/save', formData)
        .then(response => {
          console.log('Veri başarıyla kaydedildi:', response.data);
          alert('Dosyalar başarıyla kaydedildi.');
          setSelectedImage(null);
          setSelectedCV(null);
          setAboutText('');
        })
        .catch(error => {
          console.error('Hata oluştu:', error);
          alert('Dosya(lar) kaydedilirken bir hata oluştu.');
        });
    } else {
      alert('Lütfen hakkınızda bir metin, bir resim ve bir PDF dosyası seçin.');
    }
  };

  const handleAboutChange = (event) => {
    setAboutText(event.target.value);
  };

  return (
    <section className="about section" id="about">
      <h2 className="section__title">Hakkımda</h2>
      <span className="section__subtitle">Tanıtımım</span>

      <div className="about__container container grid">
        {/* Conditional rendering based on whether a file is selected */}
        {selectedImage ? (
          <div className="about__img-wrapper">
            <img
              src={URL.createObjectURL(selectedImage)}
              alt="Seçilen Resim"
              className="about__img"
            />
            <div className="about__img-overlay" onClick={handleRemoveImage}>
              <i className="bx bx-x"></i>
            </div>
          </div>
        ) : (
          <label
            htmlFor="imageInput"
            className="about__img-placeholder"
            onClick={handleFileUploadImage}
          >
            <i
              className="bx bx-image-add"
              style={{
                fontSize: '10rem',
                marginTop: '-4rem',
                display: 'block',
                textAlign: 'center',
                width: '350px',
                borderRadius: '1.5rem', // Optional: add rounded corners
              }}
            ></i>
            {/* Hidden file input for image upload */}
            <input
              id="imageInput"
              name='resim'
              type="file"
              ref={fileInputRefImage}
              style={{ display: 'none' }}
              onChange={handleImageChange}
              accept="image/jpeg, image/png, image/gif"
            />
          </label>
        )}

        <div className="about__data">
          <Info />
          <div className="about__description">
            <textarea
              value={aboutText}
              id="abouttextInput"
              name='hakkimda'
              onChange={handleAboutChange}
              style={{
                width: '110%',
                height: '120px',
                padding: '10px',
                border: 'none',
                resize: 'none',
              }}
              placeholder="Merhaba! Ben Ali Can, bir React geliştiriciyim.
JavaScript ve CSS kullanarak kullanıcı dostu web uygulamaları tasarlıyor ve geliştiriyorum.
Kod kalitesine ve performansa önem veriyorum."
            />
          </div>

          {/* Button to add CV */}
          <label
            htmlFor="cvInput"
            className={`button button--flex ${selectedCV ? 'button--green' : 'button--red'}`}
            onClick={handleFileUploadCV}
          >
            {selectedCV ? 'DOSYA SEÇİLDİ' : 'CV EKLE'}
            <svg
              className="button__icon"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              style={{ marginLeft: '10px' }}
            >
              <path
                d="M15.25 22.7502H9.25C3.82 22.7502 1.5 20.4302 1.5 15.0002V9.00024C1.5 3.57024 3.82 1.25024 9.25 1.25024H14.25C14.66 1.25024 15 1.59024 15 2.00024C15 2.41024 14.66 2.75024 14.25 2.75024H9.25C4.64 2.75024 3 4.39024 3 9.00024V15.0002C3 19.6102 4.64 21.2502 9.25 21.2502H15.25C19.86 21.2502 21.5 19.6102 21.5 15.0002V10.0002C21.5 9.59024 21.84 9.25024 22.25 9.25024C22.66 9.25024 23 9.59024 23 10.0002V15.0002C23 20.4302 20.68 22.7502 15.25 22.7502Z"
              ></path>
              <path
                d="M22.25 10.7502H18.25C14.83 10.7502 13.5 9.42023 13.5 6.00023V2.00023C13.5 1.70023 13.68 1.42023 13.96 1.31023C14.24 1.19023 14.56 1.26023 14.78 1.47023L22.78 9.47023C22.99 9.68023 23.06 10.0102 22.94 10.2902C22.82 10.5702 22.55 10.7502 22.25 10.7502ZM15 3.81023V6.00023C15 8.58023 15.67 9.25023 18.25 9.25023H20.44L15 3.81023Z"
              ></path>
              <path
                d="M13.25 13.7502H7.25C6.84 13.7502 6.5 13.4102 6.5 13.0002C6.5 12.5902 6.84 12.2502 7.25 12.2502H13.25C13.66 12.2502 14 12.5902 14 13.0002C14 13.4102 13.66 13.7502 13.25 13.7502Z"
              ></path>
              <path
                d="M11.25 17.7502H7.25C6.84 17.7502 6.5 17.4102 6.5 17.0002C6.5 16.5902 6.84 16.2502 7.25 16.2502H11.25C11.66 16.2502 12 16.5902 12 17.0002C12 17.4102 11.66 17.7502 11.25 17.7502Z"
              ></path>
            </svg>
            <input
              id="cvInput"
              name='cv'
              type="file"
              ref={fileInputRefCV}
              style={{ display: 'none' }}
              onChange={handleCVChange}
              accept=".pdf"
            />
          </label>

          {/* Button to save the selected file */}
          <button className="button-ekle button--flex" onClick={handleSave}>
            KAYDET
          </button>
        </div>
      </div>
    </section>
  );
};

export default Aboutnew;
