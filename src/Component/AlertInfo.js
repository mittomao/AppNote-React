import React, { Component } from 'react';
import { Alert,AlertContainer } from "react-bs-notifier";
import {connect} from "react-redux"
class AlertInfo extends Component {
    handleAlertOff = ()=>{
        this.props.alertOff();
    }
    render() {
        if(this.props.alertStatus===false) return null;
        return (
            <AlertContainer position = "bottom-right">
    <Alert type={this.props.alertType} onDismiss = {()=>{this.handleAlertOff()}} timeout = {2000}>{this.props.alertContent}</Alert>
            </AlertContainer>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        alertStatus: state.thaotac.alertStatus,
        alertContent : state.thaotac.alertContent,
        alertType : state.thaotac.alertType
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        alertOff: () => {
            dispatch({
                type : "ALERT_OFF"
            })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(AlertInfo);