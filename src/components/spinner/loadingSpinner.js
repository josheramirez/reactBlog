import React, { Fragment } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';

const loadingSpinner = () => {
    return (
        <div className="align-items-center" style={{display: 'flex', flexDirection: 'column' }}>
            <CircularProgress  style={{}}/>
            <div>
                Cargando...
            </div>
        </div>

        // {/* <span class="text-green-500 opacity-75 top-1/2 my-0 mx-auto block relative w-0 h-0" style="top: 50%;"></span> */}
    )
}

export default loadingSpinner
