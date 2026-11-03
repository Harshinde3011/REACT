import { useParams } from "react-router-dom"

// takes value from params
export default function User() {
    const {userid} = useParams();

    return (
        <>
            User: {userid}
        </>
    )
}