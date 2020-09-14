"use strict";

const username = 'a'
const password = '1'


class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputu: "",
            inputp: ""
        };
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleUserChange(event) {
  
        this.setState({
            inputu: event.target.name,
            inputu: event.target.value,
        });
    }

    handlePasswordChange(event) {

        this.setState({
            inputp: event.target.name,
            inputp: event.target.value,
        });
    }


    handleSubmit(event) {
        if (this.state.inputu === username && this.state.inputp === password) {
            event.preventDefault();
            alert("You have successfully logged in.");
        } else {
            event.preventDefault();
           // login-error-msg.style.opacity = 1;
            alert("Invalid userid/password");
        }
    }

    render() {
        return CE(React.Fragment, null,

            CE("div",
            {
                className: "topnav"
            },
       CE(
                "h1",
                {
                    id: "login-header"
                },
                "Login"
            ),
       CE(
           "h2",
           {
               id: "login-msg-1" 
           },
           "Welcome to Login"
            ),
            ),


       CE( 
           "div",
            { 
                className: "topnav", 
                id: "login-error-msg-holder"
            },
            
            CE(
                "p",
                {
                    id: "login-error-msg" 
                },
                "Invalid username",
            CE(
                   "span",
                   {
                       id: "error-msg-second-line"
                   },
                   "and/or password"
                )
            )
           ),

       CE(
                "form",
                {
                    id: "login-form",
                    onSubmit: this.handleSubmit
                },
        CE("input", {
                    type: "text",
                    id: "username-field",
                    className: "login-form-field",
                    placeholder: "Username",
                    value: this.state.inputu,
                    onChange: this.handleUserChange
                }),
        CE("input", {
                    type: "text",
                    id: "password-field",
                    className: "login-form-field",
                    placeholder: "Password",
                    value: this.state.inputp,
                    onChange: this.handlePasswordChange
                }),
        CE("input", {
                    type: "submit",
                    value: "Submit",
                    id: "login-form-submit"
                })
            )
        );  
    }
}

const domContainer_login = document.querySelector('#login_container');
ReactDOM.render(CE(LoginForm), domContainer_login);
