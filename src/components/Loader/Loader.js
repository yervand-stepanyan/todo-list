import PropTypes from 'prop-types';

import CircularProgress from '@material-ui/core/CircularProgress';

import { LOADER } from '../../globals/constants';
import { useStyles } from './Loader.style';

function Loader({ type }) {
  const classes = useStyles();

  const loader = loaderType => {
    switch (loaderType) {
      case LOADER.button.type:
        return (
          <CircularProgress
            className={classes.buttonProgress}
            color="primary"
            size={LOADER.button.size}
            thickness={LOADER.button.thickness}
          />
        );
      case LOADER.icon.type:
        return (
          <CircularProgress
            className={classes.fabProgress}
            color="secondary"
            size={LOADER.icon.size}
            thickness={LOADER.icon.thickness}
          />
        );
      case LOADER.page.type:
        return (
          <div className={classes.pageLoaderContainer}>
            <CircularProgress
              size={LOADER.page.size}
              thickness={LOADER.page.thickness}
            />
          </div>
        );
      default:
        return null;
    }
  };

  return loader(type);
}

Loader.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Loader;
