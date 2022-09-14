import React, { useEffect } from "react";
import {connect} from "react-redux";
import {fetchGreetings} from "../redux/greeting_reducer";
 
function Greetings({fetchGreetings, greeting}) {

  useEffect(() => {
    fetchGreetings();
  }, [])
  
  const {data} = greeting;
  return (
    <div>
      {
      data? (
      <>
        <h2>{data.attributes.name}</h2>
        <p>{data.attributes.message}</p>
      </>): '...loading'
      }
    </div>
  )
}

const mapDispatchToprops = (dispatch) => {
   return {
    fetchGreetings: () => dispatch(fetchGreetings()),
   }
};

const mapState = (state) => ({ greeting: state.greetingsReducer });
 
export default connect(mapState, mapDispatchToprops)(Greetings);
