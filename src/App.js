import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./routes/Home";
import Results from "./routes/Results";
import Tables from "./routes/Tables";
import './css/common.css'
import { connect } from "react-redux";
import Nft from "./routes/Nft";
import SignIn from "./routes/SignIn";
import SignUp from "./routes/SignUp";
import SignUpPersonal from "./routes/SignUpPersonal";
import SignUpEnterprise from "./routes/SignUpEnterprise";

function App({ clubs, matchs }) {
  return (
    <BrowserRouter>
      <Header />
      <div className="contents">
        <Routes>
          <Route path='premierLeague/*' element={<Home clubs={clubs} />}></Route>
          <Route path='premierLeague/result' element={<Results clubs={clubs} matchs={matchs} />}></Route>
          <Route path='premierLeague/table' element={<Tables clubs={clubs} matchs={matchs} />}></Route>
          <Route path='premierLeague/nft' element={<Nft></Nft>}></Route>
          <Route path='premierLeague/signin' element={<SignIn></SignIn>}></Route>
          <Route path='premierLeague/signup' element={<SignUp></SignUp>}></Route>
          <Route path='premierLeague/signup/personal' element={<SignUpPersonal></SignUpPersonal>}></Route>
          <Route path='premierLeague/signup/enterprise' element={<SignUpEnterprise></SignUpEnterprise>}></Route>
        </Routes>
      </div>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

function mapStateToProps(state) {
  const { clubs, matchs } = state;
  return { clubs, matchs }
}

export default connect(mapStateToProps)(App);
