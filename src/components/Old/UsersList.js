import React from 'react';
import styles from './UsersList.module.css';
const UsersList = ({ userData }) => {
  return (
    <div className={styles.users}>
      <ul>
        {userData.map((n, idx) => (
          <li key={idx}>{`${n.username} (${n.age} years old)`}</li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
