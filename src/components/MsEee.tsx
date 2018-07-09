import React from 'react';
import {
  withStyles,
  css,
  withStylesPropTypes,
  WithStylesProps,
} from '../helpers/withStyles';

const MsEee: React.SFC<WithStylesProps> = ({ styles }) => (
  <div {...css(styles.yay)}>Embrace, Extend, Extinguish</div>
);

MsEee.propTypes = {
  ...withStylesPropTypes,
};

export default withStyles(({unit = 1}) => ({
  yay: {
    fontSize: '3em',
    padding: unit * 10
  },
}))(MsEee);
