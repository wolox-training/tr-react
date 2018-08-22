import React from 'react';
import { Field, Form, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import styles from './styles.scss';

const required = value => (value ? undefined : 'Required');
const minLength = min => value =>
  value && value.length < min ? `Debe ser mayor a ${min} caracteres` : undefined;
const minLength8 = minLength(8);
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Email Invalido' : undefined;

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div className={styles.mTop10}>
    <div className={styles.mTop10}>
      <input className={styles.inputLogin} {...input} placeholder={label} type={type} />
      {touched && ((error && <span className={styles.errorVal}>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
);

function Login({ handleSubmit, pristine, reset, submitting }) {
  return (
    <section className={styles.containerLogin}>
      <header>
        <h1 className={styles.titleLogin}>App React</h1>
      </header>
      <div>
        <Form onSubmit={handleSubmit}>
          <div className={styles.containerInputs}>
            <Field
              name="email"
              type="email"
              component={renderField}
              label="Email"
              validate={[email, required]}
            />
            <Field
              name="password"
              type="text"
              component={renderField}
              label="Password"
              validate={[required, minLength8]}
            />
          </div>
          <div className={(styles.mTop10, styles.containerButton)}>
            <button className={styles.buttonLogin} type="submit" disabled={submitting}>
              Ingresar
            </button>
            <button className={styles.buttonLogin} type="button" disabled={pristine || submitting} onClick={reset}>
              Limpiar
            </button>
          </div>
        </Form>
      </div>
    </section>
  );
}

Login.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool,
  reset: PropTypes.func,
  submitting: PropTypes.bool
};
export default reduxForm({
  form: 'login' // a unique identifier for this form
})(Login);
