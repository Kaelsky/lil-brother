import { FiUsers } from "react-icons/fi";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;

  border-radius: 6px;
  background: rgba(0, 0, 0, 0.4);
  padding: 1em;
  font-weight: 300;
`;

const Indicator = styled.span`
  font-weight: 600;
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  color: ${({ hasData }) => (hasData ? "#2ecc71" : "#e74c3c")};
  margin-right: 10px;
  padding-right: 10px;
`;

const DataStatus = ({ data }) => (
  <Wrapper>
    <Indicator hasData={data.length}>
      <FiUsers style={{ marginRight: "4px" }} />
      {data.length}
    </Indicator>
    <span>DataSet {data.length ? "loaded" : "empty"}</span>
  </Wrapper>
);

export default DataStatus;
