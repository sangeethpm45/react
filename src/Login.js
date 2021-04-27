import React from 'react'
import './Login.css'
import { Link, BrowserRouter, Switch} from "react-router-dom";
class Login extends React.Component{

    state={
        name:'',
        password:''
    }
    uname=(event)=>{
        this.setState({
            name:event.target.value
        })
    }
    pass=(event)=>{
        this.setState({
            password:event.target.value
        })
    }

show=()=>{
    alert('uname:'+this.state.name+'\n password:'+this.state.password)
}
    render(){
        return <div class="container">
            <div class="row">
                <div class=" text-light cntr" > <h1> SBI</h1>
                    <div class="main">
                        <form>
                            <div class="mb-3">
                                <input type="text" onChange={this.uname} name="accn" class="form-control round" id="acn" aria-describedby="emailHelp" placeholder="Account Number">
                                </input>
                            </div>
                            <div class="mb-3">
                                <input type="password"  onChange={this.pass} name="passw" class="form-control round" id="psw" placeholder="Password">
                                </input>
                            </div>
                            <div class="center-button">
                                <button type="button " onClick={this.show} class="signup bg-primary round-button">Submit</button>
                            </div>
                            <div class="signup">
                                <Link to ="/register" class="bg-primary signup round-button" >Create an Account</Link>
                            </div>
                        </form>
                    </div>
                </div>

            </div >
           
        </div>
    }
    
}
    
export default Login;