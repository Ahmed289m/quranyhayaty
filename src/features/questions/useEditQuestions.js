import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { addOrUpdateQuestion } from "../../services/apiCabins";

function useEditQuestion() {
  const queryClient = useQueryClient();
  const { mutate: editingQuestion, isLoading: isEditing } = useMutation({
    mutationFn: ({ newQuestionData, id }) =>
      addOrUpdateQuestion(newQuestionData, id),
    onSuccess: () => {
      toast.success("Question successfully Edited");
      queryClient.invalidateQueries({
        queryKey: ["questions"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isEditing, editingQuestion };
}

export default useEditQuestion;
