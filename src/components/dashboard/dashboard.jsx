import React from "react";
import Home from "../home/home";
import Navbar from "../navbar/navbar";
import Sidebar from "../sidebar/sidebar";
import styles from './dashboard.module.css';
function Dashboard(props) {
  return (
    <div>
      <Navbar />
      <div className={`row ${styles.sidebar} align-items-stretch`}>
        <div className="col-2"><Sidebar/></div>
        <div className="col-10 text-start">
          <Home/>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
