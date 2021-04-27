import './Home.css'
function Home() {
    return (
        <div className="container">
            <div >
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" appHighlight href="#">SBI</a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >

                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" appHighlight aria-current="page" href="#">Home</a>
                                </li>
                            </ul>
                            <span className="navbar-text p-3">  </span>
                            <span className="navbar-text p-3">  </span>

                        </div>
                    </div>
                </nav>
            </div>
            
            <div className="row text-center">
                <div classNameName="main">
                    <h3>Deposit</h3>
                    <hr />
                    <form >
                        <div className="mb-3">
                            <label for="kk" className="form-label">Account Number</label>

                            <input
                                type="text"
                                className="form-control round"
                                id="accn"
                                aria-describedby="emailHelp"
                                formControlName="accn"
                                name="acn"
                            />

                        </div>

                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control round"
                                id="pssw"
                                formControlName="pass"
                                name="psw"
                            />

                        </div>
                        <div className="mb-3">
                            <label for="amt" className="form-label">Amount </label>
                            <input
                                type="text"
                                className="form-control round"
                                id="amdd"
                                aria-describedby="emailHelp"
                                formControlName="amount"
                            />

                        </div>
                        <button type="submit" className="btn btn-primary round-button">
                            Deposit
                        </button>
                    </form>

                    <div className="row text-center">
                        <div className="gap">
                            <h3>Withdraw</h3>
                            <hr />
                            <form>
                                <div className="mb-3">
                                    <label for="kk" className="form-label">Account Number</label>
                                    <input
                                        type="text"
                                        className="form-control round"
                                        id="accn"
                                        aria-describedby="emailHelp"
                                        formControlName="accn"
                                        name="accn"
                                    />

                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputPassword1" className="form-label"
                                    >Password</label>

                                    <input
                                        type="password"
                                        className="form-control round"
                                        id="pssw"
                                        name="pass"

                                    />

                                </div>

                                <div className="mb-3">
                                    <label for="amt" className="form-label">Amount </label>
                                    <input
                                        type="text"
                                        className="form-control round"
                                        id="amdd"
                                        name="amd"
                                        aria-describedby="emailHelp"

                                    />
                                </div >
                                <button type="submit " className="btn btn-primary round-button">
                                    Withdraw
                                </button>
                            </form >
                        </div >
                    </div >

                </div >
            </div >
        </div>
    );
}
export default Home