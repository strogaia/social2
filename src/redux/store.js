import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message:'Hi, how are you?', likesCount: 12},
                {id: 2, message:'It/s my first post!', likesCount: 11}
              ],
            newPostText: 'Enter a new post here'
        },
        dialogsPage: {
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
        },
        sidebar:{},
        usersPage:{}
    },
    _callSubscriber() {
        console.log ('State changed');
    },

    getState(){
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action){ 

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;

