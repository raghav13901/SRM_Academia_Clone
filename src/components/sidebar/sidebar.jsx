import React, { useState } from "react";
import styles from "./sidebar.module.css";
import {
  HiChevronDown,
  HiOutlineCalendar,
  HiChevronRight,
  HiOutlineDesktopComputer,
  HiOutlinePlus,
} from "react-icons/hi";
import { IoMedalOutline, IoListOutline } from "react-icons/io5";
function Sidebar(props) {
  const [drop, setDrop] = useState(0);
  return (
    <div className={styles.sidebar}>
      <ul>
        <li onClick={() => setDrop(1)}>
          <div className="row">
            <div className="col-2">
              <HiOutlineDesktopComputer />
            </div>
            <div className="col-8">CIRCULAR</div>
            <div className="col-2">
              {drop == 1 ? <HiChevronDown /> : <HiChevronRight />}
            </div>
          </div>
        </li>
        {drop == 1 ? (
          <li className={styles.drop}>
            <div className="row">
              <div className="col-2"></div>
              <div className="col-1">
                <HiOutlineCalendar />
              </div>
              <div className="col-8">SRMIST CET_Circulars</div>
            </div>
          </li>
        ) : (
          ""
        )}
        {drop == 1 ? (
          <li className={styles.drop}>
            <div className="row">
              <div className="col-2"></div>
              <div className="col-1">
                <HiOutlineCalendar />
              </div>
              <div className="col-8">Circular III Year BTECH</div>
            </div>
          </li>
        ) : (
          ""
        )}
        <li>
          <div className="row">
            <div className="col-2">
              <HiOutlineDesktopComputer />
            </div>
            <div className="col-8">WELCOME</div>
          </div>
        </li>
        <li>
          <div className="row">
            <div className="col-2">
              <HiOutlineDesktopComputer />
            </div>
            <div className="col-8">Student Profile </div>
          </div>
        </li>
        <li onClick={() => setDrop(2)}>
          <div className="row">
            <div className="col-2">
              <HiOutlineDesktopComputer />
            </div>
            <div className="col-8">Academic Reports</div>
            <div className="col-2">
              {drop == 2 ? <HiChevronDown /> : <HiChevronRight />}
            </div>
          </div>
        </li>
        {drop == 2 ? (
          <li className={styles.drop}>
            <div className="row">
              <div className="col-2"></div>
              <div className="col-1">
                <HiOutlineCalendar />
              </div>
              <div className="col-8">Academic Planner 2021 22 ODD</div>
            </div>
          </li>
        ) : (
          ""
        )}
        {drop == 2 ? (
          <li className={styles.drop}>
            <div className="row">
              <div className="col-2"></div>
              <div className="col-1">
                <IoMedalOutline />
              </div>
              <div className="col-8">Academic Planner 2021 22 EVEN</div>
            </div>
          </li>
        ) : (
          ""
        )}
        <li onClick={() => setDrop(3)}>
          <div className="row">
            <div className="col-2">
              <HiOutlineDesktopComputer />
            </div>
            <div className="col-8">Student</div>
            <div className="col-2">
              {drop == 3 ? <HiChevronDown /> : <HiChevronRight />}
            </div>
          </div>
        </li>
        {drop == 3 ? (
          <li className={styles.drop}>
            <div className="row">
              <div className="col-2"></div>
              <div className="col-1">
                <HiOutlinePlus />
              </div>
              <div className="col-8">Student Contact Update</div>
            </div>
          </li>
        ) : (
          ""
        )}
        {drop == 3 ? (
          <li className={styles.drop}>
            <div className="row">
              <div className="col-2"></div>
              <div className="col-1">
                <IoListOutline />
              </div>
              <div className="col-8">Student Master Contact Update</div>
            </div>
          </li>
        ) : (
          ""
        )}
        <li onClick={() => setDrop(4)}>
          <div className="row">
            <div className="col-2">
              <HiOutlineDesktopComputer />
            </div>
            <div className="col-8">Unified Time Table</div>
            <div className="col-2">
              {drop == 4 ? <HiChevronDown /> : <HiChevronRight />}
            </div>
          </div>
        </li>
        {drop == 4 ? (
          <li className={styles.drop}>
            <div className="row">
              <div className="col-2"></div>
              <div className="col-1">
                <HiOutlineCalendar />
              </div>
              <div className="col-8">Minor Time Table</div>
            </div>
          </li>
        ) : (
          ""
        )}
        {drop == 4 ? (
          <li className={styles.drop}>
            <div className="row">
              <div className="col-2"></div>
              <div className="col-1">
                <HiOutlineCalendar />
              </div>
              <div className="col-8">Special Time Table - 1</div>
            </div>
          </li>
        ) : (
          ""
        )}
        {drop == 4 ? (
          <li className={styles.drop}>
            <div className="row">
              <div className="col-2"></div>
              <div className="col-1">
                <HiOutlineCalendar />
              </div>
              <div className="col-8">Special Time Table - 2</div>
            </div>
          </li>
        ) : (
          ""
        )}
        {drop == 4 ? (
          <li className={styles.drop}>
            <div className="row">
              <div className="col-2"></div>
              <div className="col-1">
                <HiOutlineCalendar />
              </div>
              <div className="col-8">Unified Time Table Jan-22-Batch-1</div>
            </div>
          </li>
        ) : (
          ""
        )}
        {drop == 4 ? (
          <li className={styles.drop}>
            <div className="row">
              <div className="col-2"></div>
              <div className="col-1">
                <HiOutlineCalendar />
              </div>
              <div className="col-8">Unified Time Table Jan-22-Batch-2</div>
            </div>
          </li>
        ) : (
          ""
        )}
        <li>
          <div className="row">
            <div className="col-2">
              <HiOutlineDesktopComputer />
            </div>
            <div className="col-8">Course Feedback</div>
          </div>
        </li>
        <li onClick={() => setDrop(5)}>
          <div className="row">
            <div className="col-2">
              <HiOutlineDesktopComputer />
            </div>
            <div className="col-8">New Regulation</div>
            <div className="col-2">
              {drop == 5 ? <HiChevronDown /> : <HiChevronRight />}
            </div>
          </div>
        </li>
        {drop == 5 ? (
          <li className={styles.drop}>
            <div className="row">
              <div className="col-2"></div>
              <div className="col-1">
                <HiOutlineCalendar />
              </div>
              <div className="col-8">
                Course Registration Page New Regulation
              </div>
            </div>
          </li>
        ) : (
          ""
        )}
        {drop == 5 ? (
          <li className={styles.drop}>
            <div className="row">
              <div className="col-2"></div>
              <div className="col-1">
                <HiOutlineCalendar />
              </div>
              <div className="col-8">
                Course Registration Page 18 Regulation
              </div>
            </div>
          </li>
        ) : (
          ""
        )}
        {drop == 5 ? (
          <li className={styles.drop}>
            <div className="row">
              <div className="col-2"></div>
              <div className="col-1">
                <HiOutlineCalendar />
              </div>
              <div className="col-8">My Electives 18 Regulation</div>
            </div>
          </li>
        ) : (
          ""
        )}
        {drop == 5 ? (
          <li className={styles.drop}>
            <div className="row">
              <div className="col-2"></div>
              <div className="col-1">
                <HiOutlineCalendar />
              </div>
              <div className="col-8">Course Confirmation Elective Polling</div>
            </div>
          </li>
        ) : (
          ""
        )}
        <li onClick={() => setDrop(6)}>
          <div className="row">
            <div className="col-2">
              <HiOutlineDesktopComputer />
            </div>
            <div className="col-8">My Table &amp; Attendance</div>
            <div className="col-2">
              {drop == 6 ? <HiChevronDown /> : <HiChevronRight />}
            </div>
          </div>
        </li>
        {drop == 6 ? (
          <li className={styles.drop}>
            <div className="row">
              <div className="col-2"></div>
              <div className="col-1">
                <HiOutlineCalendar />
              </div>
              <div className="col-8">My Time Table 2020-21-22</div>
            </div>
          </li>
        ) : (
          ""
        )}
        {drop == 6 ? (
          <li className={styles.drop}>
            <div className="row">
              <div className="col-2"></div>
              <div className="col-1">
                <HiOutlineCalendar />
              </div>
              <div className="col-8">My Attendance</div>
            </div>
          </li>
        ) : (
          ""
        )}
        <li onClick={() => setDrop(7)}>
          <div className="row">
            <div className="col-2">
              <HiOutlineDesktopComputer />
            </div>
            <div className="col-8">Student Service Request</div>
            <div className="col-2">
              {drop == 7 ? <HiChevronDown /> : <HiChevronRight />}
            </div>
          </div>
        </li>
        {drop == 7 ? (
          <li className={styles.drop}>
            <div className="row">
              <div className="col-2"></div>
              <div className="col-1">
                <HiOutlinePlus />
              </div>
              <div className="col-8">Student Service Requests (SSR)</div>
            </div>
          </li>
        ) : (
          ""
        )}
        {drop == 7 ? (
          <li className={styles.drop}>
            <div className="row">
              <div className="col-2"></div>
              <div className="col-1">
                <HiOutlineCalendar />
              </div>
              <div className="col-8">My Service Requests</div>
            </div>
          </li>
        ) : (
          ""
        )}
      </ul>
    </div>
  );
}

export default Sidebar;
