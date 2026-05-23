import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;

  display: grid;
  grid-template-columns: 1fr 1fr;

  background: #f8fafc;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const LeftSection = styled.div`
  padding: 60px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const HeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const SmallText = styled.p`
  font-size: 32px;
  color: #102a43;
`;

export const Heading = styled.h1`
  font-size: 64px;
  line-height: 1.1;

  color: #102a43;
`;

export const Subtitle = styled.p`
  color: #6b7280;
`;

export const Illustration = styled.div`
  height: 320px;

  border-radius: 24px;

  background: white;

  border: 1px dashed #d1d5db;
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 40px;
`;

export const Card = styled.div`
  width: 100%;
  max-width: 540px;

  min-height: 760px;

  background: white;

  border-radius: 24px;

  padding: 48px;

  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.06);

  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  font-size: 32px;
  line-height: 1.4;

  color: #102a43;

  margin-bottom: 40px;
`;

export const Options = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const Bottom = styled.div`
  margin-top: auto;

  display: flex;
  justify-content: space-between;
`;