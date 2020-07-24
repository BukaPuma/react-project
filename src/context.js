import React, {Component} from 'react'

export const ThemeContext = React.createContext('dark')

export class ThemeProvider extends Component {
    state = {
        parId: 0
    }

    setId = () => {
        this.setState({parId : this.props.id})
    }

    render() {
        const {children} = this.props
        return (
            <ThemeContext.Provider value={{
                parId: this.state.parId,
                setId: this.setId}}>
                    {children}
                </ThemeContext.Provider>
        )
        }     
    
}

export const ThemeConsumer = ThemeContext.Consumer