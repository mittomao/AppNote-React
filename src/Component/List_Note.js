import React, { Component } from 'react';
import List_Note_Item from './List_Note_Item';
import data from './data.json';
import  * as firebase from 'firebase';
import {connect} from 'react-redux';
import {firebaseConnect} from './firebaseConnect';
var i = 0;
class List_Note extends Component {
    
    constructor(props) {
        super(props);
       
        this.state = {
            dataFirebase : []
        }
    }
    
    componentWillMount() {  
            //Test Kiem Tra Du Lieu 
            console.log(data);
            console.log(firebaseConnect);
            firebaseConnect.on('value',(notes)=>{
            var arrData = [];
            notes.forEach(element => {
                const key = element.key;
                const title = element.val().title;
                const content = element.val().content;
                arrData.push({
                    id : key,
                   title : title,
                   content : content
                });
                
            });
            this.setState({
                dataFirebase : arrData
            })
        })
    }
    
    getDataFirebase = ()=>{  
        
    }

    changeEditForm = ()=>{
        this.props.changeStatusForm();
    }
    render() {
       
    //    console.log(this.state.dataFirebase);
        return (
            <div className="col">
              <div id="note" role="tablist" aria-multiselectable="true">
                    {
                        this.state.dataFirebase.map((value,key)=>{
                            
                            return <List_Note_Item id = {key} 
                            key = {key} title = {value.title} 
                            content = {value.content}
                            notes = {value}>
                                
                            </List_Note_Item>
                        })
                    }
                    <button type="button" className="btn btn-block btn-primary" onClick = {()=>this.changeEditForm()}><i className="fa fa-plus"></i></button>
              </div>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        status: state.statusForm
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeStatusForm: () => {
            dispatch({
                type : "CHANGE_STATUS"
            })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(List_Note)