import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useTheme } from './context/ThemeContexts';
import { useProductContext } from '../context';
import { ButtonContainer } from './Button';

const Modal = () => {
  const { theme } = useTheme();
  const { modalOpen, closeModal, modalProduct } = useProductContext();
  const { img, title, price } = modalProduct;

  if (!modalOpen) {
    return null;
  }

  return (
    <ModalContainer>
      <div className="container">
        <div className="row">
          <div
            id="modal"
            className={
              theme
                ? "col-8 mx-auto col-md-6 col-lg-4 text-capitalize text-center p-5 bg-dark"
                : "col-8 mx-auto col-md-6 col-lg-4 text-capitalize text-center p-5"
            }
          >
            <h5 className={theme ? "text-white" : ""}>Item added to the cart</h5>
            <img src={img} className="img-fluid" alt="product" />
            <h5 className={theme ? "text-light" : ""}>{title}</h5>
            <h5 className={theme ? "text-light" : "text-muted"}>
              Price: $ {price}
            </h5>
            <Link to="/">
              <ButtonContainer onClick={closeModal}>
                Continue Shopping
              </ButtonContainer>
            </Link>
            <Link to="/cart">
              <ButtonContainer cart onClick={closeModal}>
                Go to Cart
              </ButtonContainer>
            </Link>
          </div>
        </div>
      </div>
    </ModalContainer>
  );
};

export default Modal;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;

  #modal {
    background: var(--mainWhite);
  }
`;
