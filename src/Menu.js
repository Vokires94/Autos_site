import React from 'react';


class Menu extends React.Component {
    constructor(props) {

        super(props);

    }

    render() {

        return [
            <div className="menu__block " key="a">Vehicles</div>,
            <div className="menu__block " key="b">Models</div>,
            <div className="menu__block " key="c">Search</div>,
            <div className="menu__block " key="d">FAQ</div>

        ]
    }

}

export default Menu