import React from "react";
import {shallow, mount} from "enzyme";

import Game from "./game";

describe("<Game/>", () => {

    it("Renders without crashing", () => {
        shallow(<Game/>);
    });

    it("Can make guess without crashing", () => {
        const wrapper = mount(<Game/>);
        wrapper.instance().guess(5);
        expect(wrapper.state('guesses')).toEqual([5]);
    });

    it("Can start a new game without crashing", () => {
        const wrapper = mount(<Game/>);

        wrapper.setState({
            guesses: [0, 5, 7, 19]
        });

        wrapper.instance().newGame();

        expect(wrapper.state("guesses")).toEqual([]);
    });


});