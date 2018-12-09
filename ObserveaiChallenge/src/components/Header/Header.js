import React from 'react';
import UserProfile from '../UserProfile/UserProfile';
import Button from '../UI/Button/Button';

const Header = (props)=>{
    return (
        <header>
            <UserProfile type="large"/>
            <Button onClick = {props.addNewPostClick}>Add Post</Button>
        </header>
    );
}

export default Header;