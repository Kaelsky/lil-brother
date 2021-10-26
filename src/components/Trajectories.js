import { forwardRef } from "react";
import styled from "styled-components";
import { FiGitBranch } from "react-icons/fi";
import { COLORS } from "../utils/constants";
import { Line } from "react-chartjs-2";

const Wrapper = styled.div`
  max-width: 90%;
  flex: 1;
`;

const orderByTime = (data) =>
  data.map(({ id, points }) => {
    const sortedPoints = points.sort((a, b) => a.time - b.time);
    return { id, points: sortedPoints };
  });

const LineChart = forwardRef(({ data, onClick }, ref) => {
  const orderedData = orderByTime(data);

  const dataset = {
    datasets: orderedData.map((path, index) => ({
      label: `Position of ${path.id}`,
      data: path.points,
      fill: false,
      backgroundColor: COLORS[index],
      borderColor: COLORS[index],
      pointStyle: "circle",
      pointRadius: 6,
    })),
  };

  const options = {
    lineTension: 0.5,
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            const label = context.dataset.label || "";

            console.log(context);

            const newLabel = `${label} at T=${context.raw.time}: ${context.formattedValue}`;
            return newLabel;
          },
        },
      },
    },
    scales: {
      x: {
        type: "linear",
      },
    },
  };

  return <Line ref={ref} data={dataset} options={options} onClick={onClick} />;
});

const Trajectories = ({ data, innerRef }) => (
  <Wrapper>
    <h2>
      <FiGitBranch />
      <span className="mobile-hide">Trajectories</span>
    </h2>
    <LineChart ref={innerRef} data={data} />
  </Wrapper>
);

export default Trajectories;
