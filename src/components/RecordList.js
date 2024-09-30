import React from 'react';
import { useSelector } from 'react-redux';
import RecordForm from './RecordForm';
import styles from './RecordList.module.css'

const RecordsList = () => {
  const records = useSelector(state => state.records);
  const [currentRecord, setCurrentRecord] = React.useState(null);

  const handleEdit = (record) => {
    setCurrentRecord(record);
  };

  const handleCancel = () => {
    setCurrentRecord(null);
  };

  return (
    <div>
      <RecordForm record={currentRecord} onCancel={handleCancel} />
      {records.map(record => (
        <div key={record.id} className={styles.recordItem}>
          <h2 className={styles.recordTitle}>{record.title}</h2>
          <p className={styles.recordText}>{record.description}</p>
          <button className={styles.recordButton} onClick={() => handleEdit(record)}>Редактировать</button>
        </div>
      ))}
    </div>
  );
};

export default RecordsList;
