import React from 'react';
import "./buttonInLow.css";
import { Button } from './Button';
import PropTypes from 'prop-types';

export const ButtonInLow = ({justifyContent="normal"}) => {
  // justifyContent に応じたスタイルクラスを決定
  const justifyContentStyle = {
    normal: "storybook-buttonInLow--normal",
    center: "storybook-buttonInLow--center",
    end: "storybook-buttonInLow--end",
  }[justifyContent];

  return (
    <div className={['storybook-buttonInLow', justifyContentStyle].join(' ')}>
      <Button primary size="medium" label="編集" backgroundColor='#3dc361' />
      <Button primary size="medium" label="削除" backgroundColor='#eb4234' />
    </div>
  );
};

ButtonInLow.propTypes = {
  justifyContent: PropTypes.oneOf(["normal", "center", "end"]), // right を追加
};

ButtonInLow.defaultProps = {
  justifyContent: "normal",
};