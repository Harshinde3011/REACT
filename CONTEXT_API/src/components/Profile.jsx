import { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
    // Read the shared user value from the nearest Context Provider.
    // Profile will re-render when setUser updates this value.
    const { user } = useContext(UserContext);

    if (!user) return <div>Please login</div>

    return (
        <div>
            Welcome {user.username}
        </div>
    );
}

export default Profile;