import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./routes/Home";
import Results from "./routes/Results";
import Tables from "./routes/Tables";
import './css/common.css'
import { connect } from "react-redux";

function App({clubs,matchs}) {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='premierLeague/*' element={<Home clubs={clubs}/>}></Route>
        <Route path='premierLeague/result' element={<Results clubs={clubs} matchs={matchs}/>}></Route>
        <Route path='premierLeague/table' element={<Tables clubs={clubs} matchs={matchs}/>}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

function mapStateToProps(state){
    const {clubs,matchs} = state;
    return {clubs,matchs}
}

export default connect(mapStateToProps)(App);
