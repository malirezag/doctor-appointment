import supabase from "../../supabase";

export async function getReservations() {
  let { data: reservations, error } = await supabase
    .from("reservations")
    .select("*");

  if (error) throw new Error("couldnt fetch reservations");

  return reservations;
}

export async function setReservations({ reservation }) {
  const { data, error } = await supabase
    .from("reservations")
    .insert([reservation])
    .select();

  if (error) throw new Error("couldnt insert reservations to the table");

  return data;
}
