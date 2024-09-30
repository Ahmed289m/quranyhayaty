import Filter from "../../ui/Filter";
import TableOperations from "../../ui/TableOperations";
function QuestionTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterName="categoryName"
        options={[
          { value: "all", name: "All" },
          { value: "quran", name: "Quran Questions" },
          { value: "general", name: "Islamic General" },
        ]}
      />
      <Filter filterName="suraName" select={true} />
    </TableOperations>
  );
}

export default QuestionTableOperations;
