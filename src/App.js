import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Login from './components/auth/Login'
import Dashboard from './components/Dashboard'
import { ProtectedRoute } from './components/auth/ProtectedRoute'

function App() {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                <Route path="/" component={Login} exact={true}></Route>
                <ProtectedRoute path="/social-dashboard" component={Dashboard} />
                <Route path="*" component={() => <div>404 : Page not found</div>} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default App