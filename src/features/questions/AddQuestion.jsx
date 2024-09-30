import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateQuestionForm from "./CreateQuestionForm";

function AddQuestion() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="question-form">
          <Button>Add new question</Button>
        </Modal.Open>
        <Modal.Window name="question-form">
          <CreateQuestionForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}
export default AddQuestion;
