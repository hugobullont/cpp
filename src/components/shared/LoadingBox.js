import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

export default class LoadingBox extends React.Component {
    onClose(){

    }
    render(){
        return(
            <Dialog 
                open        = {this.props.loading} 
                onClose     = {this.onClose.bind(this)} 
                maxWidth    = "xs" 
                fullWidth   = {true}
                style       = {{
                    background: 'transparent'
                }}
            >
                <DialogContent>
                    <br/>
                    <span className="loading-message">{this.props.message}</span>
                    <br/>
                    <br/>
                </DialogContent>
            </Dialog>
        );
    }
}