import React, { Component } from "react";
import axios from 'axios';

class Employee extends Component{

    constructor(props){
        super(props);
        this.state={...this.props};
        /*{
            id:this.props.employee.id,
            employee_name: this.props.employee.employee_name, 
            employee_salary: this.props.employee.employee_salary, 
            employee_age: this.props.employee.employee_age, 
            profile_image: this.props.employee.profile_image, 
            baseUrl:this.props.baseUrl,
            refreshDataFunc:this.props.refreshDataFunc
        }*/
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            employee_name: nextProps.employee.employee_name, 
            employee_salary: nextProps.employee.employee_salary, 
            employee_age: nextProps.employee.employee_age, 
            profile_image: nextProps.employee.profile_image
        });
        return true;
    }


      handleChange = e => {
        console.log(e.target.name)
        this.setState({ [e.target.name]: e.target.value });
      };

      onSubmit = e =>{
        e.preventDefault();
        
        axios
        .put( this.props.baseUrl + 'update/' + this.state.id, {name:this.state.employee_name, salary:this.state.employee_salary,age:this.state.employee_age })
        .then(res => {
          this.state.refreshDataFunc();
          console.log(res);
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

export default Employee;
