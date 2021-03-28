import React from "react";
import TextField from "@material-ui/core/TextField";

class InputFieldDisabled extends React.Component {

    handleFieldValue = (e) => {
        this.props.colorFunc(e.currentTarget.value)
    }

    render() {

        let fieldLabel = this.props.inputLabel;
        let inputValue = this.props.inputValue;

        return(
            <TextField disabled label={fieldLabel} value={inputValue} onChange={this.handleFieldValue} />
        ) 
    }
}

export default InputFieldDisabled;