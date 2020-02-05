import React from 'react'
import Form from './Form'



export default class FormContainer extends React.Component {
    state = {
        email: "",
        password1: "",
        password2: "",
        isSignedUp: false
    }


    onSubmit = (event) => {
        event.preventDefault()
        if (this.state.email.includes('@')
            && this.state.password1 === this.state.password2
            && this.state.password1 !== "") {

            this.setState({
                email: "",
                password1: "",
                password2: "",
                isSignedUp: true
            })
        } else {
            alert(`Not an emailadres / *password doesn't contain a Capital and number* / passwords don't match or empty / `)
        }

    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        let greeting;

        if (this.state.isSignedUp) {
            greeting = <h4>You are signed up</h4>
        } else {
            greeting = <h4>Please sign up</h4>
        }

        return (
            <div>
                {greeting}
                <Form
                    onSubmit={this.onSubmit}
                    onChange={this.onChange}
                    values={this.state}
                />
            </div>
        )

    }
}