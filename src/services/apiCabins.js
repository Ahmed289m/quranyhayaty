import supabase from "./supabase";

export async function getQuestions() {
  let { data, error } = await supabase.from("questions").select("*");
  if (error) {
    console.error(error);
    throw new Error("Questions could not be loaded");
  }
  return data;
}
export async function deleteQuestions(id) {
  const { error } = await supabase.from("questions").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Question can not be deleted");
  }
}

export async function addOrUpdateQuestion(newQuestion, id) {
  let query = supabase.from("questions");

  //Create

  if (!id) query = query.insert([newQuestion]);

  //Update

  if (id) query = query.update(newQuestion).eq("id", id);

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("Question can not be added");
  }

  return data;
}
