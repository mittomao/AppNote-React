import React, { Component } from 'react';
import List_Note from './List_Note';
import Add_Note from './Add_Note';
import {firebaseConnect} from './firebaseConnect';
import  * as firebase from 'firebase';
import Edit_Note from './Edit_Note';
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id : ""
        }
    }
    
    //  pushData = () => {
    //     //  Khoi tao doi tuong firebaseConnect
    //     var dataFirebase = firebase.database().ref("DataNote/");
    //     // Them Du Lieu Bang Ham Push
    //     dataFirebase.push({
    //         title : "Y Te",
    //         content : "Co Toi 28000 Ca Lay Nhiem Corona Tren Toan the Gioi"
    //     })
    //      // dataFirebase.set({
    //     //     id : 2,
    //     //     title : "Kinh Te",
    //     //     content : "Thi Truong Chung Khoan Trung Quoc SUy Giamr Manh"
    //     // });
    //  } 
    //  removeData = (id)=>{
    //     var dataFirebase = firebase.database().ref("DataNote/");
    //     dataFirebase.child(id).remove();
    //      console.log("Ban Da Xoa Phan Tu Co id La : " + id) ;
    //  }

    //   getData = (item) => {
    //         var fb = firebase.database().ref("DataNote/");
    //         fb.push(item);
    //   } 
    render() {
        
        // console.log(firebaseConnect);
        
        // var data = firebase.database().ref('DataNote/');
        // // Lay du Lieu Tu firebase
        //     data.once('value').then(function(snapshot){
        //         // console.log(snapshot.val());  
        //     })

      
        
        return (
            <div>
        
        <div className="container">
          <div className="row">
                <Edit_Note></Edit_Note>
                <List_Note></List_Note>
                <Add_Note></Add_Note>
                {/* <button className="btn btn-primary" onClick = {()=>this.pushData()}>Click Add Data</button>
                <button className="btn btn-primary" onClick = {()=>this.removeData(this.state.id)}>Click Delete Data</button> */}
            </div>
        </div>
      </div>
        );
    }
}

export default Main;