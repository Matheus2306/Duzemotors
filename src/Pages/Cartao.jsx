import { useState } from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function PaginaCartao() {
  const [state, setState] = useState({
    number: '',
    name: '',
    expiry: '',
    cvc: '',
    focus: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleInputFocus = (e) => {
    setState({ ...state, focus: e.target.name });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Pagamento confirmado, Obgigado pela Preferência!');
    console.log('Dados do cartão:', state);
  };

  return (
    <>
      <Header />
      <div className="min-vh-100 d-flex flex-column align-items-center justify-content-center bg-light py-5 px-3">
        <div className="text-center mb-4">
          <h1 className="fw-bold text-danger">Pagamento com Cartão</h1>
          <p className="text-muted">Preencha os dados abaixo para concluir sua compra</p>
        </div>

        <div className="card shadow p-4 border-0" style={{ maxWidth: '500px', width: '100%' }}>
          <div className="mb-4">
            <Cards
              number={state.number}
              name={state.name}
              expiry={state.expiry}
              cvc={state.cvc}
              focused={state.focus}
            />
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label text-danger">Número do Cartão</label>
              <input
                type="tel"
                name="number"
                placeholder="Número do cartão"
                className="form-control"
                value={state.number}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
            </div>

            <div className="mb-3">
              <label className="form-label text-danger">Nome no Cartão</label>
              <input
                type="text"
                name="name"
                placeholder="Nome no cartão"
                className="form-control"
                value={state.name}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label text-danger">Validade</label>
                <input
                  type="text"
                  name="expiry"
                  placeholder="MM/AA"
                  className="form-control"
                  value={state.expiry}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label text-danger">CVC</label>
                <input
                  type="tel"
                  name="cvc"
                  placeholder="CVC"
                  className="form-control"
                  value={state.cvc}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                />
              </div>
            </div>

            <button type="submit" className="btn btn-danger w-100 fw-bold">
              Confirmar Pagamento
            </button>
          </form>
        </div>

        {/* Additional Content */}
        <div className="mt-5 text-center">
          <h3 className="fw-bold text-danger">Por que escolher a DuzéMotors?</h3>
          <p className="text-muted">
            Oferecemos as melhores condições de pagamento, segurança e suporte ao cliente. 
            Sua satisfação é nossa prioridade!
          </p>
          <ul className="list-unstyled">
            <li className="text-muted">
              <i className="bi bi-check-circle text-success me-2"></i> Pagamento 100% seguro
            </li>
            <li className="text-muted">
              <i className="bi bi-check-circle text-success me-2"></i> Suporte 24/7
            </li>
            <li className="text-muted">
              <i className="bi bi-check-circle text-success me-2"></i> Parcelamento em até 12x
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}
