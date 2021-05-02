import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react'
import React from 'react'
import { useHistory } from 'react-router'

function Login() {
    const history = useHistory()
    const handlegotohome = () => history.push('/')

    return (
        <div>
            login
            <button onClick={handlegotohome}>go to home</button>
            <AmplifySignOut button-text="Sign out"></AmplifySignOut>
        </div>
    )
}

export default withAuthenticator(Login)
