import React, { Component } from 'react';
import  * as firebase from 'firebase';
import {connect} from 'react-redux';
class App_Note extends Component {
    constructor(props) {
      super(props);
      // this.state = {
      //   data : {}
      // }
    }
    
    getValueTittle = (event)=>{
      var name =  event.target.name;
      var value =  event.target.value;
        this.setState({
          [name] : value
        })
        // this.props.dataRemove(event.target.value) ;
    }
    saveData = (title,content)=>{
        var item = {};
        item.title = title;
        item.content = content;
        // this.props.getData(item);
        this.props.addDataNote(item);
        this.props.alertOn("Them Thanh Cong Ghi Chu CO Thong Tin" + JSON.stringify(item),"info"); //Hien Thong Bao Thanh Cong
    }

    displayForm = ()=>{
        if(this.props.statusDisplayForm === true)
        {
          return (
            <div className="col">
              <div className="card card-border p-3">
                <div className="form-group">
                  <label htmlFor="editTitle">Insert Title</label>
                  <input type="text" className="form-control" name="editTitle" id="editTitle" aria-describedby="helpId" placeholder="Insert Tiêu Đề" onChange={(event)=>this.getValueTittle(event)}/>
                </div>
                <div className="form-group">
                  <label htmlFor="editTitle">Insert Content</label>
                  <textarea type="text" className="form-control" name="editContent" id="editContent" aria-describedby="helpId" placeholder="Insert Nội Dung"  onChange={(event)=>this.getValueTittle(event)}></textarea>
                </div>
                <div className="form-group">
                  <button type="button" className="btn btn-primary btn-block" onClick = {()=>this.saveData(this.state.editTitle,this.state.editContent)}>Lưu Thông Tin</button>
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
    statusDisplayForm: state.statusForm
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addDataNote: (dataAdd) => {
      dispatch({
        type:"ADD_DATA", 
        dataAdd
      })
    },
    alertOn: (alertContent,alertType) => {
      dispatch({
        type:"ALERT_ON", 
        alertContent,
        alertType
      })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App_Note);