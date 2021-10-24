import React, {useState} from "react";
import {Link} from 'react-router-dom';
import styles from "./Tab.module.css"

const Tab = (props: any) => {
    const {name, title, isActive, setIsActive} = props;
    // const [isActive, setIsActive] = useState("")
    const LinkTo = `${name}`;
    return (
        <li className={isActive === title ? `${styles.link} ${styles.active}` : styles.link}>
            <Link onClick={() => setIsActive(title)} to={LinkTo}>{title}</Link>
        </li>
    )
}
export default Tab;