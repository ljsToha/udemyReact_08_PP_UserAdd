import React, { useState } from 'react';
import styles from './App.module.css';
import AddUser from './components/AddUser';
import UsersList from './components/UsersList';

const App = () => {
  const [userData, setUserData] = useState([]);

  const saveUserData = (data) => {
    setUserData((prev) => {
      return [data, ...prev];
    });
  };
  return (
    <div className={styles.app}>
      <AddUser onSaveUserData={saveUserData} />
      <UsersList userData={userData} />
    </div>
  );
};

export default App;
