import React, {useState} from "react";
import styles from "./PhoneboxPage.module.css";
import Tab from "../../components/Tab/Tab";
import {Route, Switch} from "react-router-dom";
import DashboardPage from "../DashboardPage/DashboardPage";
import BranchesPage from "./BranchesPage/BranchesPage";
import IncommingCalls from "./IncommingCalls/IncommingCalls";
import StatisticsPage from "./StatisticsPage/StatisticsPage";

const PhoneboxPage = () => {
    const tabs = [{name: "/phonebox/incoming_call", title: "Входящие звонки"},
        {
            name: "/phonebox/branches",
            title: "Филиалы"
        }, {name: "/phonebox/statistics", title: "Статистика"}];
    const [isActive, setIsActive] = useState("");


    const localTab = tabs.map((item) => <Tab setIsActive={setIsActive} isActive={isActive} key={item.title + item.name}
                                             title={item.title} name={item.name}/>)

    return <div className={styles.phonebox_page}>
        <nav>{localTab}</nav>
        <Switch>
            <Route path="/phonebox/incoming_call">
                <IncommingCalls/>
            </Route>
            <Route path="/phonebox/branches">
                <BranchesPage/>
            </Route>
            <Route path="/phonebox/statistics">
                <StatisticsPage/>
            </Route>
        </Switch>
    </div>
}
export default PhoneboxPage;