import React from "react";
import Button from "@material-ui/core/Button";

class InputField extends React.Component {

    handleButtonState = (e) => {
        this.props.flagNameFunc(e.currentTarget.value)
        this.props.setColor(this.props.color[500]);
    }

    render() {
        let flagName = this.props.flagValue;  
        let color = this.props.color;

        return(
            <Button value={flagName} onClick={this.handleButtonState} style={{ backgroundColor: color[500] }}>{flagName}</Button>
        ) 
    }
}

export default InputField;