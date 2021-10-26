import styled, { keyframes } from "styled-components";
import PropTypes from "prop-types";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
`;

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ inline }) =>
    !inline &&
    `
      height: 100%;
      width: 100%;
    `}
`;

const SpinnerBase = styled.div`
  width: 40px;
  height: 40px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: #fff;
  animation: ${spin} 0.6s ease-in-out infinite;
`;

const Spinner = ({ inline }) => (
  <SpinnerWrapper inline={inline}>
    <SpinnerBase />
  </SpinnerWrapper>
);

Spinner.propTypes = {
  inline: PropTypes.bool,
};
Spinner.defaultProps = {
  inline: false,
};

export default Spinner;
