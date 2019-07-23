import React from 'react'
import Terminal from 'terminal-in-react'

const showMsg = () => 'Hello World'

function Game() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100%'
      }}
    >
      <Terminal
        color="green"
        backgroundColor="black"
        barColor="black"
        style={{ fontWeight: 'bold', fontSize: '1em' }}
        commands={{
          'open-google': () => window.open('https://www.google.com/', '_blank'),
          showmsg: showMsg,
          popup: () => alert('Terminal in React')
        }}
        actionHandlers={{
          handleClose: toggleClose => {
            // do nothing
            // toggleClose();
          },
          handleMinimise: toggleMinimise => {
            // do nothing
          }
        }}
        descriptions={{
          'open-google': 'opens google.com',
          showmsg: 'shows a message',
          alert: 'alert',
          popup: 'alert'
        }}
        allowTabs={false}
        msg="NASA security system. Use the help command to find out possible actions."
      />
    </div>
  )
}

export default Game
