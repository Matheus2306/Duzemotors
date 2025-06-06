import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router';



const Banner = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/Catalogo");
  };
  return (
    <section className="d-flex align-items-center justify-content-center text-center text-white"  style={{
        backgroundColor: '#000',
        height: '100%',
        maxHeight: '700px',
        padding: '60px 20px' 
      }}>
      <div>
        <h1 className="fw-bold display-4">
          Sua Nova <span className="text-danger">Moto</span> Está Aqui
        </h1>
        <p className="mt-3 fs-5">
          Descubra nossa coleção exclusiva de motos de alta performance e design inovador.<br />
          Qualidade, confiança e o melhor preço do mercado.
        </p>
        <div className="d-flex justify-content-center gap-3 mt-4">
        <div className="d-flex justify-content-center gap-3 mt-4"> <div className=""> 
          <button className="btn btn-danger btn-lg" onClick={handleClick} > Ver Catálogo → 
            </button> 
            </div>
          <a
         href="https://wa.me/551436028600"
         target="_blank"
         rel="noopener noreferrer"
         className="btn btn-light btn-lg text-dark"
        >
        Agendar Test Ride
        </a>
          
        </div>
      </div>
      </div>
    </section>
  );
};

export default Banner;





            
