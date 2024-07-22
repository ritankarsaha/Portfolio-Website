import styled from 'styled-components'; 

export const Heading = styled.h1` 
  text-align: center; 
  color: #4CAF50; 
  font-size: 2.5rem; 
  font-weight: bold; 
  margin-top: 20px; 
  text-transform: uppercase;
  letter-spacing: 2px;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-top: 15px;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin-top: 10px;
  }
`;

export const Content = styled.div` 
  overflow-y: auto; 
  max-height: 600px; 
  padding: 20px; 
  background-color: #f9f9f9; 
  border-radius: 10px; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px auto;
  width: 80%;

  @media (max-width: 768px) {
    width: 90%;
    padding: 15px;
  }

  @media (max-width: 480px) {
    width: 95%;
    padding: 10px;
  }
`;

export const Button = styled.button` 
  position: fixed; 
  right: 20px; 
  bottom: 40px; 
  padding: 10px 20px; 
  font-size: 1.5rem; 
  z-index: 1; 
  cursor: pointer; 
  color: #fff; 
  background-color: #4CAF50; 
  border: none; 
  border-radius: 5px; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
  }

  @media (max-width: 768px) {
    font-size: 1.25rem;
    padding: 8px 16px;
    bottom: 30px;
    right: 15px;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    padding: 6px 12px;
    bottom: 20px;
    right: 10px;
  }
`;