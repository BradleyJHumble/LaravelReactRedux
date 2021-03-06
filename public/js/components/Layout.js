import React from "react";
import { Link } from "react-router";
import Navigation from "../components/includes/Navigation";
export default class Layout extends React.Component{
render(){
const { location } = this.props;
        const containerStyle = {
            marginTop: "60px"
        };
return(
            <div>
<Navigation location={location} />
                <div className="container" style={containerStyle}>
                    <div className="row">
                        <div className="col-lg-12">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}