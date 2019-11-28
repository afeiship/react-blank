import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from '@feizheng/noop';
import objectAssign from 'object-assign';

const CLASS_NAME = 'react-blank';

export default class extends Component {
  static displayName = CLASS_NAME;
  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.number,
    unit: PropTypes.string
  };

  static defaultProps = {
    unit: 'px'
  };

  render() {
    const { className, value, unit, style, ...props } = this.props;
    const _style = objectAssign({ height: value + unit }, style);
    return (
      <div
        data-component={CLASS_NAME}
        className={classNames(CLASS_NAME, className)}
        style={_style}
        {...props}></div>
    );
  }
}
