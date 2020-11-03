import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { onAuthStateChanged } from "firebase/client";

export const USER_STATE = {
  NOT_KNOW: undefined,
  NOT_LOGGED: null,
};

export default function useUser() {
  const [user, setUser] = useState(USER_STATE.NOT_KNOW);

  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(setUser);
  }, []);

  useEffect(() => {
    user === USER_STATE.NOT_LOGGED && router.push("/");
  }, [user]);

  console.log(user);
  return user;
}
