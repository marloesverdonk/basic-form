import React from 'react'

export default function Form(props) {
    return (
        <div>
            <form onSubmit={props.onSubmit}>
                <input
                    name='email'
                    type='text'
                    placeholder='email'
                    onChange={props.onChange}
                    value={props.values.email}
                >
                </input>
                <input
                    name='password1'
                    type='text'
                    placeholder='password'
                    onChange={props.onChange}
                    value={props.values.password1}
                >
                </input>
                <input
                    name='password2'
                    type='text'
                    placeholder='password'
                    onChange={props.onChange}
                    value={props.values.password2}
                >
                </input>
                <button type='submit'>
                    Submit
                </button>
            </form>
        </div>
    )
}