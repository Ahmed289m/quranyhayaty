import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteQuestions } from "../../services/apiCabins";
import toast from "react-hot-toast";

function useDeleteQuestion() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deletingQuestion } = useMutation({
    mutationFn: deleteQuestions,
    onSuccess: () => {
      toast.success("question successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["questions"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deletingQuestion };
}

export default useDeleteQuestion;
