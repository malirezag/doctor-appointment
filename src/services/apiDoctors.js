import supabase from "../../supabase";

export async function getDoctors({ speciality, searchValue }) {
  if (speciality) {
    let { data: doctors, error } = await supabase
      .from("doctors")
      .select("*")
      .eq("speciality", speciality);
    if (error) throw new Error("could not fetch doctors");
    return doctors;
  } else {
    let { data: doctors, error } = await supabase
      .from("doctors")
      .select("*")
      .ilike("fullname", `%${searchValue ? searchValue : ""}%`);

    if (error) throw new Error("could not fetch doctors");
    return doctors;
  }
}

export async function setTime({ doctorId, time }) {
  console.log(doctorId, time);

  const { data, error } = await supabase
    .from("doctors")
    .update({ [time]: true })
    .eq("id", doctorId)
    .select();

  if (error) throw new Error("Could not update the time");
  return data;
}
