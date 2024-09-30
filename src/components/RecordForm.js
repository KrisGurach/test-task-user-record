import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { addRecord, updateRecord } from "@/store/recordsSlice";
import styles from "./RecordForm.module.css";

const RecordForm = ({ record, onCancel }) => {
  const { register, handleSubmit, reset, setValue } = useForm();
  const dispatch = useDispatch();

  useEffect(() => {
    if (record) {
      setValue("title", record.title);
      setValue("description", record.description);
    } else {
      reset();
    }
  }, [record, setValue, reset]);

  const onSubmit = (data) => {
    if (record) {
      dispatch(updateRecord({ id: record.id, updatedData: data }));
    } else {
      dispatch(addRecord({ ...data, id: Date.now() }));
    }
    reset();
    onCancel();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.recordForm}>
      <div className={styles.recordForm__field}>
        <input
          {...register("title")}
          placeholder="Название записи"
          className={styles.recordForm__input}
        />
      </div>
      <div className={styles.recordForm__field}>
        <textarea
          {...register("description")}
          placeholder="Описание"
          className={styles.recordForm__textarea}
          rows="4"
        />
      </div>
      <button type="submit" className={styles.recordForm__submitButton}>
        {record ? "Сохранить изменения" : "Добавить запись"}
      </button>
      {record && (
        <button type="button" className={styles.recordForm__cancelButton} onClick={onCancel}>
          Отмена
        </button>
      )}
    </form>
  );
};

export default RecordForm;
