import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, setCurrentPage, togleFollowingProgress, getUsersThunkCreator} from "../../redux/users-reducer";
import Users from './Users';
import Preloader from '../common/Preloader'
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
        // this.props.togleIsFetching(true);
        // userAPI.getUsers(this.props.currentPage, this.props.pageSize).then( data => {
        //         this.props.togleIsFetching(false);
        //         this.props.setUsers(data.items);
        //         this.props.setTotalUsersCount(data.totalCount);
        //     });
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
        // this.props.setCurrentPage(pageNumber);
        // this.props.togleIsFetching(true);

        // getUsers(pageNumber, this.props.pageSize).then(data => {
        //         this.props.togleIsFetching(false);
        //         this.props.setUsers(data.items);
        //     });
    }

    render()  {
        return <>
        { this.props.isFetching ? <Preloader /> : null }
        <Users totalUsersCount = {this.props.totalUsersCount}
                      pageSize = {this.props.pageSize}
                      currentPage = {this.props.currentPage}
                      onPageChanged = {this.onPageChanged}
                      users = {this.props.users}
                      follow = {this.props.follow}
                      unfollow = {this.props.unfollow}
                      togleFollowingProgress = {this.props.togleFollowingProgress}
                      followingInProgress = {this.props.followingInProgress}

        />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

/*let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
        togleIsFetching: (isFetching) => {
            dispatch(togleIsFetchingAC(isFetching))
        }
    }
}*/

export default compose(
    withAuthRedirect,
    connect( mapStateToProps, { follow, unfollow, setCurrentPage, togleFollowingProgress, getUsers: getUsersThunkCreator})
)(UsersContainer);