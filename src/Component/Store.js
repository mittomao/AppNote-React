import {firebaseConnect} from './firebaseConnect';

// Khoi Tao Bien redux 
var redux = require("redux");

// addNoteData = (title,content)=>{
//     firebaseConnect.push({
//         title : title,
//         content :content
//     })
// }

// Khoi Tao store bang redux

const statusFormInitialState = false;
const statusFormAdd = (state = statusFormInitialState, action) => {
    switch (action.type) {
        case "CHANGE_STATUS":
            return !state;
        default:
            return state
    }
}

const statusFormEditInitialState = false;
const statusFormEdit = (state = statusFormEditInitialState, action) => {
    switch (action.type) {
        case "CHANGE_EDIT":
            return !state;
        default:
            return state
    }
}

const dataEditInitialState = {}
const dataEdit = (state = dataEditInitialState, action) => {
    switch (action.type) {
        case "GET_DATA_EDIT":
            return action.notes;
        default:
            return state
    }
}
const thaotacInitialState = {
    alertStatus : false,
    alertContent:"",
    alertType : ""
}
const thaotac = (state = thaotacInitialState, action) => {
    switch (action.type) {
        case "ADD_DATA":
            state.title = "Them";
            firebaseConnect.push({
                title : action.dataAdd.title,
                content :action.dataAdd.content
            });
            console.log("Them Thanh Cong " + action.dataAdd);
            return state;
        case "EDIT_DATA_FIREBASE":
            state.title = "Sua";
            
            firebaseConnect.child(action.dataEdit.id).update({
                title : action.dataEdit.title,
                content : action.dataEdit.content
            });
            console.log("Sua Thanh Cong Ghi CHu Co Thong Tin La : " + JSON.stringify(action.dataEdit));
            return state;
        case "DELETE":
           state.title = "Xoa";
           var qs = prompt("Ban Co Muon Xoa " , "Y");
           if(qs === "Y")
           {
            firebaseConnect.child(action.id).remove();
            console.log("Xoa Thanh Cong Ghi CHu Co ID La : " + action.id);
           }
           else
           {
               alert("Chua Xoa");
           }
            return state;
        case "ALERT_ON":
            return {...state,alertStatus:true,alertContent:action.alertContent,alertType:action.alertType};
        case "ALERT_OFF":
            return {...state,alertStatus:false};
        default:
            return state
    }
}


const allReducer = redux.combineReducers({
    statusForm : statusFormAdd,
    statusFormEdit : statusFormEdit,
    dataEdit  : dataEdit,
    thaotac : thaotac
})
var store1 = redux.createStore(allReducer);

export default store1;
