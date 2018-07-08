import React from 'react';
import PropTypes from 'prop-types';
import {
  withStyles,
  css,
  withStylesPropTypes,
  WithStylesPropTypes,
} from '../helpers/withStyles';

const MsEee: React.SFC<WithStylesPropTypes> = ({ styles }) => {
  return <div {...css(styles.yay)}>Embrace, Extend, Extinguish</div>;
};

MsEee.propTypes = {
  ...withStylesPropTypes,
};

export default withStyles(() => ({
  yay: {
    fontSize: '3em',
  },
}))(MsEee);
