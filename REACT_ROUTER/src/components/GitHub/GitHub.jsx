import { useLoaderData } from "react-router-dom";

function GitHub() {
    // This page uses React Router's loader instead of useState.
    // The loader fetches data before this route is displayed, while useState
    // is mainly used to store and update values changed inside a component.
    // Therefore, useLoaderData() reads route data without creating extra
    // loading state or using useEffect to start the API request.
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/Harshinde3011')
    //     .then(response => response.json())
    //     .then(data => setData(data))
    // },[])

    const data = useLoaderData();
    return(
        <div className="text-center m-4 bg-gray-500 text-white text-3xl">
            GitHub followers: {data.followers}
            <img src={data.avatar_url} alt="Git picture" width={300}/>
        </div>
    )
}

export default GitHub;

export const fetchGitHubInfo = async() => {
    const response = await fetch('https://api.github.com/users/Harshinde3011');

    return response.json()
}