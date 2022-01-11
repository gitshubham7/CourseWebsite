import Jumbotron from "bootstrap-4-react/lib/components/Jumbotron";
import { React, useEffect } from "react";
import { Container, Button } from "reactstrap";


const Home = () => {

    useEffect(()=>{
        document.title="Home";
    },[]); 

    return (
        <div>
            <Jumbotron className="text-center">
                <h1>Jumbotron Example</h1>
                <p>Or, keep it light and add a border for some added definition to the boundaries of your content. Be sure to look under the hood at the source HTML here as we've adjusted the alignment and sizing of both column's content for equal-height..</p>
                <Container>
                    <Button color="primary" outline>
                        Start Using
                    </Button>
                </Container>
            </Jumbotron>

        </div>


    )
}

export default Home;