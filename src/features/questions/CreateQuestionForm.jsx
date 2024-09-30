import { useForm } from "react-hook-form";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";

import useAddQuestion from "./useAddQuestion";
import useEditQuestion from "./useEditQuestions";
import { Select } from "../../ui/Filter";
import { suras } from "../../../data/suras";

function CreateQuestionForm({ QuestionToBeEdited = {}, onCloseModal }) {
  console.log(QuestionToBeEdited);
  const { id: editedQuestionId, ...editedValues } = QuestionToBeEdited;
  const isEditingForm = Boolean(editedQuestionId);
  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: isEditingForm ? editedValues : {},
  });

  const { errors } = formState;

  const { addingQuestion, isAdding } = useAddQuestion();
  const { isEditing, editingQuestion } = useEditQuestion();

  const addingOrEditing = isAdding || isEditing;

  function onSubmit(data) {
    if (isEditingForm) {
      editingQuestion(
        {
          newQuestionData: data,
          id: editedQuestionId,
        },
        {
          onSuccess: () => {
            reset();
            onCloseModal();
          },
        }
      );
    } else {
      addingQuestion(data, {
        onSuccess: () => {
          reset();
          onCloseModal();
        },
      });
    }
  }
  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      type={onCloseModal ? "modal" : "regular"}
    >
      <FormRow label="Question" error={errors?.question?.message}>
        <Input
          type="text"
          id="question"
          {...register("question", {
            required: "This Field Is Required",
          })}
        />
      </FormRow>

      <FormRow error={errors?.answers?.message} label="Answers">
        <Textarea
          type="text"
          id="answers"
          {...register("answers", {
            required: "This Field Is Required",
          })}
        />
      </FormRow>

      <FormRow error={errors?.correctAnswer?.message} label="Correct Answer">
        <Input
          type="text"
          id="correctAnswer"
          {...register("correctAnswer", {
            required: "This Field Is Required",
          })}
        />
      </FormRow>

      <FormRow error={errors?.suraName?.message} label="Suar Name">
        <Select
          id="suraName"
          {...register("suraName", {
            required: "This Field Is Required",
          })}
        >
          {suras.map((sura) => (
            <option value={sura} key={sura}>
              {sura}
            </option>
          ))}
        </Select>
      </FormRow>

      <FormRow error={errors?.level?.message} label="Difficulty">
        <Select
          id="level"
          {...register("level", {
            required: "This Field Is Required",
          })}
        >
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </Select>
      </FormRow>
      <FormRow error={errors?.categoryName?.message} label="Category">
        <Select
          id="categoryName"
          {...register("categoryName", {
            required: "This Field Is Required",
          })}
        >
          <option value="quran">Quran Questions</option>
          <option value="general">General Islamic Questions</option>
        </Select>
      </FormRow>

      <FormRow>
        <Button
          variation="secondary"
          type="reset"
          onClick={() => onCloseModal?.()}
        >
          Cancel
        </Button>
        <Button disabled={addingOrEditing}>
          {isEditingForm ? "Edit Question" : "Add Question"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateQuestionForm;
