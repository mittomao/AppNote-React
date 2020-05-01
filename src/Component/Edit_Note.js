import React, { Component } from 'react';
import {connect} from 'react-redux';


class Edit_Note extends Component {

    constructor(props) {
      super(props);
      this.state = {
        title : "",
        id : "",
        content : ""
      }
    }
    
    
    
    componentWillMount() {
      // alert(JSON.stringify(this.props.dataEdit));
    }
    

    editData = ()=>{
        
        if(this.props.dataEdit.id)
        {
          var obj = {};
          obj.id = this.props.dataEdit.id;
          obj.title = this.state.title;
          obj.content = this.state.content;
          this.props.getDataEdit(obj);   
        }
        this.props.alertOn("Sua Thanh Cong Ghi Chu " + JSON.stringify(obj),"success");//hien thi thong Bao thanh cong
        this.props.changeStatusFormEdit();// Dong Form
        // this.props.editForFireBase(this.state);
        //Lay Noi Dung Chinh Sua
    }
    getValueEdit = (event)=>{
        var name = event.target.name;
        var value = event.target.value;
        this.setState({
          [name] : value,
          id : this.props.dataEdit.id
        })
    }
    displayForm = ()=>{
        if(this.props.statusEdit === true)
        {
          return (
            <div className="col">
              <div className="card card-border p-3">
                <div className="form-group">
                  <label htmlFor="editTitle">Edit Title</label>
                  <input type="text" defaultValue = {this.props.dataEdit.title} className="form-control" name="title" id="editTitle" aria-describedby="helpId" placeholder="Edit Tiêu Đề" onChange={(event)=>this.getValueEdit(event)}/>
                </div>
                <div className="form-group">
                  <label htmlFor="editTitle">Edit Content</label>
                  <textarea type="text" defaultValue = {this.props.dataEdit.content} className="form-control" name="content" id="editContent" aria-describedby="helpId" placeholder="Edit Nội Dung"  onChange={(event)=>this.getValueEdit(event)}></textarea>
                </div>
                <div className="form-group">
                  <button type="button" className="btn btn-primary btn-block" onClick = {()=>this.editData()}>Lưu Thông Tin</button>
                </div>
              </div>
           </div>
          )
        }
        else
        {
         return ;
        }
    }
    render() { 
        return (
            <div>
                {this.displayForm()}        
            </div>
        );
        
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        statusEdit: state.statusFormEdit,
        dataEdit : state.dataEdit
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeStatusFormEdit: () => {
      dispatch({
        type : "CHANGE_EDIT"
      })
    },
    getDataEdit: (dataEdit) => {
      dispatch({
        type : "EDIT_DATA_FIREBASE",
        dataEdit
      })
    },
     alertOn: (alertContent,alertType) => {
      dispatch({
        type : "ALERT_ON",
        alertContent,
        alertType
        
      })
    }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Edit_Note);