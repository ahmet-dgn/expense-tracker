import "./PixelPerfectChecker.css";
import frame1 from "../images/frame1.jpg";
import frame9 from "../images/frame9.jpg";
import React, { useState, useEffect } from "react";

function PixelPerfectChecker() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [selectedFrame, setSelectedFrame] = useState(
    windowWidth <= 450 ? frame9 : frame1
  );

  // Ekran boyutu değiştiğinde çağrılacak işlev
  const handleResize = () => {
    const newWindowWidth = window.innerWidth;
    setWindowWidth(newWindowWidth);

    // Ekran boyutuna bağlı olarak hangi çerçeveyi kullanacağımızı belirle
    setSelectedFrame(newWindowWidth <= 450 ? frame9 : frame1);
  };

  // Ekran boyutu değiştiğinde dinleyiciyi ekle
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // Temizleme işlemi: bileşen kaldırıldığında dinleyiciyi kaldır
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [currentStatus, setStatus] = useState(false);
  const [elementStyle, setElementStyle] = useState(null);

  const PixelClickHandler = () => {
    setStatus(true);
  };

  const PixelCancelHandler = () => {
    setStatus(false);
  };

  const LeftArrowHandler = () => {
    const computedStyle = window.getComputedStyle(elementStyle);
    const currentLeft = parseFloat(computedStyle.getPropertyValue("left")) || 0;
    const newLeft = currentLeft - 1;
    elementStyle.style.left = `${newLeft}px`;
  };

  const RightArrowHandler = () => {
    const computedStyle = window.getComputedStyle(elementStyle);
    const currentLeft = parseFloat(computedStyle.getPropertyValue("left")) || 0;
    const newLeft = currentLeft + 1;
    elementStyle.style.left = `${newLeft}px`;
  };

  const [imageWidth, setImageWidth] = useState(null);

  // Ekran genişliği değiştiğinde resmi ortalama işlemini yap
  const centerImage = () => {
    const containerWidth = window.innerWidth;
    const imageElement = document.getElementById("centered-image"); // Resmi aldık

    if (imageElement) {
      const imageWidth = imageElement.width; // Resmin genişliğini aldık
      const newLeft = (containerWidth - imageWidth) / 2; // Resmi ortalamak için yeni left değerini hesapla
      imageElement.style.left = `${newLeft}px`; // Yeni left değerini elemente uygula
    }
  };

  useEffect(() => {
    centerImage(); // Başlangıçta da resmi ortalama işlemini yap
    window.addEventListener("resize", centerImage); // Ekran boyutu değiştiğinde ortalama işlemini yap

    // Temizleme işlemi: bileşen kaldırıldığında event listener'ı kaldırın
    return () => {
      window.removeEventListener("resize", centerImage);
    };
  }, []);

  return (
    <div>
      {currentStatus && (
        <img
          ref={(element) => setElementStyle(element)}
          className="pixel-perfect-img"
          src={selectedFrame}
          alt=""
          width="{imageWidth}"
          height="829"
          style={{
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />
      )}
      {currentStatus && (
        <button
          className="check-pixel-perfection-cancel"
          onClick={PixelCancelHandler}
        >
          Close
        </button>
      )}
      {currentStatus && (
        <div className="pixel-perfect-arrows">
          <span className="arrow-left" onClick={LeftArrowHandler}>
            &lt;
          </span>
          <span className="arrow-right" onClick={RightArrowHandler}>
            &gt;
          </span>
        </div>
      )}

      {!currentStatus && (
        <button className="check-pixel-perfection" onClick={PixelClickHandler}>
          Check Pixel Perfection
        </button>
      )}
    </div>
  );
}

export default PixelPerfectChecker;
