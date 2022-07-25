import React from 'react';
import {connect} from "react-redux";
import {
    followUserAC,
    setCurrentPageAC,
    setTotalUsersPageAC,
    setUsersAC,
    unfollowUserAC
} from "../../state/users-reducer";
import Users from "./Users";
import * as axios from "axios";

class UsersAPIComponent extends React.Component {
    componentDidMount() {
        if (this.props.users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(response => {
                    this.props.setUsers(response.data.items);
                    this.props.setTotalUsersPage(response.data.totalCount);
                });
        }
    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => this.props.setUsers(response.data.items));
    }

    render() {
        return (
            <Users totalCount={this.props.totalCount} pageSize={this.props.pageSize} onPageChanged={this.onPageChanged} currentPage={this.props.currentPage}
                   users={this.props.users} followUser={this.props.followUser} unfollowUser={this.props.unfollowUser}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        followUser: (userId) => {
            dispatch(followUserAC(userId));
        },
        unfollowUser: (userId) => {
            dispatch(unfollowUserAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setTotalUsersPage: (totalCount) => {
            dispatch(setTotalUsersPageAC(totalCount));
        },
        setCurrentPage: (page) => {
            dispatch(setCurrentPageAC(page));
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);

export default UsersContainer;