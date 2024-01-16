import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../redux/action/productAction';

const Counter = ({ count, increment, decrement }) => {
  return (
    <div className='App-header  container-fluid'>
      <h1 className='border border-2 border-light rounded-2 p-2'>Count: {count}</h1>
      <div className='main float-left gap-3'>
      <button onClick={increment} className=' rounded btn btn-success p-2 '>Increment</button>
      <button onClick={decrement} className='rounded btn btn-danger p-2'>Decrement</button>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    count: state.count
  };
};

export default connect(mapStateToProps, { increment, decrement })(Counter);