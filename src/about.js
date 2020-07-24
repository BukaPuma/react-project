
import React, {useContext} from 'react'
import PropTypes from 'prop-types';
import {ThemeContext} from './context'

const About = (props) => {

const {theme, setTheme} = useContext(ThemeContext);
    return (
    <>
        <h2>{props.name} {theme} </h2>
        <button onClick={setTheme}>Click</button>
    </>
    )
}

About.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    name: PropTypes.string,
    phone: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

About.defaultProps = {
    title: 'Default',
    name: 'name'
}

export default About