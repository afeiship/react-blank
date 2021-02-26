import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import objectAssign from 'object-assign';

const CLASS_NAME = 'react-blank';

export default class ReactBlank extends Component {
  static displayName = CLASS_NAME;
  static propTypes = {
    /**
     * The extended className for component.
     */
    className: PropTypes.string,
    /**
     * The blank height.
     */
    value: PropTypes.number,
    /**
     * The height style unit.
     */
    unit: PropTypes.string
  };

  static defaultProps = {
    unit: 'px'
  };

  render() {
    const { className, value, unit, style, ...props } = this.props;
    const _style = objectAssign({ height: value + unit }, style);
    const theProps = { style: _style, ...props };
    return (
      <div
        data-component={CLASS_NAME}
        className={classNames(CLASS_NAME, className)}
        {...theProps}
      />
    );
  }
}
