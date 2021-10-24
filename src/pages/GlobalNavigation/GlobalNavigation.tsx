import React from "react";
import styles from "./GlobalNavigation.module.css"
import {Link} from 'react-router-dom';

const GlobalNavigation = () => {
    return (
        <div className={styles.global_navigation}>
            <li>
                <Link to="/dashboard">Дэшборд</Link>
            </li>
            <li>
                <Link to="/phonebox">Phonebox</Link>
            </li>
        </div>
    )
}
export default GlobalNavigation;