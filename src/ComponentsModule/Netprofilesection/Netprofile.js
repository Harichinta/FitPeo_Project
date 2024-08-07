import React from 'react'
import './netprofile.css'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Netprofile() {
    const percentage = 70;
    return (
        <div className='netcontainer'>
            <div  style={{ display: "flex", justifyContent: "space-between", flexDirection: 'column', height: "100%"}}>
                <span>Net Profit</span>
                <span className='profitget'>&#36; 6759.25</span>
                <span className='increase3'>&#9650;3%</span>
            </div>
            <div className='goalcompl'>
                <div>
                    <div style={{ display: 'flex', justifyContent: "center" }}>
                        <div style={{position: 'relative', width: "100px" }}>
                            <CircularProgressbar value={percentage} text={`${percentage}%`}
                                styles={buildStyles({
                                    textColor: '#ffffff',
                                    pathColor: 'rgb(27, 143, 189)',
                                    trailColor: '#D3D3D3',
                                })} />
                            <div style={{
                                position: 'absolute',
                                top: '50%', 
                                left: '50%',
                                transform: 'translate(-50%, 0)',
                                color: '#ffffff',
                                fontSize: '8px',
                                marginTop: '14px',
                                textAlign: 'center'
                            }}>
                                {percentage <= 70 ? 'Goal' : ''} 
                                <p>completed</p>
                            </div>
                        </div>
                    </div>
                    <p style={{ fontSize: "9px", marginTop: "5px" }}>*The values here has been rounded off.</p>
                </div>
            </div>
        </div>
    )
}

export default Netprofile