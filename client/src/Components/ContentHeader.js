import React from "react";
import styled from "styled-components";
import DateModal from "./common/DateModal";

const ContentHeaderBlock = styled.div`
  background-color: #eaf6ff;
  margin: 2rem;
  height: 20vh;
  width: 80%;
  display: flex;
  align-items: center;
`;

const ContentBlock = styled.div`
  flex: 1;
`;

const ContentInfo = styled.div`
  span:nth-child(1) {
    font-weight: 600;
    font-size: 2rem;

    @media (max-width: 790px) {
      font-size: 1rem;
    }
  }
`;

const ContentHeader = ({
  yearInfo,
  monthInfo,
  used,
  remained,
  isBudget,
  savingGoalSum,
  budgetSum,
}) => {
  return (
    <ContentHeaderBlock>
      <ContentBlock>
        <ContentInfo>
          <span>
            {yearInfo}년 {monthInfo}월 {isBudget ? "남은금액" : "남은목표액"}{" "}
            {remained < 0 ? 0 : remained}원
          </span>
          {isBudget ? (
            <span>
              {` (소비율 ` +
                Math.floor((1 - (budgetSum - used) / budgetSum) * 100, 2) +
                `%)`}
            </span>
          ) : (
            <span>
              {` (달성률 ` +
                Math.floor(
                  (1 - (savingGoalSum - used) / savingGoalSum) * 100,
                  2,
                  2
                ) +
                `%)`}
            </span>
          )}
        </ContentInfo>
      </ContentBlock>
      <div>
        <DateModal />
      </div>
    </ContentHeaderBlock>
  );
};

export default ContentHeader;
