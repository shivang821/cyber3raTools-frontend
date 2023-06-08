import React, { useRef, useState } from 'react'
import './tools.css'
import logo from '../../images/cyber3ra-1.png'
import Popup from './Popup'
import CellTowerIcon from '@mui/icons-material/CellTower';
import LockIcon from '@mui/icons-material/Lock';
import HttpIcon from '@mui/icons-material/Http';
const Tools = () => {
  const [popupOpen, setPopupOpen] = useState(false)
  const [toolName,setToolName]=useState("")
  const openPopup = (tName) => {
    setToolName(tName)
    setPopupOpen(!popupOpen)
  }
  return (
    <div className='tools' >
      <div className="toolsTop">
        <div className='toolsTop1'>
          <img src={logo} alt="" />
          <p>CYBER<span>3</span>RA</p>
        </div>
        <div className='toolsTop2'>
          <p> <span > <span>E</span>mpower</span> Your Digital Defense with Cutting-Edge Cybersecurity Tools: <br /> Safeguarding Your Online World!</p>
        </div>
      </div>
      <div className="toolsBottom">
        <div>
          <div onClick={() => openPopup('Ping')} className='toolItem' >
            <div className='toolItemLeft' >
              <CellTowerIcon />
            </div>
            <div className='toolItemRight' >
              <div className="toolsItemRight1">
                <h3>Ping</h3>
              </div>
              <div className="toolsItemRight2">
                <p>get details about a url</p>
              </div>
            </div>
          </div>
          <div onClick={() => openPopup('SSL Lookup')} className='toolItem' >
            <div className='toolItemLeft' >
              <LockIcon />
            </div>
            <div className='toolItemRight' >
              <div className="toolsItemRight1">
                <h3>SSL Lookup</h3>
              </div>
              <div className="toolsItemRight2">
                <p>Get details about an SSL Certification</p>
              </div>
            </div>
          </div>
          <div onClick={() => openPopup('Safe URL Checker')} className='toolItem' >
            <div className='toolItemLeft' >
              <HttpIcon />
            </div>
            <div className='toolItemRight' >
              <div className='toolsItemRight1'>
                <h3>Safe URL Checker</h3>
              </div>
              <div className='toolsItemRight2'>
                <p>Check whether a URL is Safe or not</p>
              </div>
            </div>
          </div>
          <div onClick={() => openPopup('Ping')} className='toolItem' >
            <div className='toolItemLeft' >
              <CellTowerIcon />
            </div>
            <div className='toolItemRight' >
              <div className="toolsItemRight1">
                <h3>Ping</h3>
              </div>
              <div className="toolsItemRight2">
                <p>get details about a url</p>
              </div>
            </div>
          </div>
          <div onClick={() => openPopup('SSL Lookup')} className='toolItem' >
            <div className='toolItemLeft' >
              <LockIcon />
            </div>
            <div className='toolItemRight' >
              <div className="toolsItemRight1">
                <h3>SSL Lookup</h3>
              </div>
              <div className="toolsItemRight2">
                <p>Get details about an SSL Certification</p>
              </div>
            </div>
          </div>
          <div onClick={() => openPopup('Safe URL Checker')} className='toolItem' >
            <div className='toolItemLeft' >
              <HttpIcon />
            </div>
            <div className='toolItemRight' >
              <div className='toolsItemRight1'>
                <h3>Safe URL Checker</h3>
              </div>
              <div className='toolsItemRight2'>
                <p>Check whether a URL is Safe or not</p>
              </div>
            </div>
          </div>
          <div onClick={() => openPopup('Ping')} className='toolItem' >
            <div className='toolItemLeft' >
              <CellTowerIcon />
            </div>
            <div className='toolItemRight' >
              <div className="toolsItemRight1">
                <h3>Ping</h3>
              </div>
              <div className="toolsItemRight2">
                <p>get details about a url</p>
              </div>
            </div>
          </div>
          <div onClick={() => openPopup('SSL Lookup')} className='toolItem' >
            <div className='toolItemLeft' >
              <LockIcon />
            </div>
            <div className='toolItemRight' >
              <div className="toolsItemRight1">
                <h3>SSL Lookup</h3>
              </div>
              <div className="toolsItemRight2">
                <p>Get details about an SSL Certification</p>
              </div>
            </div>
          </div>
          <div onClick={() => openPopup('Safe URL Checker')} className='toolItem' >
            <div className='toolItemLeft' >
              <HttpIcon />
            </div>
            <div className='toolItemRight' >
              <div className='toolsItemRight1'>
                <h3>Safe URL Checker</h3>
              </div>
              <div className='toolsItemRight2'>
                <p>Check whether a URL is Safe or not</p>
              </div>
            </div>
          </div>
          <div onClick={() => openPopup('Ping')} className='toolItem' >
            <div className='toolItemLeft' >
              <CellTowerIcon />
            </div>
            <div className='toolItemRight' >
              <div className="toolsItemRight1">
                <h3>Ping</h3>
              </div>
              <div className="toolsItemRight2">
                <p>get details about a url</p>
              </div>
            </div>
          </div>
          <div onClick={() => openPopup('SSL Lookup')} className='toolItem' >
            <div className='toolItemLeft' >
              <LockIcon />
            </div>
            <div className='toolItemRight' >
              <div className="toolsItemRight1">
                <h3>SSL Lookup</h3>
              </div>
              <div className="toolsItemRight2">
                <p>Get details about an SSL Certification</p>
              </div>
            </div>
          </div>
          <div onClick={() => openPopup('Safe URL Checker')} className='toolItem' >
            <div className='toolItemLeft' >
              <HttpIcon />
            </div>
            <div className='toolItemRight' >
              <div className='toolsItemRight1'>
                <h3>Safe URL Checker</h3>
              </div>
              <div className='toolsItemRight2'>
                <p>Check whether a URL is Safe or not</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      {
        popupOpen && <Popup openPopup={openPopup} name={toolName} />
      }
    </div>
  )
}

export default Tools