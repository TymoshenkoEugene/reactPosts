import React from 'react'

import './Auth.scss'
import {PageTemplate} from "../menu/pages";
import AuthenticationService from '../../service/AuthenticationService';


class AuthView extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            errcount: 0,
            serverHost: "/" + process.env.REACT_APP_SERVER_LOGIN_ENDPOINT,
            username: 'jhjhjh',
            password: 'hjhjhj',
            hasLoginFailed: false,
            showSuccessMessage: false
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState(
            {
                [event.target.name]
                    : event.target.value
            }
        )
    }

    handleError = (field, errmsg) => {
        if (!field) return

        if (errmsg) {
            this.setState((prevState) => ({
                failure: '',
                errcount: prevState.errcount + 1,
                errmsgs: {...prevState.errmsgs, [field]: errmsg}
            }))
        } else {
            this.setState((prevState) => ({
                failure: '',
                errcount: prevState.errcount === 1 ? 0 : prevState.errcount - 1,
                errmsgs: {...prevState.errmsgs, [field]: ''}
            }))
        }
    }

    renderError = () => {
        if (this.state.errcount || this.state.failure) {
            const errmsg = this.state.failure
                || Object.values(this.state.errmsgs).find(v => v)
            return <div className="error">{errmsg}</div>
        }
    }

    handleSubmit = (event) => {
        console.log("SASASAS");
        //throw new Error("sss");
        event.preventDefault()
        if (!this.state.errcount) {

            AuthenticationService
                .executeBasicAuthenticationService(this.state.username, this.state.password)
                /*fetch(this.state.serverHost, {
                    method: "post",
                    headers: new Headers({
                        'Authorization': 'Basic ' + window.btoa('admin:admin0Pass'),
                        'Access-Control-Allow-Origin': '*'
                    }),
                    body: new URLSearchParams(data)
                })*/
                .then(v => {
                        /*if(v.redirected) window.location = "http://localhost:3000/about";*/
                        console.log("redir");
                        this.props.history.push("/about");
                    }
                ).catch(
                e => console.warn(e)
            )
        }
    }

    render() {
        return <PageTemplate>
            <form className="form-signin" onSubmit={this.handleSubmit} ref={fm => {
                this.form = fm
            }}>
                <img className="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt=""
                     width="72"
                     height="72"/>
                <h1 className="h3 mb-3 font-weight-normal">Please sign in!!!</h1>
                {/*<label htmlFor="inputEmail" value={this.state.username} className="sr-only">Email address</label>*/}
                <input type="email" name="username" defaultValue={this.state.username} onChange={this.handleChange} className="form-control"
                       placeholder="Email address" required
                       autoFocus/>
                {/*<label htmlFor="inputPassword" value={this.state.password} className="sr-only">Password</label>*/}
                <input type="password" name="password" defaultValue={this.state.username} onChange={this.handleChange} className="form-control"
                       placeholder="Password" required/>
                <div className="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me"/> remember me
                    </label>
                </div>
                <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
            </form>
        </PageTemplate>
    }
}

export default AuthView