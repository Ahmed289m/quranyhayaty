import styled from "styled-components";
import Stats from "./stats";
import Spinner from "../../ui/Spinner";
import useQuestions from "./useQuestions";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const { isLoading, questions } = useQuestions();

  if (isLoading) return <Spinner />;
  return (
    <StyledDashboardLayout>
      <Stats questions={questions} />
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
