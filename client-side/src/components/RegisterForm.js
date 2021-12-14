import React, {useState, useEffect} from 'react'

function RegisterForm({onRegisterFormSubmit}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [userName, setUserName] = useState("")
    const [teamName, setTeamName] = useState("")

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const handleUserNameChange = (event) => {
        setUserName(event.target.value)
    }

    const handleTeamNameChange = (event) => {
        setTeamName(event.target.value)
    }

    const handleFormSubmission = (event) => {
        event.preventDefault();

        const newUser = {
            email: email,
            password: password,
            username: userName,
            teamName: teamName
        }

        onRegisterFormSubmit(newUser);

        setEmail("")
        setPassword("")
        setUserName("")
        setTeamName("")
    }

    return (
        <div className="login-display">
            <h2>Register</h2>
            <form onSubmit={handleFormSubmission}>
                <div className="form-element">
                    <label htmlFor="email">Email:</label>
                    <input type="text" id="email" value={email} onChange={handleEmailChange} />
                </div>
                <div className="formElement">
                    <label htmlFor="password">Password: </label>
                    <input type="password" id="password" value={password}
                        onChange={handlePasswordChange} />
                </div>
                <div className="formElement">
                    <label htmlFor="userName">Username: </label>
                    <input type="text" id="userName" value={userName}
                        onChange={handleUserNameChange} />
                </div>
                <div className="formElement">
                    <label htmlFor="teamName">Team name: </label>
                    <input type="text" id="teamName" value={teamName}
                        onChange={handleTeamNameChange} />
                </div>
                <div className="formElement">
                    <input type="submit" value="Sign in"/>
                </div>
            </form>
        </div>
    )
}

export default RegisterForm
