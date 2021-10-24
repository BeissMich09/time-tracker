import React, {useState} from "react";
import styles from "./NavDashboard.module.css";
import {Route, Switch} from "react-router-dom";
import Tab from "../../../components/Tab/Tab";
import CalendarPage from "../CalendarPage/CalendarPage";
import ReportPage from "../ReportPage/ReportPage";
import StaffsPage from "../StaffsPage/StaffsPage";

const NavDashboard = () => {
    const tabs = [{name: "/dashboard/calendar", title: "Календарь"},
        {
            name: "/dashboard/reports",
            title: "Отчеты"
        }, {name: "/dashboard/staff", title: "Сотрудники"}]
    const [isActive, setIsActive] = useState("");

    const localTab = tabs.map((item) => <Tab setIsActive={setIsActive} isActive={isActive}
                                             key={item.title + item.name} title={item.title} name={item.name}/>)

    return (
        <div className={styles.nav_dashboard}>
            <nav>{localTab}</nav>
            <Switch>
                <Route path="/dashboard/calendar">
                    <CalendarPage/>
                </Route>
                <Route path="/dashboard/reports">
                    <ReportPage/>
                </Route>
                <Route path="/dashboard/staff">
                    <StaffsPage/>
                </Route>
            </Switch>
        </div>
    )
}
export default NavDashboard;