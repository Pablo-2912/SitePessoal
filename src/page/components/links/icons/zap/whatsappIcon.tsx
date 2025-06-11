import React from 'react';
import "../icons.css"; // Se tiver estilos comuns

import { FaWhatsapp } from "react-icons/fa";

const WhatsAppIcon: React.FC = () => {
  return (
<div className="icon-container">
   <a href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20conversar%20contigo%20sobre%20uma%20oportunidade."></a>
  <FaWhatsapp className="icon" />
</div>

  );
};

export default WhatsAppIcon;
