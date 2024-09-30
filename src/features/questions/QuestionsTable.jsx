import Spinner from "../../ui/Spinner";

import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import Empty from "../../ui/Empty";
import { useSearchParams } from "react-router-dom";
import useQuestions from "./useQuestions";
import { suras } from "../../../data/suras";
import QuestionRow from "./QuestionRow";

function QuestionsTable() {
  const { isLoading, questions } = useQuestions();

  const [searchParams] = useSearchParams();
  if (isLoading) return <Spinner />;
  if (!questions.length) return <Empty resourceName="questions" />;
  //For Filtration
  const filterValue = searchParams.get("categoryName") || "all";

  let filteredQuestions;

  if (filterValue === "all") filteredQuestions = questions;
  if (filterValue === "quran")
    filteredQuestions = questions.filter(
      (question) => question.categoryName === "quran"
    );
  if (filterValue === "general")
    filteredQuestions = questions.filter(
      (question) => question.categoryName === "general"
    );

  const filterValueForSuars = searchParams.get("suraName") || "all";

  for (var i = 1; i < suras.length; i++) {
    if (suras[i] === filterValueForSuars) {
      filteredQuestions = questions.filter(
        (question) => question.suraName === suras[i]
      );
    }
  }

  return (
    <Menus>
      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header>
          <div></div>
          <div>Category</div>
          <div>Question</div>
          <div>Sura Name</div>
          <div>Difficulty</div>

          <div></div>
        </Table.Header>
        <Table.Body
          render={(question) => (
            <QuestionRow question1={question} key={question.id} />
          )}
          data={filteredQuestions}
        ></Table.Body>
      </Table>
    </Menus>
  );
}

export default QuestionsTable;
