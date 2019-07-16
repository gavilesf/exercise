import React, { Component } from "react";
import axios from 'axios';

class EmployeeCreate extends Component{

    constructor(props){
        super(props);
        this.state={
            employee_name: '', 
            employee_salary: '', 
            employee_age: '', 
            profile_image: '',
            baseUrl:this.props.baseUrl,
            refreshDataFunc:this.props.refreshDataFunc
        }
    }

    handleChange = e => {
        console.log(e.target.name)
        this.setState({ [e.target.name]: e.target.value });
      };

      onSubmit = e =>{
          e.preventDefault();
          axios
          .post( this.props.baseUrl + 'create', {name:this.state.employee_name, salary:this.state.employee_salary,age:this.state.employee_age })
          .then(res => {
            console.log(res);
            this.state.refreshDataFunc();
          })
          .catch(err =>
            {
                console.log(err);
            }
          );
      };

    render(){
        return (
            
        <form onSubmit={this.onSubmit}>
            <label>Name:</label><br/>
            <input type="text" value={this.state.employee_name}  onChange={this.handleChange} name="employee_name"/><br/>
            <label>Salary:</label><br/>
            <input value={this.state.employee_salary}  onChange={this.handleChange} name="employee_salary"/><br/>
            <label>Age:</label><br/>
            <input value={this.state.employee_age}  onChange={this.handleChange} name="employee_age"/><br/>
            <label>Profile image:</label><br/>
            <input value={this.state.profile_image}  onChange={this.handleChange} name="profile_image"/><br/>
            <input type="submit" value="Save"/>
        </form>)
    }
    

}

export default EmployeeCreate;
