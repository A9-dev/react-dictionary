import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';


export default function SimpleSnackbar(props) {
    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }



    return (
        <div>
            <Snackbar open={props.open} autoHideDuration={6000} onClose={props.handleClose}>
                <Alert onClose={props.handleClose} severity="error">
                    {props.text}
                </Alert>
            </Snackbar>
        </div>
    );
}
