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

export async function logoutApi() {
  let { error } = await supabase.auth.signOut();
  if (error) throw new Error("counldnt login");
}

export async function signupApi({ email, password, fullname }) {
  console.log(email);

  let { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: "http://localhost:5173/login",
      data: {
        fullname,
      },
    },
  });

  if (error) console.log(error.message);
  return data;
}
