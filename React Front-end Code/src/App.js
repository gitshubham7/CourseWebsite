import logo from './logo.svg';
import './App.css';
import { Button, Col, Container, ListGroupItem, Row } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import Home from "./components/Home";
import Course from "./components/Course";
import Allcourses from "./components/Allcourses";
import AddCourse from './components/AddCourse';
import Header from './components/Header';
import Menus from './components/Menus';
import { BrowserRouter as Router, Link, Route, Routes, Switch } from 'react-router-dom';
// import { createBrowserHistory } from 'history';
// export const history = createBrowserHistory();

function App() {
  const btnHandle = () => {
    toast("this is my first message");
  }
  return (
    <div>
      <Router>
        <ToastContainer />

        <Container>
          <Header />
          <Row>
            <Col md={4}>
              <Menus />
            </Col>
            <Col md={8}>
              {/* <Home/> */}
              {/* <Allcourses/>
              <AddCourse/> */}
              <>
                
                <Route exact path="/" component={Home} />
                <Route path="/add-course" component={AddCourse} />
                <Route path="/view-courses" component={Allcourses} />
              </>

            </Col>
          </Row>

        </Container>

      </Router>
    </div>
  );
}

export default App;
