import axios from "axios";
import { React } from "react";
import { toast } from "react-toastify";
import { Card, CardBody, CardTitle, CardSubtitle, CardText, CardFooter, Container,Button } from "reactstrap";
import base_url from "../API/bootapi";

const Course=({course,update})=>{
    const deleteCourse=(id)=>{
        axios.delete(`${base_url}/courses/${id}`).then(
            (response)=>{
                toast.success("course deleted");
                update(id);
            },
            (error)=>{
                toast.error("Course not deleted || Server Problem");
            }
        )
    }
    return(
        <Card className="text-center">
            <CardBody>
                <CardSubtitle className="fw-bold">{course.title}</CardSubtitle>
                    <CardText>{course.description}</CardText>

                    <Container className="text-center">
                        <Button color="danger"
                            onClick={()=>{
                                deleteCourse(course.id);
                            }}
                        >Delete</Button>
                        <Button style={{"margin-left": "1rem"}} color="warning">Update</Button>
                    </Container>
                
            </CardBody>
        </Card>
    )
}

export default Course;