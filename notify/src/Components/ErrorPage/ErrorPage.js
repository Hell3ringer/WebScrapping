import { Typography } from '@material-ui/core'
import React, { Component } from 'react'

export class ErrorPage extends Component {
    render() {
        return (
            <div>
                <Typography style={{textAlign:'center'}}>
                    Error 404!!
                    Page does not exist!!
                </Typography>
            </div>
        )
    }
}

export default ErrorPage
