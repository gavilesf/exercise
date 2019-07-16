import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import EmployeeList from './employees/EmployeeList'

class App extends Component {

    

    constructor(){
        super();
        this.state={
            employees:null,
            base_url:'http://dummy.restapiexample.com/api/v1/'
        };
        this.fetchData=this.fetchData.bind(this);
        this.fetchData();
    }
    render() {
      return (
            <div className="App-header">

              {this.props.title}
              <br/>
              <br/>
              {this.state && this.state.employees &&
              <EmployeeList employees={this.state.employees} baseUrl={this.state.base_url} refreshEmployees={this.fetchData} />
              }
              
            </div>
      )
    } 

    fetchData=()=>{
        fetch(this.state.base_url + 'employees').then(resp=>{
            resp.json().then(data=>{
                //console.dir(data);
                this.setState({employees:data});
            });
        });
    }
  }


export default App;
