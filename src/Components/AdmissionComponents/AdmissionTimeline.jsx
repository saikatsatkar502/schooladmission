import React from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
export default function AdmissionTimeline() {
  return (
    <div class="AdmissionTimeLine">
                        <div class="contentHeader">

                            <h2>Admission timeline :</h2>

                        </div>
                        <div class="timeline">
                            <table id="status">
                                <thead>
                                    <tr>
                                        <th class="Event" scope="col">Events</th>
                                        <th class="Time" scope="col">Date/ Month</th>
                                        <th class="Action" scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row" id="application1">Nursery</th>
                                        <td class="Time" id='t1'> 20 February - 30 March</td>
                                        <td class="Action" id='st1'>Ongoing</td>
                                    </tr>
                                    <tr>
                                        <th scope="row" id="application2">Primary</th>
                                        <td class="Time" id='t2'>20 November - 31 January</td>
                                        <td class="Action" id='st2'>Ended</td>
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
