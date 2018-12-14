import React from 'react';
import { shallow, mount } from 'enzyme';

import TextInput from './TextInput';

const handleChange = jest.fn( (text) => text);
describe ( 'Text Input Component for Movie Review Form', () => {
    
    it('Should render correctly with provided props',() => {
        const textinput = mount (
             <TextInput
                name="name"
                value="tarzan"
                handleChange={(handleChange)}
                label="Movie Name" 
             />
            );
        expect(textinput.props().name).toBe("name");
        expect(textinput.props().value).toBe("tarzan");
        expect(textinput.props().label).toBe("Movie Name");
        expect(textinput.props().handleChange("Changed")).toBe("Changed");
        expect(textinput.props().handleChange("Changed22")).toBe("Changed22");
    })
})