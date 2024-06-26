import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import './QrCodeGenerator.css';

const QrCodeGenerator = () => {
  const [data, setData] = useState(''); 

  const handleInputChange = (event) => {
    setData(event.target.value);
  };

  return (
    <div className="qr-container"> 
    {data&&
    <QRCode value={data} size={256} level="H" className="qr-code" />
     }
      <input
     
        type="text"
        value={data}
        onChange={handleInputChange}
        placeholder="Enter data for QR code"
        className="qr-input" 
      />
       
    </div>
  );
};

export default QrCodeGenerator;