import { ref } from "vue";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import { firebaseAuth } from "./useFirebase";

const isAuthenticated = ref(false);
const user = ref("");

const useAuth = () => {
  const googleLogin = async () => {
    const provider = new GoogleAuthProvider();
    const credentials = await signInWithPopup(firebaseAuth, provider);

    // If user exists
    if (credentials.user) {
      isAuthenticated.value = true;
      user.value = credentials.user.displayName;
    }
  };

  const login = async (username, password) => {
    // Need to get a response from the credentials
    const credentials = await signInWithEmailAndPassword(
      firebaseAuth,
      username,
      password
    );

    // If user exists
    if (credentials.user) {
      isAuthenticated.value = true;
      user.value = credentials.user.email;
    }
  };

  const signup = async (username, password) => {
    // Need to get a response from the credentials
    const credentials = await createUserWithEmailAndPassword(
      firebaseAuth,
      username,
      password
    );

    // If user exists
    if (credentials.user) {
      isAuthenticated.value = true;
      user.value = credentials.user.email;
    }
  };

  const logout = async () => {
    await signOut(firebaseAuth);
    isAuthenticated.value = false;
    user.value = "";
  };

  return { isAuthenticated, login, signup, logout, user, googleLogin };
};

export default useAuth;
