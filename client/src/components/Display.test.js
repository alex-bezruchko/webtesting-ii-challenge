import React from 'react';
import { render,cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';
afterEach(cleanup);

import Display from './Display';

describe('The Display Component', () => {
    it('should render', () => {
        render(<Display />)
    })

    it('the header should contain "Display" ', () => {
        const { getByText } = render(<Display />)
        getByText(/Display/);
    })

    it("should render the number of balls and strikes", () => {
        const props = { balls: 1, strikes: 1 };
    
        const { getByTestId } = render(<Display {...props} />);
        
        const balls = getByTestId("ball-count");
        expect(balls.textContent).toBe("Balls: 1");

        const strikes = getByTestId("strike-count");
        expect(strikes.textContent).toBe("Strikes: 1");
      });
    
})