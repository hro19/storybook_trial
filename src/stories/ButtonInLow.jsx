import React from 'react';
import "./buttonInLow.css";
import { Button } from './Button';
import PropTypes from 'prop-types';

export const ButtonInLow = ({justifyContent="normal"}) => {
  const justifyContentStyle = justifyContent === "center" ? "storybook-buttonInLow--center" : "storybook-buttonInLow--normal";
  return (
    <div className={['storybook-buttonInLow',justifyContentStyle].join(' ')}>
        <Button primary size="medium" label="編集" backgroundColor='#3dc361' />
        <Button primary size="medium" label="削除" backgroundColor='#eb4234' />
    </div>
  );
};

ButtonInLow.propTypes = {
  justifyContent: PropTypes.oneOf(["normal","center"]),
};

ButtonInLow.defaultProps = {
  justifyContent: "normal",
};
