import React from 'react';
import { getQuote } from './actions';
import { connect } from 'react-redux';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <h1>Like Random Useless Information?</h1>
      <p>{props.quote}</p>
      {/* add a click listener here */}
      <button onClick={() => props.getQuote()}>Learn Something New</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    quote: state.quote,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps, { getQuote })(App);
