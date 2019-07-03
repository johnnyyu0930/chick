import React, {useEffect} from "react";
import { connect } from "react-redux";
import Footer from "../components/Footer";
import { showFilter } from '../actions';
import Test from '../components/Test';

const Example = ({showFilter, filter,  match: { params } }) => {
  let Component = null;
  useEffect(()=>{
    showFilter(params)
  },[params])
  
  switch (filter) {
    case 'test':
      Component = <Test/>;
      break;
  }
  return (
    <div>
      {Component}
      <Footer />
    </div>
  );
};

export default connect(
  state => ({
    filter: state.getIn(['gym', 'filter'])
  }),
  {
    showFilter
  }
)(Example);
