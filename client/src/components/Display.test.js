import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Display from './Display';

describe('The Display Component', () => {
    it('should render', () => {
        render(<Display />)
    })

    it('the header should contain "Display" ', () => {
        const { getByText } = render(<Display />)
        getByText(/Display/);
    })

    
})