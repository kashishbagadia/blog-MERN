import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"

export default function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Account</span>
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img src="https://media-exp3.licdn.com/dms/image/C4D03AQGfptlNrfIGZA/profile-displayphoto-shrink_400_400/0/1595252971533?e=1629936000&v=beta&t=2_TtG504yo-X0UrcRfhNGPjvsDZksNct4FOUyWAoY1Q" alt="" />
                        <label htmlFor="fileInput">
                            <i class="settingsPPIcon far fa-user-circle"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display:"none"}}/>
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="Kashish"/>
                    <label>Email</label>
                    <input type="email" placeholder="kashish@gmail.com"/>
                    <label>Password</label>
                    <input type="password"/>
                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
            <Sidebar />            
        </div>
    )
}
