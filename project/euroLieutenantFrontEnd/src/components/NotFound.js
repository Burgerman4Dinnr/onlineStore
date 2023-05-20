import { Link } from 'react-router-dom';

const NotFound =()=> {
    return (
        <>
    <div className="main errorMain">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6 text-center">
                    <h1 className="error error404">Error 404: Page Not Found</h1>
                    <p className="error errorMessage">Sorry, the page you were searching for has gone into witness protection. We can neither confirm nor deny its existence.</p>
                    <p className="error errorDirect">Please check the URL for errors or <Link to='/'>click here</Link> to go back to the home page.</p>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}

export default NotFound;