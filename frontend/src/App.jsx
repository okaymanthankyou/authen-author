import './assets/styles.css'
import Content from './components/Content'
import Header from './components/Header'
import Footer from './components/Footer'
import Register from './components/Register'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './components/Login'

function App() {
  return (
    <>
        <BrowserRouter>
		    <Header />
          <Routes>
            <Route path='/' element={<Content />} />
	        	<Route path='register/' element={<Register/>}/>
            <Route path='login/' element={<Login/>}/>
          </Routes>
			  <Footer />
        </BrowserRouter>
    </>
  )
}

export default App
