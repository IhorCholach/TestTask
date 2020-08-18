import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  /* margin-top: 20px; */
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  position: fixed;
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
  background-color: white;
`;

export const HeaderItem = styled.span`
  color: black;
  font-size: 15px;
  padding: 10px;
  margin-left: 10px;
  width: 200px;
  text-align: center;
`;
