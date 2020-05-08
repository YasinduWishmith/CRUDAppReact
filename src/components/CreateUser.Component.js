import React, { Component } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios'
export default class CreateUser extends Component {

    constructor(props) {
        super(props);
        

        this.state = {
            person_name: '',
            email: '',
            password: '',
            address: ''
        }

        this.onChangePersonName = this.onChangePersonName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangePersonName(event) {
        this.setState({
            person_name : event.target.value
        });
    }
    onChangeEmail(event) {
        this.setState( {
            email : event.target.value
        });
    }
    onChangeAddress(event) {
        this.setState({
            address : event.target.value
        });
    }
    onChangePassword(event) {
        this.setState({
            password : event.target.value
        });
    }

    onSubmit(event) {

        event.preventDefault();
        
        console.log("shdjshjkdhajkd");
    
        const obj = {
            fullname : this.state.person_name,
            email : this.state.email,
            address : this.state.address,
            password : this.state.password
        };
        // alert('A name was submitted: ' + obj.fullname +' Email was Submited: '+obj.email);
        // console.log(obj);
        axios.post('http://localhost:4000/users/add', { obj })
        .then((res) => {
            console.log(res.data)
        }).catch((error) => {
            console.log(error)
        });
    

      this.setState({
        person_name: '',
        email: '',
        address: '',
        password: ''
      })
    }



    render() {
     
        const form = {
            backgroundColor: "darksalmon",
            width: "50%",
            padding: "40px",
            margin: "40px"

          };


        return (
            <div style={form}>
                <Form onSubmit={this.onSubmit}>

                    <FormGroup>
                        <Label for="fullname">Full Name</Label>
                        <Input type="text" name="fullname" id="fullname" placeholder="John Ebrahime" value={this.state.person_name} onChange={this.onChangePersonName}/>
                    </FormGroup>

                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="exampleEmail">Email</Label>
                                <Input type="email" name="email" id="email" placeholder="XYZ@email.com" value={this.state.email} onChange={this.onChangeEmail}/>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="examplePassword">Password</Label>
                                <Input type="password" name="password" id="password" placeholder=" Enter Password" value={this.state.password} onChange={this.onChangePassword}/>
                            </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup>
                        <Label for="exampleAddress">Address</Label>
                        <Input type="text" name="address" id="address" placeholder="1234 Main St" value={this.state.address} onChange={this.onChangeAddress}/>
                    </FormGroup>
                    <FormGroup>
                        <Button outline color="success" size="lg" block type="submit">SUBMIT</Button>{''}
                    </FormGroup>
                </Form>

            </div>

        );

    }
}