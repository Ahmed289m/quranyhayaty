import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { addOrUpdateQuestion } from "../../services/apiCabins";

function useAddQuestion() {
  const queryClient = useQueryClient();
  const { mutate: addingQuestion, isLoading: isAdding } = useMutation({
    mutationFn: addOrUpdateQuestion,
    onSuccess: () => {
      toast.success("new question successfully Added");
      queryClient.invalidateQueries({
        queryKey: ["questions"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isAdding, addingQuestion };
}

export default useAddQuestion;
