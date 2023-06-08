import PropTypes from 'prop-types';
export const Button = ({ onChangePage }) => {
  return (
    <button type="button" onClick={onChangePage}>
      Load more
    </button>
  );
};
Button.propTypes = {
  onChangePage: PropTypes.func,
};
