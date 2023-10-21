import React from 'react';
import {clsx} from "clsx";

import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import {userList, luckyWinsList, highWinsList} from "../../assets/database/TableWins";


import styles from './Results.module.scss'
import 'react-tabs/style/react-tabs.css';

const Results = () => {

  return (
    <Tabs>
      <TabList className={clsx([styles.resultTabList])}>
        <Tab className={clsx([styles.resultTabBtn])} selectedClassName={styles.resultTabBtn__selected}>See all</Tab>
        <Tab className={clsx([styles.resultTabBtn])} selectedClassName={styles.resultTabBtn__selected}>High wins</Tab>
        <Tab className={clsx([styles.resultTabBtn])} selectedClassName={styles.resultTabBtn__selected}>Lucky wins</Tab>
      </TabList>

      <TabPanel>
        <div className={styles.tableWrap}>


        <table className={styles.table}>
          <thead>

          <tr>

            <th>User</th>
            <th>Game</th>
            <th>Time</th>
            <th>Amount bet</th>
            <th>Mult</th>
            <th>Payout</th>
          </tr>

          </thead>
          <tbody>
          {userList.map(props => {
            return <tr key={props.id}>
              <td>
                <div className={styles.user}>
                  <div className={styles.userImg}>
                    <img src={props.avatar} alt={props.user}/>
                  </div>
                  <h6 className={styles.userTitle}>Cory</h6>
                </div>
              </td>
              <td>
                <div className={styles.userGame}>
                  {props.game}
                </div>
              </td>
              <td>
                <div className={styles.userTime}>{props.time}</div>

              </td>
              <td>
                <div className={styles.userAmount}>
                  <span>{props.amount}</span>
                  <img src={props.amountImg} alt='currency'/>
                </div>
              </td>
              <td>
                <div className={styles.mult}>
                  {props.mult}
                </div>
              </td>
              <td>
                <div className={styles.userPay}>
                  <span>{props.payout}</span>
                  <img src={props.amountImg} alt="currency"/>
                </div>
              </td>
            </tr>
          })}
          </tbody>

        </table>
        </div>
      </TabPanel>
      <TabPanel>
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>

            <tr>
              <th>User</th>
              <th>Game</th>
              <th>Time</th>
              <th>Amount bet</th>
              <th>Mult</th>
              <th>Payout</th>
            </tr>
            </thead>
            <tbody>
            {highWinsList.map(props => {
              return <tr key={props.id}>
                <td>
                  <div className={styles.user}>
                    <div className={styles.userImg}>
                      <img src={props.avatar} alt={props.user}/>
                    </div>
                    <h6 className={styles.userTitle}>Cory</h6>
                  </div>
                </td>
                <td>
                  <div className={styles.userGame}>
                    {props.game}
                  </div>
                </td>
                <td>
                  <div className={styles.userTime}>{props.time}</div>

                </td>
                <td>
                  <div className={styles.userAmount}>
                    <span>{props.amount}</span>
                    <img src={props.amountImg} alt='currency'/>
                  </div>
                </td>
                <td>
                  <div className={styles.mult}>
                    {props.mult}
                  </div>
                </td>
                <td>
                  <div className={styles.userPay}>
                    <span>{props.payout}</span>
                    <img src={props.amountImg} alt="currency"/>
                  </div>
                </td>
              </tr>
            })}
            </tbody>

          </table>
        </div>
      </TabPanel>
      <TabPanel>
      <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>

            <tr>
              <th>User</th>
              <th>Game</th>
              <th>Time</th>
              <th>Amount bet</th>
              <th>Mult</th>
              <th>Payout</th>
            </tr>
            </thead>
            <tbody>
            {luckyWinsList.map(props => {
              return <tr key={props.id}>
                <td>
                  <div className={styles.user}>
                    <div className={styles.userImg}>
                      <img src={props.avatar} alt={props.user}/>
                    </div>
                    <h6 className={styles.userTitle}>Cory</h6>
                  </div>
                </td>
                <td>
                  <div className={styles.userGame}>
                    {props.game}
                  </div>
                </td>
                <td>
                  <div className={styles.userTime}>{props.time}</div>

                </td>
                <td>
                  <div className={styles.userAmount}>
                    <span>{props.amount}</span>
                    <img src={props.amountImg} alt='currency'/>
                  </div>
                </td>
                <td>
                  <div className={styles.mult}>
                    {props.mult}
                  </div>
                </td>
                <td>
                  <div className={styles.userPay}>
                    <span>{props.payout}</span>
                    <img src={props.amountImg} alt="currency"/>
                  </div>
                </td>
              </tr>
            })}
            </tbody>

          </table>
      </div>
      </TabPanel>
    </Tabs>
  );
};

export default Results;