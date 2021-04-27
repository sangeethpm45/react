import './Register.css'
function Register() {
    return (
        <div class="container">

            <div class="cntr"><h1>SBI</h1></div>


            <div class="main">
                <form >
                    <div class="mb-3">
                        <input type="text" formControlName="uname" class="form-control round" id="acn" aria-describedby="emailHelp" placeholder="Username">
                        </input>
                    </div>
                    <div class="mb-3">
                        <input type="text" name="accno" formControlName="accno" class="form-control round " id="acn" aria-describedby="emailHelp" placeholder="Account Number">
                        </input>
                    </div>
                        <div class="mb-3">

                            <input type="password" formControlName="pssw" name="pssw" class="form-control round" id="psw" placeholder="Password">
                            </input>

                                <div class="center-button p-3">
                                    <button type="submit" class="btn btn-primary round-button"  >Submit</button>
                                </div>
                                <div class="signup">
                                    <a routerLink="">Log in</a>
                                </div>
                        </div>
       
                </form>
            </div>
            </div>
            
);
}
export default Register