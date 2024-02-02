import { Component } from "react";
// import { signUp } from '../../utilities/users-service';


export default class SignUpForm extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        confirm: '',
        error: ''
    }
    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value,
            error: ''
        })
    }


    handleSubmit = async (evt) => {
      evt.preventDefault()
      try {
        const formData ={...this.state}
        delete formData.error;
        delete formData.confirm;
        const user = await signUp(formData);

        this.props.setUser(user)
      } catch {
        this.setState({error: 'Sign up failed - Try again'})
      }
    }


    render() {
        const disable = this.state.password !== this.state.confirm;
        return (
          <div>
          <div className="container mt-5">
            <form autoComplete="off" onSubmit={this.handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="confirm" className="form-label">
                  Confirm
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="confirm"
                  name="confirm"
                  value={this.state.confirm}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary" disabled={disable}>
                SIGN UP
              </button>
            </form>
          </div>
          <p className="error-message">&nbsp;{this.state.error}</p>
        </div>
      );
    }
  }