import Heading from "../ui/Heading";
import Row from "../ui/Row";
import QuestionsTable from "../features/questions/QuestionsTable";
import AddQuestion from "../features/questions/AddQuestion";
import QuestionTableOperations from "../features/questions/QuestionTableOperations";
function Questions() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All Questions</Heading>
        <QuestionTableOperations />
      </Row>
      <Row>
        <QuestionsTable />
        <AddQuestion />
      </Row>
    </>
  );
}

export default Questions;
