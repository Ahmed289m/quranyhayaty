import { useQuery } from "@tanstack/react-query";
import { getQuestions } from "../../services/apiCabins";

function useQuestions() {
  const {
    isLoading,
    data: questions,
    error,
  } = useQuery({
    queryKey: ["questions"],
    queryFn: getQuestions,
  });

  return { isLoading, error, questions };
}

export default useQuestions;
