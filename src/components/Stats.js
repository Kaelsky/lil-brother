import styled from "styled-components";
import { FiActivity, FiWatch, FiMapPin, FiChevronsRight } from "react-icons/fi";

const Wrapper = styled.div`
  width: 100%;
`;

const StatsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 1em;

  & > span {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1em;
  }

  & svg {
    font-size: 40px;
    margin: 10px;
  }
`;

// Get the edian value from an array
const getMedian = (values) => {
  values.sort((a, b) => a - b);
  const half = Math.floor(values.length / 2);
  if (values.length % 2) return values[half];
  return (values[half - 1] + values[half]) / 2.0;
};

const Stats = ({ data, selectedId }) => {
  const isDisabled = selectedId === null;

  const getTrajectoryLength = () => {
    const timeValues = data[selectedId]?.points.map(({ time }) => time);
    const diff = Math.max(...timeValues) - Math.min(...timeValues);
    return diff;
  };

  const getMedianSpeed = () => {
    let timeValues = [];
    let xValues = [];
    let yValues = [];

    data[selectedId]?.points.forEach(({ time, x, y }) => {
      timeValues = [...timeValues, time];
      xValues = [...xValues, x];
      yValues = [...yValues, y];
    });

    const medianSpeed = getMedian(timeValues) / timeValues.length;
    const medianX = getMedian(xValues) / xValues.length;
    const medianY = getMedian(yValues) / yValues.length;

    return parseFloat(medianX + medianY / medianSpeed).toPrecision(4);
  };

  const getStopNumber = () => {
    let stops = 0;

    data[selectedId]?.points.reduce((sum, acc) => {
      if (acc.x === sum?.x || acc.y === sum?.y) stops++;
      return sum;
    });

    return stops;
  };

  return (
    <Wrapper>
      <h2>
        <FiActivity />
        <span className="mobile-hide">Did you know ?</span>
      </h2>
      {isDisabled ? (
        <span style={{ fontWeight: 300 }}>
          Select a profile to know more about him
        </span>
      ) : (
        <>
          <StatsWrapper>
            <span>
              <FiWatch />
              Total trajectory length: {getTrajectoryLength()} s
            </span>
            <span>
              <FiChevronsRight />
              Median speed: {getMedianSpeed()} m/s
            </span>
            <span>
              <FiMapPin />
              Number of stops: {getStopNumber()}
            </span>
          </StatsWrapper>
        </>
      )}
    </Wrapper>
  );
};

export default Stats;
