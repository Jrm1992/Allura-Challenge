import GoogleLogo from "../../../public/GoogleLogo.svg";
import { auth, provider } from "../../config/firebase";
import { useGlobalContext } from "../../context";

import { signInWithPopup } from "firebase/auth";

export default function SignIn({ setUser }: any) {
  const { setPostCode } = useGlobalContext();

  function handleLogin() {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        setPostCode((prevState: any) => {
          return {
            ...prevState,
            Author: {
              Name: user.displayName,
              avatarURL: user.photoURL,
            },
          };
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div
      className="flex gap-2 bg-white text-gray-800 font-semibold p-2 px-5 rounded cursor-pointer"
      onClick={handleLogin}
    >
      <GoogleLogo />
      <span>Sign in with Google</span>
    </div>
  );
}
