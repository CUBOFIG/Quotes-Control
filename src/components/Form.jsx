import React, { useState } from "react";
import SelectProvider from "./SelectField";
import { Formik, Form, Field } from "formik";
import { initialValues, validationSchema } from "./FormSchema";
import shortid from "shortid";
import styled from "@emotion/styled";
import MessageError from "./MessageError";
import { getDifference, getMark, getPlan } from "../helper";
import PropTypes from "prop-types";

const DivComponent = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
  align-items: center;
`;

const LabelComponent = styled.label`
  flex: 0 0 100px;
`;

const ButtonComponent = styled.button`
  background-color: #4fb3c0 !important;
  border: none !important;
  border-radius: 0px;
  padding: 0.5rem;
  text-transform: uppercase;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    cursor: pointer;
    background-color: #26a8ba !important;
  }
`;

const Forms = ({ setAbstract, setLoading }) => {
  const [values, setValues] = useState({});
  const [check, setCheck] = useState(false);

  const data = [
    { name: 2023, id: shortid.generate() },
    { name: 2022, id: shortid.generate() },
    { name: 2021, id: shortid.generate() },
    { name: 2020, id: shortid.generate() },
    { name: 2019, id: shortid.generate() },
    { name: 2018, id: shortid.generate() },
    { name: 2017, id: shortid.generate() },
    { name: 2016, id: shortid.generate() },
    { name: 2015, id: shortid.generate() },
    { name: 2014, id: shortid.generate() },
    { name: 2013, id: shortid.generate() },
    { name: 2012, id: shortid.generate() },
  ];

  const dataMark = [
    { name: "europeo", id: shortid.generate() },
    { name: "americano", id: shortid.generate() },
    { name: "asiatico", id: shortid.generate() },
  ];
  const onCompleteForm = (value) => {
    setValues({
      ...values,
      value,
    });

    let result = 2000;

    const different = getDifference(parseInt(value.year));

    result -= (different * 3 * result) / 100;

    result = getMark(value.mark) * result;

    const incrementPlan = getPlan(value.plan);

    result = parseFloat(incrementPlan * result).toFixed(2);

    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      setAbstract({
        quotation: result,
        data: value,
      });
    }, 3000);
  };

  return (
    <div>
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={onCompleteForm}
      >
        {({ errors, touched }) => (
          <Form>
            {errors && touched && check ? (
              <MessageError errors={errors} />
            ) : null}

            <DivComponent>
              <LabelComponent>Marca</LabelComponent>
              <SelectProvider
                name="mark"
                component="select"
                data={dataMark}
                category={true}
              />
            </DivComponent>

            <DivComponent>
              <LabelComponent>Año</LabelComponent>
              <SelectProvider
                name="year"
                component="select"
                data={data}
                category={false}
              />
            </DivComponent>

            <DivComponent>
              <LabelComponent>Plan</LabelComponent>
              <div
                role="group"
                aria-labelledby="my-radio-group"
                className="w-100 d-flex justify-content-around align-items-center"
              >
                <div>
                  <Field
                    type="radio"
                    name="plan"
                    value="basico"
                    className="mr-2"
                  />
                  Basico
                </div>
                <div>
                  <Field
                    type="radio"
                    name="plan"
                    value="completo"
                    className="mr-2"
                  />
                  Completo
                </div>
              </div>
            </DivComponent>
            <ButtonComponent
              type="submit"
              className="mt-5 btn btn-primary btn-block mt-3 btn-color"
              onClick={() => {
                setCheck(true);
              }}
            >
              Cotizar
            </ButtonComponent>
          </Form>
        )}
      </Formik>
    </div>
  );
};

Forms.propTypes = {
  setAbstract: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired,
};

export default Forms;
