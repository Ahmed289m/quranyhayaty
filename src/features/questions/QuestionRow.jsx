import styled from "styled-components";
import CreateCabinForm from "./CreateQuestionForm";
import useDeleteCabin from "./useDeleteCabin";

import { HiPencil, HiTrash } from "react-icons/hi";
import { HiSquare2Stack } from "react-icons/hi2";
import useAddCabin from "./useAddQuestion";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Menus from "../../ui/Menus";
import useDeleteQuestion from "./useDeleteCabin";
import useAddQuestion from "./useAddQuestion";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
  border-radius: 5px;
`;

const Question = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Category = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;
const Sura = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Level = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

function QuestionRow({ question1 }) {
  const { categoryName, question, id, level, suraName } = question1;
  const { isDeleting, deletingQuestion } = useDeleteQuestion();

  return (
    <>
      <TableRow role="row">
        <Question>{id}</Question>
        <Category>{categoryName}</Category>
        <Question>{question}</Question>
        <Sura>{suraName}</Sura>
        <Level>{level}</Level>

        <div>
          <Modal>
            <Menus.Menu>
              <Menus.Toggle id={id} />
              <Menus.List id={id}>
                <Modal.Open opens="form-edit">
                  <Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
                </Modal.Open>
                <Modal.Open opens="Question-delete">
                  <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
                </Modal.Open>
              </Menus.List>

              <Modal.Window name="form-edit">
                <CreateCabinForm QuestionToBeEdited={question1} />
              </Modal.Window>

              <Modal.Window name="Question-delete">
                <ConfirmDelete
                  resourceName="Question"
                  disabled={isDeleting}
                  onConfirm={() => deletingQuestion(id)}
                />
              </Modal.Window>
            </Menus.Menu>
          </Modal>
        </div>
      </TableRow>
    </>
  );
}

export default QuestionRow;
