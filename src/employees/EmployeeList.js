import React, { Component } from "react";
import Employee from './Employee';
import EmployeeCreate from './EmployeeCreate';

class EmployeeList extends Component{
    constructor(props){
        super(props);
        this.state={currentEmployee:0, baseUrl:this.props.baseUrl, isCreate:true, refreshDataFunc:this.props.refreshEmployees};
        this.change=this.change.bind(this);

    }

    change(event){
        this.setState({currentEmployee:event.target.value});
    }

    render(){
        return(
            <div>
            {!this.state.isCreate && 
            <div>
                <button onClick={()=>{ this.setState({isCreate:!this.state.isCreate})}}>Create Mode</button></div>
            }  
            
            {!this.state.isCreate && 
            <div>
                <label className="subtitle">Select The Employee You Want To Edit</label></div>
            }   

            {!this.state.isCreate &&    
            <select onChange={this.change}>{
                this.props.employees.map((item, i) => 
                <option key={i} value={i}>{item.employee_name}</option>
                )}
              </select>
            }
            {!this.state.isCreate &&
            <Employee employee={this.props.employees[this.state.currentEmployee]} baseUrl={this.state.baseUrl} refreshDataFunc={this.state.refreshDataFunc}/>}

            {this.state.isCreate && 
            <div>
                <button onClick={()=>{ this.setState({isCreate:!this.state.isCreate})}}>Edit Mode</button></div>
            }  

            {this.state.isCreate && 
            <div>
                <label className="subtitle">Enter New Employee Data</label></div>
            }    
            {this.state.isCreate &&
            <EmployeeCreate baseUrl={this.state.baseUrl} refreshDataFunc={this.state.refreshDataFunc}/>}

            </div>
        )
    }
}

export default EmployeeList