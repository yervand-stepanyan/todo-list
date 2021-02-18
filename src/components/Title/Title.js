import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';

function Title({ text }) {
  return (
    <div>
      <Typography variant="h2">{text}</Typography>
    </div>
  );
}

Title.propTypes = {
  text: PropTypes.string.isRequired,
};
export default Title;
