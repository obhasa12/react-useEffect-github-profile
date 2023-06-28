import axios from "axios";
import { useEffect, useState } from "react";
import ProfileSearchForm from "./ProfileSearchForm";

const BASE_URL = "https://api.github.com/users"

const ProfileViewerWithSearch = () => {
    const [username, setUsername] = useState("nick");
    const [profile, setProfile]= useState({ data: null, isLoading: true });

    useEffect(
        function fetchUserOnUsernameChange(){
            async function fetchUser() {
                const userResult = await axios.get(`${BASE_URL}/${username}`);
                // setProfile({data: userResult.data, isLoading:false});
                setProfile({data: userResult.data})
                console.log(userResult.data, profile)
            }
            fetchUser();
        },
        [username]
    )
    
    function searchUser(username) {
        setProfile({ data: null, isLoading: true});
        setUsername(username);
        console.log("hi")
    }

    if(profile.isLoading) return <i>Loading...</i>
    
    return (  
        <div>
            <ProfileSearchForm tombol={searchUser} />
            <b>{profile.data.name}</b>
            <img src={profile.data.avatar_url}/>
        </div>
    );
}
 
export default ProfileViewerWithSearch;