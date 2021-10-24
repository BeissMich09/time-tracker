import React from "react";
import styles from "./DashboardPage.module.css";
import TimeTracker from "./TimeTracker/TimeTracker";
import NavDashboard from "./NavDashboard/NavDashboard";

const DashboardPage = () => {
    return <div className={styles.dashboard_page}>
        <TimeTracker/>
        <NavDashboard/>
    </div>
}

export default DashboardPage;