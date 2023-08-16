'use client'
import { AuthContext } from "@/context/AuthProvider";
import { useContext } from "react";


const Profile = () => {
    const {user} = useContext(AuthContext);
    console.log(user);
    return (
        <div>
            this is profile page
            <p>{user.email}</p>
            <p>{user.displayName}</p>
        </div>
    );
};

export default Profile;