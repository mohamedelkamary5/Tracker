import React, { useState, useEffect } from 'react';

const NoConnection = ({ online }) => {
    function refreshPage() {
        window.location.reload(false);
    }

    const [show, setShow] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShow(true)
        },7000);
    }, []);
    // }, [online]);



    return (
        <>
            {show && <div className='no-conneciont-component flex-center'>
                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 549.76 549.76" style={{ enableBackground: 'new 0 0 549.76 549.76' }} xmlSpace="preserve">
                    <g>
                        <path d="M332.622,454.776c0,31.58-25.582,57.162-57.161,57.162S218.3,486.356,218.3,454.776c0-31.578,25.582-57.16,57.161-57.16
		S332.622,423.198,332.622,454.776z M365.241,254.041c-17.992-7.589-36.658-12.852-55.814-15.667l97.125,97.063l32.007-32.008
		C417.384,282.254,392.72,265.607,365.241,254.041z M177.418,257.652c-25.398,11.934-48.226,28.212-67.81,48.531l70.38,68.055
		c20.441-21.176,46.573-34.578,75.031-38.984L177.418,257.652z M60.955,141.127C39.106,155.57,18.727,172.155,0,190.944
		l69.217,69.217c18.85-18.85,39.964-34.884,62.914-47.797L60.955,141.127z M426.319,107.1
		c-47.798-20.074-98.594-30.294-150.858-30.294c-38.127,0-75.398,5.447-111.323,16.157l83.109,83.109
		c9.303-0.918,18.728-1.346,28.213-1.346c77.418,0,150.308,29.988,205.326,84.456l68.973-69.523
		C514.019,154.285,472.525,126.5,426.319,107.1z M33.292,77.663l382.561,382.561l39.842-39.842L73.134,37.821L33.292,77.663z" />
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                </svg>
                <h1 className='mb-4'>No internet</h1>
                <h6 className='mb-3'>Please Check your network conneciont</h6>
                <button className='btn btn-main' onClick={refreshPage}>Reload!</button>

            </div>}
        </>
    );
}

export default NoConnection;
