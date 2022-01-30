import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  padding: 10px 10px;
  justify-content: space-between;
  background-color: #2b3d8c;
`;
export const Logo = styled.img`
  height: 100%;
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 30px;
`;
export const Button = styled.button`
  border: none;
  background-color: transparent;
  margin-right: 10px;
  color: #f1f1e6;
  font-weight: 500;
  letter-spacing: 1px;
  font-size: 1rem;
  padding: 5px 10px;
  &:hover {
    cursor: pointer;
    color: #ff816a;
  }
`;
