import React from "react";
import Navbar from "./components/navbar.component";
import Banner from "./components/banner.component";
import { Cards } from "./components/cards.component";
import { Search } from "./components/search.component";
import { Footer } from "./components/footer.component";

class App extends React.Component{
    render(){
      return(
        <>
          <Navbar/>
          <Banner/>
          <Cards/>
          <Search/>
          <Footer/>
        </>

      );
    }
}

export default App;