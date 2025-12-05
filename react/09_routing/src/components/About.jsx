import { useParams, useNavigate } from "react-router-dom"
export default function About(){
    const {username} = useParams()
    const navigate = useNavigate()

    const handleGoHome = () => {
        navigate('/') // Programmatically go to home
    }

    const handleGoToProfile = () => {
        navigate('/profile') // Go to profile
    }

    const handleGoBack = () => {
        navigate(-1) // Go back one page in history
    }

    return(
        <>
        <div>
            <h2>About Section</h2>
            {username ? (
                <p>Showing profile for: <strong>{username}</strong></p>
            ) : (
                <p>General about page</p>
            )}
            
            <div style={{marginTop: '20px'}}>
                <button onClick={handleGoHome}>Go to Home</button>
                <button onClick={handleGoToProfile}>Go to Profile</button>
                <button onClick={handleGoBack}>Go Back</button>
            </div>
        </div>
        </>
    )
}