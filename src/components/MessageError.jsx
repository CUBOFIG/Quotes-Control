import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const ErrorComponent = styled.div`
  background-color: #eb6464;
  color: white;
  padding: 0rem;
  font-size: 0.7rem;
  width: 100%;
  text-align: center;
`;

const TextErrorComponent = styled.p`
  font-size: 0.9rem;
  margin-bottom: 0;
  font-weight: bold;
`;

const MessageError = ({ errors }) => {
  const data = Object.values(errors);

  return (
    <div>
      {data.length === 0 ? null : (
        <ErrorComponent>
          <TextErrorComponent>Vaya ocurrio un error.</TextErrorComponent>
          {data.map((error) => (
            <p className="pt-0 mb-0">{error}</p>
          ))}
        </ErrorComponent>
      )}
    </div>
  );
};

MessageError.propTypes = {
  errors: PropTypes.object.isRequired,
};

export default MessageError;
