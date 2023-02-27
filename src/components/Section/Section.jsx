import PropTypes from 'prop-types';

export const Section = ({ children }) => {
  return (
    <section>
      <div>{children}</div>
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
};
