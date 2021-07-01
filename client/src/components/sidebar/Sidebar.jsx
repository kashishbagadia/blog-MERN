import axios from "axios";
import { useEffect, useState } from "react"
import "./sidebar.css"
import { Link } from "react-router-dom";

export default function Sidebar() {
    const [cats,setCats] = useState([]);

    useEffect(()=>{
        const getCats = async()=>{
            const res = await axios.get("/categories")
            setCats(res.data)
        }
        getCats()
    },[])
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATYAAACjCAMAAAA3vsLfAAABDlBMVEX4+Pj////qQzU0qFNChfT7vAT7uQA2f/TpLRiux/oXokL936D7+/v7twD7ugDpOSnpNCIopUvV4vw9gvQufPP+9/f1s6/qPi/xjIb+9eD+7szqPC3vQCf/46klp1X3/Phil/Znunu/4MfrTkLucWjzop361tTymJP97u3pKxT3w7/+57f81oD803X92Yz//fb8xTz7wCL+89j93Zf8z2bsWU78y1b8xT75zcv+6sD8zmLwg3z73drpNzftaF79ysLn1IjKxGC1uUOptimiYamiZ6SkdbGnjsessOSsxfl4w5IadfOaz6YzqkOv2LhZkPu80fvh8OR9pv2buvnh6/3R6dZPsWiGrffY5PyPs/hREGF0AAAE60lEQVR4nO3de1faSBzGcROEBCQkmFgq1IJu3a7rYr10b+1e3e22urbSahf7/t/IJhQEMhPmx3RCzpl5vv+Tc+bjTO7HrK0hhBBCCCGEEEIIIYQQQgghhBBCSLPqdeuLq9eLHsVKUyA2Y1f0aFaTUjNT5HJAMwAuH7SkokeWZ/mpaeyW0wKdpOlCzVlNU7fc1fR0y19Nx/3bKtT0c1vBEk3SbZmuRk236baiyabbdJMz2NpanrvokapMbrI9cAP/qyf7Xy/1I52mm5SadWDHtXzXfvrNEr8qeqwKk2Nz7XH+wcMtA9kkDwj3bDFc8C31V/qs0i9ns233oXFscmrzbHbwhPizokerLCVstk90K3q0ylLDZge0dVr0aJWliM0+IB0Xih6tslSx2T7lPKTo0SpLHRtlmRY9WlXJXsezbLZLuF7Q5QxEIZv/FGwSbHYLbDJsrvh+CNg4q3QfbBJsLfGlAth4ge1z24dn3/X7RzvtZxS2QPhHMIGt3S97XqURV/G84405OS6bK7xQ0J/t8MRrlGeqeP1tEZvwhFd3ttMTr5yu4R0tZgtMn21nLFqSdzyZcFw2X6SmOdtzvloy406z2Vrfm832QyVLLZ5w7Uy2jvgeiM5szxeoxW7bWWyEJ1gas21krtBxWWyEO0f6sm2L1Cp9PluH8BhGX7YfBWqfd2+825Q/Gcz2s2iyxR3z2AjHUY3ZjsVqyXRj2Q4obx/pynZKmGzlxguWzX9JUNOW7aghVounG8PWEt800pnthKIWr1I/fc5Ge81NU7ZnlDUar9Kzzvxcc38hqenK1qaxlV/8OnfG1iGq6cp2uPC6atrJLFvwG/l9Sk3ZNohs5Smb7z+gomnLdrYkWyfw9+mv7mrL1vYqwpKHC+XgUZz76OXvS5jpy2a1Nxa2s7Pzx5/n5+d//f3q1T+v31QH1YVdbBrCJmjv8nHzcVzNCdfDMHRE/ZtyM5Gte9WsNUuj3jrrpJwL49neNcdmCVtIZKsaztbdrZWmvb0msg3MZns/M9UStg+06RbdGc32fnaqJWw3tJ1blHo32Cy2tFqpthlR1MLr1IbMYiulq1kkNufGZLbLJstG2rlFtwazfUwv0YSNskrDXnpTJrH9x6jFbFZPPN2i9LWVSWycyZaw3QmnGzvZTGLbZfZsIzZrKDoHYfZsJrF1OZNtxGatL16mUZXdmDlse5lstwuXqTPkbMwcNvbsY8K2cPfmfOBtzBw2znF0wmbdOVnrNOLNNZPYeJNtwmbd9rjHhTC64G/MGDbuEeGezbJuInbCRT32GAq2OTbrdhjNLdUwuh5kbg1s09aqvShynNGzhSgcMpcGRrIt3Lfdc2wObj4NP10MslanaWzsTSMeGzVz2HbBxiZmu8o+3QVbdrwbIGATDxWLlI3AxlulYBPGPLYCG+l/HHHugciyFT1aZRHGyjnjBRsh9k4l2ChdMk/lwUYp/RgGbFJuxrNR39SaX6eSbNqcf9DfC9yrNcE2jTzm7uUUTpKt6LEqbIlRd69KYzmwLfeK/cer3VKzVnsnpabRGpX4F7LdbldKTafJhm/ByLYqtqLHqTh850qu1bAVPUr1QU0uqEmF75PKha/hSpanWtFjyzOoyYXvykuWA5z+aKOUyhliNq6uwK5uFhlCCCGEEEIIIYQQQgghhBBCCCFkRP8DEI2LWGC8iP0AAAAASUVORK5CYII=" alt="" />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non ipsa culpa iste molestiae, dolorum minus? Excepturi illo vel atque quos nesciunt, ipsum vero explicabo reprehenderit alias repellendus hic animi aspernatur.</p>
            </div>
            <div className="sidebarItem">
                <div className="sidebarTitle">CATEGORIES</div>
                <ul className="sidebarList">
                    {cats.map((c)=>(
                        <Link to={`/?cat=${c.name}`} className="link"><li className="sidebarListItem">{c.name}</li></Link>
                        

                    ))}                    
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                <i className="sidebarIcon fab fa-facebook-square"></i>
                <i className="sidebarIcon fab fa-twitter-square"></i>
                <i className="sidebarIcon fab fa-pinterest-square"></i>
                <i className="sidebarIcon fab fa-github-square"></i>
                </div>
            </div>
        </div>
    )
}
