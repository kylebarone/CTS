import React from 'react'

function MainPage() {
    return (
        <div className='content-wrapper'>
            <div className=" mb-2 bg-gradient-dark">
                <img className="card-img-top" src="/IMG_1589.JPG" alt="Dist Photo 1" style={{ height: "92vh", opacity: 0.75 }} />
                <div className="card-img-overlay flex-column justify-content-center">
                    <div className='mt-4 ml-5 float-left text-justify'>
                        <h1 className="text-white mt-5 pt-2">File your taxes</h1>
                        <p className="card-text pb-2 pt-1 pl-1 text-white">
                            With our custom-made software, <br />
                            we probide a simple and secure way <br />
                            to file your annual Aruban taxes. <br />
                            Its an easy 3 steps away.....
                        </p>
                        <button type="button" className="btn btn-block btn-light">Sign In or Register Here</button>

                    </div>
                </div>
                <div className='card'>
                    hi
                </div>

            </div>
            {/* Control Sidebar */}
        </div>

    )
}

export default MainPage