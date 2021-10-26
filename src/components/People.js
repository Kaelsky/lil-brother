import styled from "styled-components";
import { FiUser, FiUsers } from "react-icons/fi";
import { COLORS } from "../utils/constants";
import { fadeFromLeft } from "../utils/animations";

const Wrapper = styled.div`
  max-width: 10%;
  flex: 1;
`;

const PeopleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const PeopleButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  pborder: 0;
  padding: 0;
  border: 0;
  background: ${({ color }) => color};
  cursor: pointer;
  padding: 0.5em;
  border-radius: 4px;
  color: ${({ color }) => (color ? "snow" : "#34495e")};

  font-size: 14px;
  font-weight: 600;
  vertical-align: middle;
  transition: all 0.1s ease;
  animation: ${fadeFromLeft} 0.5s ease-in-out
    ${({ index }) => (index ? index / 10 : 0)}s backwards;

  & > span {
    transition: all 0.3s ease;
    margin: 0 auto;
  }

  :not(:first-child) {
    margin-bottom: 6px;
  }

  &:hover {
    transform: scaleX(1.03);
  }
  &:active {
    transform: scale(0.98);
  }
`;

const Separator = styled.hr`
  width: 40%;
  margin: 8px auto;
  opacity: 0.2;
`;

const People = ({ data, onReset, onClick }) => {
  return (
    <Wrapper>
      <h2>
        <FiUsers />
        <span className="mobile-hide">People</span>
      </h2>

      <PeopleWrapper>
        <PeopleButton onClick={onReset}>All</PeopleButton>
        <Separator />
        {data.map((person, index) => (
          <PeopleButton
            key={index}
            index={index}
            onClick={() => onClick(index)}
            color={COLORS[index]}
          >
            <FiUser /> <span>{person.id}</span>
          </PeopleButton>
        ))}
      </PeopleWrapper>
    </Wrapper>
  );
};

export default People;
