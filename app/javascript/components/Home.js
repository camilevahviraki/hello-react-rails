import React from "react";
import { Link } from "react-router-dom";
 
function Home() {
  return (
    <div>
      <Link to={'./greeting'}>Greetings</Link>
      <h2>Welcome</h2>
  </div>
  )
}
 
export default Home;