import React, { useEffect } from 'react'
import './popup.css'
import LinkIcon from '@mui/icons-material/Link';
const Popup = (props) => {
    const handleClose=()=>{
    }
    useEffect(()=>{
        console.log(props);

    })
  return (
    <div className='popup' >
        <div className="popupCenter">
            <div className="popupCenterTop">
                <div className="popupCenterTop1">
                    <p>{props.name}</p>
                    <div className='popupCenterTop12'>
                        <LinkIcon/>
                        <input type="text" placeholder='https://xyz.com' />
                        <div>
                            <button>Enter</button>
                        </div>
                    </div>
                </div>
                <div className="popupCenterTop2">
                    <div className="popupCenterTop21">
                        <p>Result :-</p>
                    </div>
                </div>
            </div>
            <div className="popupCenterBottom">
                <button onClick={props.openPopup} >Close</button>
            </div>
        </div>
    </div>
  )
}

export default Popup