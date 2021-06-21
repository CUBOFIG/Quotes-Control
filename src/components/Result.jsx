import React from "react";
import styled from "@emotion/styled";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";

const MessageComponent = styled.p`
  color: #00838f;
  padding: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  margin: 0;
`;

const MessageDivComponent = styled.div`
  text-align: center;
  padding: 0.5rem;
  border: 1px solid #26c6da;
  background-color: rgb(127, 224, 237);
  margin-top: 1rem;
  position: relative;
`;

const Result = ({ quotation }) => {
  return (
    <MessageDivComponent className="mt-2">
      <TransitionGroup component="span" className="result mb-3 mt-3">
        <CSSTransition
          classNames="result"
          key={quotation}
          timeout={{ enter: 500, exit: 500 }}
        >
          <MessageComponent>
            El total es: $<span>{quotation}</span>
          </MessageComponent>
        </CSSTransition>
      </TransitionGroup>
    </MessageDivComponent>
  );
};

Result.propTypes = {
  quotation: PropTypes.string.isRequired,
};

export default Result;
