import React from "react";

const User = ({userData}) => {
    return (
        <tr>
            <td>{userData.name}</td>
            <td>{userData.email}</td>
            <td>{userData.id}</td>
        </tr>
    )
}

const UserList = () => {
    const users = [
        {email: 'summer@gmail.com', name: 'summer', id:'user1'},
        {email: 'winter@gmail.com', name: 'winter', id:'user2'},
        {email: 'user@gmail.com', name: 'user', id:'user3'},
        {email: 'fall@gmail.com', name: 'fall', id:'user4'},
        {email: 'hey@gmail.com', name: 'hey', id:'user5'},
    ];
    return (
        <table>
            <thead>
            <tr>
                <th>이름</th>
                <th>이메일</th>
                <th>아이디</th>
            </tr>
            </thead>
            <tbody>
            {users.map(user => <User userData={user}/>)}
            </tbody>
        </table>
    )
}

export default UserList;