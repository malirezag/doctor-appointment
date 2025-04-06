import supabase from "../../supabase";

export async function getReservations({ userId = "" }) {
  let { data: reservations, error } = await supabase
    .from("reservations")
    .select("*,doctor(fullname,photo)")
    .eq("patient", userId);

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
