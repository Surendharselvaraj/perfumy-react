import Navbar from "./components/Navbar"
import Products from "./components/product"
import Search from "./components/Searchbar"
import About from "./components/about"
import Footer from "./components/footer"

function App(){
return(
  <div>
    <Navbar></Navbar>
    <Search></Search>
    <Products></Products>
    <About></About>
    <Footer></Footer>
  </div>
)
}
export default App 
