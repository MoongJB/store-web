import Body from "../containers/Body/Body"
import SignIn from "../containers/Authen/Login"
import SignUp from "../containers/Authen/SignUp"

export const publicRoutes = [
  {
    path: '/signin',
    element: SignIn
  },
  {
    path: '/signup',
    element: SignUp
  },
  {
    path: '/',
    element: Body
  }
  
]