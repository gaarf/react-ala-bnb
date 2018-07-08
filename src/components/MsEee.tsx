import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, css, withStylesPropTypes } from '../helpers/withStyles';

function MsEee({ styles }) {
  return (
    <div {...css(styles.yay)}>
      Embrace, Extend, Extinguish
    </div>
  );
}

MsEee.propTypes = {
  ...withStylesPropTypes,
};

export default withStyles(() => ({
  yay: {
    fontSize: '3em',
  },
}))(MsEee);
