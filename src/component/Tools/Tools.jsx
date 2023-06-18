import React, { useRef, useState } from 'react'
import './tools.css'
import logo from '../../images/cyber3ra-1.png'
import Popup from './Popup'
import CellTowerIcon from '@mui/icons-material/CellTower';
import LockIcon from '@mui/icons-material/Lock';
import HttpIcon from '@mui/icons-material/Http';
const Tools = () => {
  const [popupOpen, setPopupOpen] = useState(false)
  const [toolName, setToolName] = useState("")
  const openPopup = (tName) => {
    setToolName(tName)
    setPopupOpen(!popupOpen)
  }
  const data = [
    {
      tool_name: 'Ping',
      desc: 'Get details about a URL',
      icon: <CellTowerIcon />
    },
    {
      tool_name: "SSL Lookup",
      desc: "Get details about an SSL Certification",
      icon: <LockIcon />
    },
    {
      tool_name: "Safe URL Checker",
      desc: "Check whether a URL is Safe or not",
      icon: <HttpIcon />
    },
    {
      tool_name: 'Ping',
      desc: 'Get details about a URL',
      icon: <CellTowerIcon />
    },
    {
      tool_name: "SSL Lookup",
      desc: "Get details about an SSL Certification",
      icon: <LockIcon />
    },
    {
      tool_name: "Safe URL Checker",
      desc: "Check whether a URL is Safe or not",
      icon: <HttpIcon />
    },
    {
      tool_name: 'Ping',
      desc: 'Get details about a URL',
      icon: <CellTowerIcon />
    },
    {
      tool_name: "SSL Lookup",
      desc: "Get details about an SSL Certification",
      icon: <LockIcon />
    },
    {
      tool_name: "Safe URL Checker",
      desc: "Check whether a URL is Safe or not",
      icon: <HttpIcon />
    },
    {
      tool_name: 'Ping',
      desc: 'Get details about a URL',
      icon: <CellTowerIcon />
    },
    {
      tool_name: "SSL Lookup",
      desc: "Get details about an SSL Certification",
      icon: <LockIcon />
    },
    {
      tool_name: "Safe URL Checker",
      desc: "Check whether a URL is Safe or not",
      icon: <HttpIcon />
    },
  ]
  return (
    <div className='tools' >
      <div className="toolsTop">
        <div className='toolsTop1'>
          <img src={logo} alt="" />
        </div>
        <div className='toolsTop2'>
          <p> <span > <span>E</span>mpower</span> Your Digital Defense with Cutting-Edge Cybersecurity Tools: {window.innerWidth><br />} Safeguarding Your Online World!</p>
        </div>
      </div>
      <div className="toolsBottom">
        <div>
          {
            data.map((item) => {
              return <>
                <div onClick={() => openPopup(item.tool_name)} className='toolItem' >
                  <div className='toolItemLeft' >
                    {item.icon}
                  </div>
                  <div className='toolItemRight' >
                    <div className="toolsItemRight1">
                      <h3>{item.tool_name}</h3>
                    </div>
                    <div className="toolsItemRight2">
                      <p>{item.desc}</p>
                    </div>
                  </div>
                </div>
              </>
            })
          }
        </div>

      </div>
      {
        popupOpen && <Popup openPopup={openPopup} name={toolName} />
      }
    </div>
  )
}

export default Tools