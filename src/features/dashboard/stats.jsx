import {
  HiOutlineBriefcase,
  HiOutlineQuestionMarkCircle,
} from "react-icons/hi";
import Stat from "./Stat";
import { HiOutlineBanknotes, HiOutlineCalendarDays } from "react-icons/hi2";

function Stats({ questions }) {
  const numOfQuestions = questions.length;
  const numOfQuranQuestions = questions.filter(
    (q) => q.categoryName === "quran"
  ).length;
  const numOfGeneralQuestions = questions.filter(
    (q) => q.categoryName === "general"
  ).length;

  return (
    <>
      <Stat
        title="All Questions"
        value={numOfQuestions}
        color="blue"
        icon={<HiOutlineQuestionMarkCircle />}
      />
      <Stat
        title="Quran Questions"
        value={numOfQuranQuestions}
        color="green"
        icon={<HiOutlineQuestionMarkCircle />}
      />
      <Stat
        title="General Questions"
        value={numOfGeneralQuestions}
        color="indigo"
        icon={<HiOutlineQuestionMarkCircle />}
      />
    </>
  );
}

export default Stats;
