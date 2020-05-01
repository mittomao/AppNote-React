import React, { Component } from 'react';
import {connect} from 'react-redux';

class List_Note_Item extends Component {
  //nhan Dc 1 this.props.notes tu List_note
  deleteData = ()=>{
    this.props.alertOn("XOa Thanh Cong Ghi CHu Co Id La " + this.props.notes.title,"warning");
      this.props.getDataDelete(this.props.notes.id);
  }
  changeStatusFormEdit = () => {
    this.props.changeFormEdit();//thay doi trang thai cua form
    console.log(this.props.notes);//notes lay tu component cha chuyen xuong
    this.props.getDataEdit(this.props.notes);//lay gia tri cua 2 the input de truyen vao store
  } 
    render() {
      console.log(this.props.status);
        return (
            <div className="card">
                  
                  <div className="card-header" role="tab" id={"note" + this.props.id}>
                      <div className="d-flex justify-content-between">
                        <h5 className="mb-0">               
                          <a data-toggle="collapse" data-parent="#note" href={"#noteContent" + this.props.id} aria-expanded="true" aria-controls={"noteContent" + this.props.id}>
                            {this.props.title}
                          </a>
                        </h5>
                        <div className="float-right">
                        <button className="btn btn-outline-primary" onClick = {()=>this.changeStatusFormEdit()}>Edit</button>
                        <button className="btn btn-outline-danger" onClick = {()=>this.deleteData()}>Delete</button>
                      </div>
                      </div>
                  </div>
                  <div id={"noteContent" + this.props.id} className="collapse in" role="tabpanel" aria-labelledby={"note" + this.props.id}>
                    <div className="card-body">
                      {this.props.content}
                    </div>
                  </div>
                </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
  return {
    status: state.statusFormEdit
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeFormEdit: () => {
      dispatch({
        type : "CHANGE_EDIT"
        
      })
    },
   getDataEdit: (notes) => {
      dispatch({
        type : "GET_DATA_EDIT",
        notes
      })
    },
    getDataDelete: (id) => {
      dispatch({
        type : "DELETE",
        id
      })
    },
    alertOn: ( alertContent,alertType ) => {
      dispatch({
        type : "ALERT_ON",
        alertContent ,
        alertType
      })
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(List_Note_Item);