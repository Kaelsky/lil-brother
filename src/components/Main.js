import { useRef, useState } from "react";
import styled from "styled-components";
import { FiEye } from "react-icons/fi";
import DataStatus from "./DataStatus";
import People from "./People";
import Trajectories from "./Trajectories";
import Stats from "./Stats";
import { blink } from "../utils/animations";

const MainBase = styled.div`
  padding: 2em;
  color: snow;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h1`
  display: flex;
  align-items: center;
`;

const Logo = styled(FiEye)`
  margin-right: 10px;
  animation: ${blink} 5s infinite ease-in-out 2s;
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  & > div {
    display: flex;
    flex-direction: column;

    border-radius: 6px;
    background: rgba(0, 0, 0, 0.4);
    padding: 1em;
  }

  & h2 {
    display: flex;
    align-items: center;
    margin: 0;
    margin-bottom: 1em;

    & > svg {
      margin-right: 6px;
    }
  }
`;

const Main = ({ data = [] }) => {
  const [selectedId, setselectedId] = useState(null);
  const lineChartRef = useRef();

  const resetTrajectories = () => {
    setselectedId(null);

    data.forEach((_person, idx) => lineChartRef.current.show(idx));
  };

  const showTrajectory = (index) => {
    setselectedId(index);

    data.forEach((_person, idx) => {
      idx !== index
        ? lineChartRef.current.hide(idx)
        : lineChartRef.current.show(index);
    });
  };

  return (
    <MainBase>
      <Header>
        <Title>
          <Logo />
          <span>Lil Brother</span>
        </Title>
        <DataStatus data={data} />
      </Header>

      <Content>
        <People
          data={data}
          onClick={showTrajectory}
          onReset={resetTrajectories}
        />

        <Trajectories innerRef={lineChartRef} data={data} />

        <Stats data={data} selectedId={selectedId} />
      </Content>
    </MainBase>
  );
};

export default Main;
