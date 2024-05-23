import Header from "../containers/Header/Header";
import Nav from '../containers/Header/Nav'
import Footer from '../containers/Footer/Footer'
const layoutDefault = ({children}) => {
  return ( 
    <>
    <Header/>
    <Nav/>
    {children}
    <Footer/>
    </>
   );
}
 
export default layoutDefault;