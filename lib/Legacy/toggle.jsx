import React from 'react'

const toggle = () => {
    const [lightMode, SetLightMode] = useState('flex')
        const [darkMode, SetDarkMode] = useState('none')
        const [toggleBtn, SetToggleBtn] = useState('')
    
        const toggleMode = () => {
            if(darkMode === 'none') {
                SetLightMode('none')
                SetDarkMode('flex')
                SetToggleBtn('translate21')
                document.body.classList.add('darkmode')
            } else {
                SetLightMode('flex')
                SetDarkMode('none')
                SetToggleBtn('')
                document.body.classList.remove('darkmode')
            }
        }
    
  return (
        <React.Fragment>
               <div className="toggle-mode">
                    <div className={`toggle`} onClick={toggleMode}>
                                    <div className={`toggle-btn ${toggleBtn}`}>
                                        <div className={lightMode} id='light'>
                                            <Sun />
                                        </div>
                                        <div className={darkMode} id='dark'>
                                            <Moon />
                                        </div>
                                    </div>
                    </div>
                </div>
        </React.Fragment>
  )
}

export default toggle