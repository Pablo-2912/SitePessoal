import { FaEnvelope } from "react-icons/fa";
import '../icons.css';

export default function EmailIcon() {
  return (
    <div className="icon-container">
     <a href="mailto:pablo.29123212@gmail.com?subject=Olá&body=Gostaria%20de%20conversar%20contigo%20sobre%20uma%20oportunidade."></a>
      <FaEnvelope className="icon" />
    </div>
  );
}
