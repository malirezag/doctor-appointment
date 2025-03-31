import supabase from "../../supabase";

export async function getUserApi() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user;
}

export async function loginApi({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw new Error("counldnt login");

  return data;
}
