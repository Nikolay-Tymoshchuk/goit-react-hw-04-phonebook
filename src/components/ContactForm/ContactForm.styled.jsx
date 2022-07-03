import styled from '@emotion/styled/';

export const Form = styled.form`
  width: 80%;
  display: flex;
  flex-direction: column;
`;

export const Field = styled.input`
  margin: 2% 0 6% 0;
  border-radius: 5px;
  height: 30px;
  border: none;
  font-size: 1em;

  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  /* cursor: pointer;
  display: inline-block;
  margin-left: auto;
  margin-right: auto;
  height: 30px;
  text-transform: uppercase;
  letter-spacing: 0em;
  transition: 300ms ease-in-out;
  border-radius: 2px;
  border: 1px solid #fff;

  &:hover {
    letter-spacing: 0.1em;
    transition: 300ms ease-in-out;
    background-color: inherit;
    color: #fff;
  } */
  margin-top: 10px;
  display: inline-block;
  transform: scaleX(0.9);
  cursor: pointer;
  position: relative;
  color: #000;
  background-color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1em;
  padding: 10px 15px;
  transition: 0.5s;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 5px;

  &:hover {
    border: 1px solid #fff;
    outline: none;
    letter-spacing: 0.25em;
    background: inherit;
    color: #fff;
    box-shadow: 0 0 20px #fff;
    transform: scaleX(1);
  }

  &::before {
    content: '';
    position: absolute;
    inset: 2px;
    background-color: inherit;
  }

  & span {
    position: relative;
    z-index: 1;
  }

  & i {
    position: absolute;
    inset: 0;
    display: block;

    &:before {
      content: '';
      position: absolute;
      left: 80%;
      top: -3px;
      width: 10px;
      height: 5px;
      border: 2px solid #000;
      background: #fff;
      transform: translateX(-50%);
      transition: 0.5s;
    }

    &:after {
      content: '';
      position: absolute;
      left: 20%;
      bottom: -3.5px;
      width: 10px;
      height: 5px;
      border: 2px solid #000;
      background: #fff;
      transform: translateX(-50%);
      transition: 0.5s;
    }
  }

  &:hover i:before {
    border: 2px solid #fff;
    background: #000;
    width: 20px;
    left: 20%;
    transform: translateX(-10px);
  }

  &:hover i:after {
    border: 2px solid #fff;
    background: #000;
    width: 20px;
    left: 80%;
    transform: translateX(-10px);
  }
`;
