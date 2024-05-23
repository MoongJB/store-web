import Body from "../containers/Body/Body";
import SignIn from "../containers/Authen/SignIn";
import SignUp from "../containers/Authen/SignUp";

export const publicRoutes = [
  {
    path: "/sign-in",
    element: SignIn,
  },
  {
    path: "/sign-up",
    element: SignUp,
  },
  {
    path: "/",
    element: Body,
  },
];
