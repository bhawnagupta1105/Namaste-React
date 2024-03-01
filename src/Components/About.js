// import User from "./User";
 import UserClass from "./UserClass";
// const About = () => {
//     return (
//         <div>
//             <h1>this is about component</h1>
//            {/* <User></User> */}
//            <UserClass name = {"Bhawna Gupta"}></UserClass>
//         </div>
        
//     );
// };

import React from "react";
import { Component } from "react";

class About extends Component {
constructor(props) {
    super(props);
    // console.log("Parent Constructor");

}

componentDidMount() {
    // console.log("Parent component did mount");

}
    render() {
    // console.log("Parent Render");

    return (
        <div>
        <div>
            <h1>this is about component</h1>
           {/* <User></User> */}
           <UserClass name = {"Bhawna Gupta"}></UserClass>
        </div>
       
        </div>
        
        
    );
    }
}

export default About;