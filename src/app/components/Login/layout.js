import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm, Form } from 'redux-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './styles.scss';

const validate = values => {
  const errors = {};
  if (!values.password) {
    errors.password = 'Requerido';
  } else if (values.password.length < 8) {
    errors.password = 'Debe ser mayor o igual a 8 caracteres.';
  }
  if (!values.email) {
    errors.email = 'Requerido';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Email Invalido';
  }
  return errors;
};

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div className={styles.mTop10}>
    <div className={styles.mTop10}>
      <input {...input} placeholder={label} className={styles.inputLogin} type={type} />
      {touched &&
        ((error && <span className={styles.errorVal}>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
);

const validationError = error => {
  if (error) {
    return <div className={styles.alertBox}>{error}</div>;
  }
};
const Login = props => {
  const { handleSubmit, pristine, reset, submitting, errorVal, loadingForm } = props;
  return (
    <section className={styles.containerLogin}>
      <header>
        <h1 className={styles.titleLogin}>React APP WOLOX</h1>
      </header>
      <div>
        <Form onSubmit={handleSubmit}>
          <div className={styles.containerInputs}>
            <Field name="email" type="email" component={renderField} label="Email" />
            <Field name="password" type="password" component={renderField} label="Password" />
          </div>
          <div className={(styles.mTop10, styles.containerButton)}>
            <button className={styles.buttonLogin} type="submit" disabled={loadingForm || submitting}>
              {loadingForm ? <FontAwesomeIcon icon="spinner" spin /> : 'Ingresar'}
            </button>
            <button
              type="button"
              className={styles.buttonLogin}
              disabled={pristine || submitting}
              onClick={reset}
            >
              Limpiar
            </button>
          </div>
        </Form>
      </div>
      <div className={styles.alertArea}>{validationError(errorVal)}</div>
    </section>
  );
};

Login.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool,
  reset: PropTypes.func,
  submitting: PropTypes.bool,
  errorVal: PropTypes.string,
  loadingForm: PropTypes.bool
};

export default reduxForm({
  form: 'login', // a unique identifier for this form
  validate // <--- validation function given to redux-form
})(Login);
