import React from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
export default function AdmissionTimeline() {
  return (
    <div className="AdmissionTimeLine">
                        <div className="contentHeader">

                            <h2>Admission timeline :</h2>

                        </div>
                        <div className="timeline">
                            <table id="status">
                                <thead>
                                    <tr>
                                        <th className="Event" scope="col">Events</th>
                                        <th className="Time" scope="col">Date/ Month</th>
                                        <th className="Action" scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row" id="application1">Nursery</th>
                                        <td className="Time" id='t1'> 20 February - 30 March</td>
                                        <td className="Action" id='st1'>Ongoing</td>
                                    </tr>
                                    <tr>
                                        <th scope="row" id="application2">Primary</th>
                                        <td className="Time" id='t2'>20 November - 31 January</td>
                                        <td className="Action" id='st2'>Ended</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div id='UpcomingAdmission'>
                                <ul>
                                    <li>
                                        <label id='up' htmlFor="Year">Upcomming Admission :</label>
                                        <select id='Year'>
                                            <option value={"2021-2022"}>2021 - 2022</option>
                                            <option value={"2022-2023"}>2022 - 2023</option>
                                        </select>
                                    </li>
                                </ul>
                            </div>
                            <div id='AllDetails'>
                                <div className='StatusOngoing'><span className='no'>101</span> Ongoing</div>
                                <div className='StatusUpcomming'><span className='no'>101</span> Upcoming</div>
                                <div><button id='CheckDetails'>Check All Details Here <ArrowDropDownIcon style={{ "vertical-align": "middle", "color": "Blue", "fontSize": "28px" }} /></button></div>
                            </div>
                        </div>
                    </div>
  )
}
