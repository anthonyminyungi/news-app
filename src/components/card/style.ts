import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: flex;
  position: relative;
  width: 90%;
  height: 12rem;
  border-bottom: 1px solid #ddd;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0.5rem 0.5rem;
  transition: all 0.5s;

  @media only screen and (max-width: 767.98px) {
  }

  @media only screen and (max-width: 767.98px) and (min-width: 576px) {
  }

  @media only screen and (max-width: 979.98px) and (min-width: 768px) {
  }
`;

export const Background = styled.div`
  display:flex;
  justify-content: center;
  align-items:center;
  border-radius 4px 4px 0 0 ;
  max-height: 176px;
  cursor: pointer;
`;

export const LabelWrapper = styled.div`
  min-height: 176px;
  padding: 0 0.5rem;
  margin: 0;
  border: 0;
`;

export const LabelContent = styled.div`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;
  position: relative;
`;

export const Label = styled.div`
  display: inline-block;
  background-color: black;
  border-radius: 2px;
  border: 1px solid transparent;
  padding: 0 6px;
  height: 1.25rem;
  line-height: 1.2rem;
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  text-align: center;
`;

export const LogoWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.div<{ logo: string }>`
  background-image: url('${(props) => props.logo}');
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 120px;
  height: 120px;
`;

export const TextWrapper = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  padding: 1rem;
  overflow: hidden;
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
  padding-top: 0.8rem;
  text-align: left;
  font-size: 1rem;
  width: 100%;
`;
