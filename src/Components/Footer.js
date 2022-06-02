import React from 'react'

function Footer() {
  return (
    <>
        {/* Main Footer */}
        <footer className="main-footer">
                    {/* To the right */}
                    <div className="float-right d-none d-sm-inline">
                        Anything you want
                    </div>
                    {/* Default to the left */}
                    <strong>Copyright © 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.</strong> All rights reserved.
                </footer>
    </>
  )
}

export default Footer