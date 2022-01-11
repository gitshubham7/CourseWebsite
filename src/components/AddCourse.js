import { React, useEffect, useState } from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import axios from "axios";
import base_url from './../API/bootapi';
import { toast } from "react-toastify";

const AddCourse = () => {
    useEffect(()=>{
        document.title="Add Course";
    },[]);
     
    const[course, setCourse]=useState({});

    //form handler function
    const handleForm=(e)=>{
        console.log(course);
        postDatatoServer(course);
        e.preventDefault();
    }

    //craeting function to post data on server
    const postDatatoServer=(data)=>{
         axios.post(`${base_url}/courses`,data).then(
             (response)=>{
                console.log(response);
                console.log("success");
                toast.success("Course added Successfully");
             },
             (error)=>{
                console.log(error);
                console.log("error");
                toast.error("Error ! Something went wrong");
             }
         )
    };

    return (
        <div>
            <h1 className="text-center my-3">Fill Course detail</h1>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <label for="userId">Course Id</label>
                    <Input type="text"
                        placeholder="Enter here"
                        name="userId"
                        id="userId"
                        onChange={(e)=>{
                            setCourse({...course,id:e.target.value });
                        }}
                    ></Input>
                </FormGroup>

                <FormGroup>
                    <label for="title">Course Title</label>
                    <Input type="text"
                        placeholder="Enter title here"
                        id="title"
                        onChange={(e)=>{
                            setCourse({...course, title:e.target.value});
                        }}
                    />
                </FormGroup>

                <FormGroup>
                    <label for="description">Course Description</label>
                    <Input type="textarea"
                        placeholder="Enter description here"
                        id="description"
                        style={{height:150}}
                        onChange={(e)=>{
                            setCourse({...course, description:e.target.value});
                        }}
                    />
                </FormGroup>

                <Container style={{"padding-bottom": "1rem"}}className="text-center">
                    <Button type="submit"color="success">Add Course</Button>
                    <Button type="reset" color="warning" style={{"margin-left": "1rem"}}>Clear</Button>
                </Container>
            </Form>
        </div>
    )
}

export default AddCourse;