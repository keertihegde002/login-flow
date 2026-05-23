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

export const TopBar = styled.div`
  width: 340px;
  height: 4px;

  border-radius: 999px;

  background: ${({ theme }) =>
    theme.colors.primary};

  margin: 0 auto 40px auto;
`;

export const OTPWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const InputLabel = styled.label`
  font-size: 14px;
  color: ${({ theme }) =>
    theme.colors.textSecondary};
`;

export const Select = styled.select`
  width: 90px;
  height: 50px;

  border-radius: 12px;
  border: 1px solid
    ${({ theme }) => theme.colors.border};

  padding: 0 12px;

  outline: none;

  transition: 0.2s ease;

  &:focus {
    border-color: ${({ theme }) =>
      theme.colors.primary};
  }
`;

export const Input = styled.input`
  flex: 1;
  height: 50px;

  border-radius: 12px;
  border: 1px solid
    ${({ theme }) => theme.colors.border};

  padding: 0 16px;

  outline: none;

  transition: 0.2s ease;

  &:focus {
    border-color: ${({ theme }) =>
      theme.colors.primary};
  }
`;

export const PhoneRow = styled.div`
  display: flex;
  gap: 14px;
`;

export const CountrySelect = styled.select`
  width: 110px;
  height: 52px;

  border-radius: 12px;

  border: 1px solid
    ${({ theme }) => theme.colors.border};

  padding: 0 12px;

  outline: none;

  background: white;

  transition: 0.2s ease;

  &:focus {
    border-color: ${({ theme }) =>
      theme.colors.primary};

    box-shadow: 0px 0px 0px 4px
      rgba(11, 95, 255, 0.1);
  }
`;