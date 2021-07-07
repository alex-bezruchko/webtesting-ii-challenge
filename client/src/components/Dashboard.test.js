import React from "react";
import ReactDom from "react-dom";
import { render, fireEvent, cleanup } from "react-testing-library";
import Dashboard from './Dashboard';

afterEach(cleanup);

describe('The Dashboard Component', () => {
    it("renders without crashing", () => {
        const div = document.createElement("div");
        ReactDom.render(<Dashboard />, div);
        ReactDom.unmountComponentAtNode(div);
    });

    
})
