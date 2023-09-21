import React from "react";
import {FaSearch} from 'react-icons/fa'


class UserSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            user :""
        }
      // this.submitHandler = this.submitHandler.bind(this);
    }
    //reading the content of input 
    readValue(event){
        console.log('value',event.target.value);
        this.setState(
            {
                user: event.target.value
            });
    }
      //form submit handler
    submitHandler(event){
        event.preventDefault(); //to avoid  page refresh 
        this.props.search(this.state.user)
        }

    render(){
        return (
            <div>
               <form autoComplete="off" onSubmit={(e) => this.submitHandler(e)}>
                <div className="form-group">
                    <input type="text" name="user" id="user" value={this.state.user} onChange={(e)=> this.readValue(e)}  placeholder="Enter Git Username"/>
                    <button className="btn"><FaSearch/></button>
                </div>
               </form>
            </div>
        )
    }
}

export default UserSearch