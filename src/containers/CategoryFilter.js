import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeFilter } from '../actions';
import './styles/CategoryFilter.css';

const filters = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const CategoryFilter = ({ selectedFilter, changeFilter }) => (
  <div>
    <span>CATEGORIES</span>
    <select value={selectedFilter} onChange={(event) => changeFilter(event.target.value)}>
      {filters.map((filter) => (
        <option key={filter} value={filter}>{filter}</option>
      ))}
    </select>
  </div>
);

CategoryFilter.propTypes = {
  selectedFilter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({ selectedFilter: state.filter });

export default connect(mapStateToProps, { changeFilter })(CategoryFilter);
