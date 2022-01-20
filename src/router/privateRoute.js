import { ApiStorageAction } from "../redux/apiStorageAction"
import React from 'react'
import { Redirect, Route } from 'react-router';

const PrivateRoute = (props) => {
    const { exact, path, render } = props
    return (
        <Route
            exact={exact}
            path={path}
            render={(props) => {
                let accessToken = ApiStorageAction.getAccessToken()
                return (
                    accessToken ?
                        render()
                        : <Redirect to="/login" />
                )
            }}
        />
    );
}

export default PrivateRoute;