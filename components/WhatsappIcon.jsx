import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const WhatsAppIcon = () => {
  return (
    <a
      href="https://wa.me/1234567890" // Burada telefon numaranızı kullanın
      className="fixed bottom-4 right-4 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition transform hover:scale-110"
      target="_blank"
      rel="noopener noreferrer"
    >
        
    </a>
  );
};

export default WhatsAppIcon;
