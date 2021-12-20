import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./routes/Home";
import Match from "./routes/Match";
import Table from "./routes/Table";
import './css/common.css'
import { connect } from "react-redux";

function App({teams}) {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='premierLeague/*' element={<Home teams={teams}/>}></Route>
        <Route path='premierLeague/match' element={<Match teams={teams}/>}></Route>
        <Route path='premierLeague/table' element={<Table teams={teams}/>}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

function mapStateToProps(state){
    const {teams} = state;
    return {teams}
}

export default connect(mapStateToProps)(App);
