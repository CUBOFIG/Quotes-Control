import React from "react";
import styled from "@emotion/styled";
import { viewUppercase } from "../helper";
import PropTypes from "prop-types";

const AbstractComponent = styled.div`
  padding: 1rem;
  text-align: center;
  background-color: #2b8a92;
  color: #fff;
  margin-top: 1rem;
`;

const Abstract = ({ data }) => {
  const { mark, year, plan } = data;

  return (
    <AbstractComponent>
      <h2>Resumen de cotizacion</h2>
      <ul className="p-0">
        <li>Marca: {viewUppercase(mark)}</li>
        <li>Plan: {viewUppercase(plan)}</li>
        <li>Año del Auto: {year}</li>
      </ul>
    </AbstractComponent>
  );
};

Abstract.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Abstract;
