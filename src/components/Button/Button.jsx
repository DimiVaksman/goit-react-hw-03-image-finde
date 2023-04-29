import PropTypes from 'prop-types';

export const Button = ({ onClick = null }) => {
  return (
    <button type="button" onClick={onClick}>
      Load More
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.any,
};
