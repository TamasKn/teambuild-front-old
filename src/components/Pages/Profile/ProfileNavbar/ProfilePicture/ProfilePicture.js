import React, { useState } from "react"
import "./ProfilePicture.css"
import { Link, withRouter } from "react-router-dom"
import auth from "../../../../../utils/Auth"

/* Props list:

userImg, userName => user data
userSettings => link to the user settings action/page
userLogout => link to the user logout action/page
userSignedIn => User logged in state. Module only shown on 1, is set to 0 on logout
*/

const ProfilePicture = ({
    userImg,
    userSettings,
    userLogout,
    userSignedIn,
    history,
}) => {
    const [hover, setHover] = useState(0)
    const [SignedIn, setSignedIn] = useState(userSignedIn)

    const userMouse = e => {
        setHover(e)
    }
    const signedIn = e => {
        auth.logout(() => history.push("/signin"))
    }

    return (
        <div>
            <div className={`userNav ${SignedIn === 0 && "hidden"}`}>
                <div
                    className="userNav__img-wrapper"
                    onMouseEnter={() => userMouse(1)}
                    onMouseLeave={() => userMouse(0)}
                >
                    <img
                        className="userNav__img-wrapper__img"
                        src={userImg}
                        alt="user profile"
                        onMouseEnter={() => userMouse(1)}
                    />
                </div>
                <div
                    className={`subMenu ${hover === 0 && "hidden"}`}
                    onMouseEnter={() => userMouse(1)}
                    onMouseLeave={() => userMouse(0)}
                >
                    <Link className="link" to={userSettings}>
                        <a className="" href="#">
                            Account settings
                        </a>
                    </Link>
                    <Link className="link" to={userLogout}>
                        <a className="" href="#" onClick={() => signedIn()}>
                            Logout
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default withRouter(ProfilePicture)
