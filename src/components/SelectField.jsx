import React from "react";
import { Field } from "formik";
import { FormGroup, Input } from "reactstrap";
import PropTypes from "prop-types";

const SelectProvider = ({ component, category, data, label, name }) => (
  <FormGroup className="mb-4 w-100">
    <Field name={name}>
      {({ field, meta }) => (
        <>
          <label className="label" htmlFor={name}>
            {label}
          </label>
          <Input
            {...field}
            className="w-100"
            invalid={meta.touched && meta.error && true}
            valid={meta.touched && !meta.error && true}
            type={component}
          >
            {component === "select" && category ? (
              <option value="">--- Seleccione ---</option>
            ) : (
              <option value="">--- Seleccione ---</option>
            )}

            {data.map(({ name, id }) => (
              <option key={id} value={name}>
                {name}
              </option>
            ))}
          </Input>
        </>
      )}
    </Field>
  </FormGroup>
);

SelectProvider.propTypes = {
  component: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default SelectProvider;
