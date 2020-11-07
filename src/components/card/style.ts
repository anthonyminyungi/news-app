import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: flex;
  position: relative;
  width: 90%;
  height: 13rem;
  border-bottom: 1px solid #ddd;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  padding-bottom: 1rem;
  transition: all 0.5s;
`;

export const Background = styled.div`
  display:flex;
  justify-content: center;
  align-items:center;
  border-radius 4px 4px 0 0 ;
  max-height: 176px;
  cursor: pointer;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 1rem;
  overflow: hidden;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

export const Title = styled.div`
  text-align: left;
  font-size: 1.5rem;
  font-weight: bold;
  width: 100%;
`;

export const Description = styled.div`
  text-align: left;
  font-size: 1rem;
  width: 100%;
`;

export const MetaInfo = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: left;
  font-size: 0.85rem;
  width: 100%;
  color: #888;
  cursor: auto;
`;

export const StarIcon = styled.i`
  display: flex;
  align-items: center;
  height: 100%;
  font-size: 1.25rem;
  color: #ccc;
  cursor: pointer;
`;
