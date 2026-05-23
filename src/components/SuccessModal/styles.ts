import styled from "styled-components";
import { motion } from "framer-motion";

export const Overlay = styled(motion.div)`
  position: fixed;
  inset: 0;

  background: rgba(0, 0, 0, 0.45);

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 1000;
`;

export const Modal = styled(motion.div)`
  width: 420px;

  background: white;

  border-radius: 24px;

  padding: 32px;

  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.12);
`;

export const Title = styled.h2`
  text-align: center;

  margin-top: 20px;
  margin-bottom: 8px;

  color: #102a43;
`;

export const Subtitle = styled.p`
  text-align: center;

  color: #6b7280;

  font-size: 14px;

  margin-bottom: 28px;
`;

export const Summary = styled.div`
  background: #f8fafc;

  border-radius: 16px;

  padding: 20px;

  display: flex;
  flex-direction: column;
  gap: 14px;

  margin-bottom: 24px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;

  font-size: 14px;
`;

export const SecureText = styled.p`
  text-align: center;

  color: #6b7280;

  font-size: 13px;

  margin-bottom: 20px;
`;