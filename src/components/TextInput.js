import React from 'react';
import {FormGroup,HelpBlock,ControlLabel,FormControl} from 'react-bootstrap';

export default function TextInput(props) {
  return(
    <FormGroup
        controlId={props.name}
    //validationState={this.getValidationState()}
    >
        <ControlLabel>{props.label}</ControlLabel>
        <FormControl
            bsSize="sm"
            type="text"
            name={props.name}
            value={props.value}
            placeholder=""
            onChange={props.handleChange}
        />
        <FormControl.Feedback />
        <HelpBlock></HelpBlock>
    </FormGroup>
  );
}
