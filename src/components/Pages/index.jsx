import React, {Fragment} from "react";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import styles from "./pages.module.css"
import logo from "../../assets/image/logo.svg";


const TestHeader = () => {
    return (
        <Fragment>
            <div className="logo_wrapper">
                <Link to="/">
                    <img src={logo} className={`${styles.logo}`} alt={logo}/>
                </Link>
            </div>

            <div className={`${styles.nav}`}>
                <ul className={`${styles.nav_list}`}>
                    <li className={styles.nav_item}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={styles.nav_item}>
                        <Link to="/portfolio">Portfolio</Link>
                    </li>
                    <li className={styles.nav_item}>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </div>
        </Fragment>
    );
};

export default function RouterPages() {
    return (
        <Router>

            <TestHeader/>
            <Switch>
                <Route exact path="/">
                    {/*<Home/>*/}
                </Route>

                <Route path="/portfolio">
                    {/*<Portfolio/>*/}
                </Route>
                <Route path="/about">
                    {/*<About/>*/}
                </Route>
            </Switch>
        </Router>
    );

    // function Home() {
    //     return (
    //         <div>
    //             {/*<h2>Home</h2>*/}
    //         </div>
    //     );
    // }
    //
    // function Portfolio() {
    //     return (
    //         <div>
    //             {/*<h2>Portfolio</h2>*/}
    //         </div>
    //     );
    // }
    //
    // function About() {
    //     return (
    //         <div>
    //             {/*<h2>About</h2>*/}
    //         </div>
    //     );
    // }
}