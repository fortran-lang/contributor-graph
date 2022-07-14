import React from "react";
import { useState } from "react";

import './style.css'

const App = () => {

  const [showNavContent, setShowNavContent] = useState(true)

  const switchBtn = () => {
    setShowNavContent(showNavContent => !showNavContent)
  }

  const navLeftList = [
    {
      label: <img alt="Logo" src="https://static.apiseven.com/202108/1648866052600-a71c5469-f81c-4b52-8c20-76eef2987dfc.png" width='120px' height='auto' loading="lazy" class="chakra-image css-1s16w59"></img>,
      href: ''
    },
    {
      label: '',
      href: '',
    },
    {
      label: '',
      href: ''
    }
  ]
  const navRightList = [
    {
      label: '',
      href: ''
    }
  ]

  return (
    <>
      
    </>
  )
}

export default App
