import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../store/userSlice';
import RecordList from './RecordList';
import styles from './Profile.module.css';

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  useEffect(() => {
    const savedUser = JSON.parse(sessionStorage.getItem('user'));
    if (savedUser) {
      dispatch(setUser(savedUser));
    }
  }, [dispatch]);

  return (
    <div className={styles.profile}>
      <h1 className={styles.profile__title}>Личный кабинет</h1>
      <p className={styles.profile__name}>Имя: {user.name}</p>
      <p className={styles.profile__email}>Email: {user.email}</p>
      <RecordList />
    </div>
  );
};

export default Profile;
