import React from "react";
import { UserContext } from "../utils/UserContext";
class About extends React.Component{
    constructor(){
        super()
    }
    render(){
        return (
            <div className="absolute top-16 mt-10">
                This is about component using class based component!!
                <UserContext.Consumer>
                    {({loggedInUser}) => <h1>this is default logged in user: {loggedInUser}</h1>}
                </UserContext.Consumer>
            </div>
        )
    }
}

export default About;