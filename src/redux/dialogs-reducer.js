const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE ='SEND-MESSAGE';

let initialState = {
    messageData: [
        {id: 1, message:'Hi'},
        {id: 2, message:'How are you?'},
        {id: 3, message:'I am ok'}
    ],
    dialogData: [
        {id: 1, name:'Tatca'},
        {id: 2, name:'Irisha'},
        {id: 3, name:'Igori'},
        {id: 4, name:'Serghey'},
        {id: 5, name:'Piotr'},
        {id: 6, name:'Lena'}
    ],
    newMessageBody: ""
};

const dialogsReducer = (state = initialState, action) => {
    
    // let stateCopy = {
    //     ...state,
    //     //messages: [...state.messages]
    // };
    // //stateCopy.messages = [...state.messages];
    switch(action.type){
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                 ...state,
                 newMessageBody: action.body
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messageData: [...state.messageData, {id: 4, message: body}]
            };
        default:
            return state;
    }   
}

export const sendMessageCreator = () => {
    return {type: SEND_MESSAGE}
  }
export const updateNewMessageBodyCreator = (body) => {
    return { type: UPDATE_NEW_MESSAGE_BODY, body: body }
  }
export default dialogsReducer;