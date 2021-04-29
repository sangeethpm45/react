import React from 'react'
import './Login.css'
import { Link} from "react-router-dom";
const bankservice=require('./bank.service')
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

login_fun = (event)=>{
    bankservice.login_function({accn:this.state.name,
        password:this.state.password}).then((data)=>{
        console.log(data);
    })
} 


    render(){
        return <div className="container">
            <div className="row">
                <div className=" text-light cntr" > <h1> SBI</h1>
                    <div className="main">
                        <form>
                            <div className="mb-3">
                                <input type="text" onChange={this.uname} name="accn" className="form-control round" id="acn" aria-describedby="emailHelp" placeholder="Account Number">
                                </input>
                            </div>
                            <div className="mb-3">
                                <input type="password"  onChange={this.pass} name="passw" className="form-control round" id="psw" placeholder="Password">
                                </input>
                            </div>
                            <div className="center-button">
                                <button type="button " onClick={this.show} className="signup bg-primary round-button">Submit</button>
                            </div>
                            <div className="signup">
                                <Link to ="/register" className="bg-primary signup round-button" >Create an Account</Link>
                            </div>
                        </form>
                    </div>
                </div>

            </div >
           
        </div>
    }
    
}
    
export default Login;