import React, { useState } from 'react';
import styles from './AddUser.module.css';
import Button from './Button';

const AddUser = (props) => {
  const [userData, setUserData] = useState({ names: '', ages: '' });
  const { names, ages } = userData;

  const namesHandler = (e) => {
    setUserData((prev) => {
      return { ...prev, names: e.target.value };
    });
  };

  const agesHandler = (e) => {
    setUserData((prev) => {
      return { ...prev, ages: e.target.value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (names.length !== 0 && ages.length !== 0) {
      const userInfo = {
        username: names,
        age: ages,
      };
      props.onSaveUserData(userInfo);
    }
    setUserData({
      names: '',
      ages: '',
    });
  };

  return (
    <form onSubmit={submitHandler} className={styles.input}>
      <label>Username</label>
      <input value={names} onChange={namesHandler} />
      <label>Age (Years)</label>
      <input value={ages} onChange={agesHandler} />
      <Button />
    </form>
  );
};

export default AddUser;
