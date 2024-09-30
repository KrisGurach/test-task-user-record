import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { setUser } from "@/store/userSlice";
import styles from "./RegistrationForm.module.css";

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const router = useRouter();

  const onSubmit = (data) => {
    sessionStorage.setItem("user", JSON.stringify(data));
    dispatch(setUser(data));
    router.push("/profile");
  };

  return (
    <div className={styles.registerContainer}>
      <h2 className={styles.registerTitle}>Войдите в личный кабинет</h2>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer}>
        <input 
          {...register("name", { required: true })} 
          placeholder="Имя" 
          className={styles.inputField} />
        {errors.name && <p className={styles.errorMessage}>Имя обязательно</p>}

        <input
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          placeholder="Email"
          className={styles.inputField}
        />
        {errors.email && <p className={styles.errorMessage}>Некорректный email</p>}

        <input
          {...register("password", { required: true, minLength: 6 })}
          type="password"
          placeholder="Пароль"
          className={styles.inputField}
        />
        {errors.password && <p className={styles.errorMessage}>Пароль должен содержать минимум 6 символов</p>}

        <button type="submit" className={styles.submitButton}>Зарегистрироваться</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
