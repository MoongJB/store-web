
import 'normalize.css';
import './App.css'
import { publicRoutes } from './routes/Routes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import layoutDefault from './Layout/layoutDefault'


function App() {

  return (
    <BrowserRouter>
    <Routes>
      {publicRoutes.map((route, index) => {
        const Layout = layoutDefault
        const Page = route.element
        return (
          <Route 
            key={index}
            path={route.path}
            element={
              <Layout >
                <Page/>
              </Layout>
            }
          />
      )
      })}
      
      </Routes>
    </BrowserRouter>
  )
}

export default App
