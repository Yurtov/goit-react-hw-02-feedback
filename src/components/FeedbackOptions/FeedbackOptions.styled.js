import styled from 'styled-components';


export const ButtonsList = styled.div`
  display: flex;
  gap: 10px;
  margin: 10px;
`;

export const Button = styled.button`
 width: 70px;
 height: 40px;
 border-radius: 20%;
 text-transform: capitalize;
 cursor: pointer;
 font-size: 17px;
 :hover {
    background-color: #999da3;
 }
`;
