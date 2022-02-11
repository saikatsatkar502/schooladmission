import React from 'react';
import '../styles/SchoolAdmission.css'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { InfoTwoTone } from '@mui/icons-material';
export default function SchoolAdmission() {
    return (

        <div>
            <main>
                <div class="Header">

                    <h1>PROMORA</h1>


                </div>

                <div class="Uper-Section"> Sumit Section.</div>

                <div class="Main">

                    <div class="AdmissionStatus">
                        <section class="AdmissionHeader">
                            <h2>Online Admission Open</h2>
                            {/* <details>
                                <summary>How Apply Works</summary>
                                a short descripition of Admission procedure
                            </details> */}
                            <div id="SelectClass">
                                <button id="ChooseClassBtn" name="ChooseClass">Choose Class
                                    {/* <img src="../IMAGES/list.png" alt=''/>Choose Class */}
                                </button>
                                <ul id="OPtions">
                                    <li><button id="Pre-Nursery" value="Pre-Nursery"
                                        onclick="ChooseClass(value)">Pre-Nursery</button>
                                    </li>
                                    <li><button id="Nursary" value="Nursery" onclick="ChooseClass(value)">Nursery</button></li>
                                    <li><button id="Primary" value="Primary" onclick="ChooseClass(value)">Primary</button></li>
                                </ul>
                            </div>

                        </section>
                        <table id='admissionOpen'>
                            <thead>
                                <tr>
                                    <th scope="col">Class</th>
                                    <th scope="col">Session</th>
                                    <th scope="col">Last Date</th>
                                    <th scope="col">Application Fees</th>
                                    <th scope='col'>Scolership</th>
                                    <th scope="col" colspan="2">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Pre-Nursery</th>
                                    <td>2021-2022</td>
                                    <td>31st Nov, 2021 11:59 PM</td>
                                    <td>500</td>
                                    <td>Sport</td>
                                    <td>
                                        <button id="Apply">Apply Now</button>

                                    </td>

                                </tr>

                            </tbody>
                        </table>
                        <button id='ViewMore'>view more<ArrowDropDownIcon style={{ "vertical-align": "middle", "color": "Blue", "fontSize": "28px" }} /></button>

                    </div>

                    <div class="FeeStructure">

                        <section class="fees">
                            <h2>
                                Fee Structure
                            </h2>
                            <p>
                                <h5>Total Cost for a new admission :</h5>
                                <br />
                            </p>
                            <p>
                                <h5>Monthly Cost</h5>
                                <br />
                            </p>
                            <p>
                                <label for="CostIndexing">
                                    <h5>Cost Indexing</h5>
                                </label>
                                <progress id="CostIndexing" value="47" max="100">677</progress>
                                <br />

                            </p>
                            <p>
                                <label for="feesavg">
                                    <h5>Monthly Fees Average Trend</h5>
                                </label>
                                <progress id="feesavg" value="60" max="100">677</progress>
                                <br />
                                <span>our school Schools</span>
                                <br />
                                <progress id="feesavg" value="100" max="100">677</progress>
                                <br />
                                <span>Local school</span>
                            </p>

                        </section>
                        <section class="FeesDetails">

                            <br />
                            <h5>Fees Details for : </h5>
                            <table id="FeesDetails">
                                <thead>
                                    <tr>
                                        <th class="Type" scope="col">Type</th>
                                        <th class="Amount" scope="col">Amount</th>
                                        <th class="Frequency" scope="col">Frequency</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row" id="RegFee">Registration Fees:</th>
                                        <td class="Amount">1000</td>
                                        <td class="Frequency">One time</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Addmission Fee:</th>
                                        <td class="Amount">45000</td>
                                        <td class="Frequency">One time</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Tuition Fees:</th>
                                        <td class="Amount">10000</td>
                                        <td class="Frequency">Quarterly</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Security Fees:</th>
                                        <td class="Amount">5000</td>
                                        <td class="Frequency">One time</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Annual Fees:</th>
                                        <td class="Amount">10000</td>
                                        <td class="Frequency">Annually</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Development Fees:</th>
                                        <td class="Amount">10000</td>
                                        <td class="Frequency">Annually</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Transport Fees:</th>
                                        <td class="Amount">30000</td>
                                        <td class="Frequency">Quterly</td>
                                    </tr>
                                    <tr id='TotalAmount'>
                                        <th scope="row" style={{ "fontWeight": "500", "fontSize": "24px" }}>Total Amout For New Admssion:</th>
                                        <td class="Amount" style={{ "fontSize": "26px", "fontWeight": "600" }}>111000</td>
                                        <td class="Frequency" style={{ "fontSize": "20px", "fontWeight": "400" }}>One Time</td>
                                        <td class="cal"><button id='CalcAmount'><InfoTwoTone style={{ "vertical-align": "middle", "color": "Blue", "fontSize": "20px" }} />Calculation</button></td>
                                    </tr>
                                </tbody>
                            </table>

                        </section>

                    </div>

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

                    <div class="AdmissionCriteria">
                        <div class="contentHeader">
                            <h2>Admission Criteria and Eligiblity :</h2>

                        </div>
                        <section id="Criteria">

                            <label id="EleLable" for="Eligiblity">Eligiblity :</label>

                            <div class="AdmissionEligiblity" id="AdmissionEligiblity">

                                <div class="Age">
                                    <dl>
                                        <dt>Age : </dt>
                                        <dd id="age"> 2 Years to 3 Years as on 31st March. </dd>
                                    </dl>
                                </div>
                                <div class="Marks">
                                    <dl>
                                        <dt>Marks : </dt>
                                        <dd id="Marks"> NA </dd>
                                    </dl>
                                </div>
                                <div class="TotalSeats">
                                    <dl>
                                        <dt>Total Seats : </dt>
                                        <dd id="TotalSeats"> 150 </dd>
                                    </dl>
                                </div>
                                <div class="WrittenTest">
                                    <dl>
                                        <dt>Written Test : </dt>
                                        <dd id="WrittenTest"> Yes </dd>
                                    </dl>
                                </div>
                                <div class="StudentIntraction">
                                    <dl>
                                        <dt>Student Intraction : </dt>
                                        <dd id="StudentIntraction"> Yes </dd>
                                    </dl>
                                </div>
                                <div class="ParentInteraction">
                                    <dl>
                                        <dt>Parent Interaction : </dt>
                                        <dd id="ParentInteraction"> Yes </dd>
                                    </dl>
                                </div>
                                <div class="FormAvailablity">
                                    <dl>
                                        <dt>Form Availablity : </dt>
                                        <dd id="FormAvailablity"> Online/Offline </dd>
                                    </dl>
                                </div>
                                <div class="FormPayment">
                                    <dl>
                                        <dt>Form Payment : </dt>
                                        <dd id="FormPayment"> Online/Offline </dd>
                                    </dl>
                                </div>
                                <div class="SchoolTiming">
                                    <dl>
                                        <dt>School Timing : </dt>
                                        <dd id="SchoolTimingdd">
                                            <dl>
                                                <dt class="schoolTime" >pre-Nursery to LKG : </dt>
                                                <dd> 08:00 AM - 02:30 PM . </dd>

                                                <dt class="schoolTime" >Class 1 to 12 : </dt>
                                                <dd> 11:00 AM - 05:00 PM . </dd>
                                            </dl>
                                        </dd>
                                    </dl>
                                </div>
                                <div class="OfficeTiming">
                                    <dl>
                                        <dt>OfficeTiming : </dt>
                                        <dd id="OfficeTiming"> 09:30 AM To 03:00 PM </dd>
                                    </dl>
                                </div>

                            </div>

                        </section>

                        <section id="RequiredDocument">
                            <label for="DocRequired">Documents required at the time of application/admission</label>
                            <ul id="Document">
                                <li>&#10004; Photograph - (child, Parents / Guardian). </li>
                                <li>&#10004; Aadhaar Card (child, Parent / Guardian).</li>
                                <li>&#10004; Residence Proof.</li>
                                <li>&#10004; Birth Certificate.</li>
                                <li>&#10004; Medical Reports.</li>
                                <li>&#10004; Transfer Certificate.</li>
                                <li>&#10004; Marksheet / Report Card (If applicable).</li>
                                <li>&#10004; Migration Certificate (If applicable) .</li>
                            </ul>


                        </section>

                    </div>

                    <div class="AdditionalNotes">
                        <h2>Additional Notes:</h2>
                        <ul id='AdInfo'>
                            <li>Transfer Certificate requires from class 2 Onwards.</li>
                            <li>Report Card Requires from class 3 Onwards</li>
                            <li>Migration Certificate requires only in the case of admission of International Student</li>
                        </ul>
                    </div>
                </div>

                {/* <div class="User-Info"> Left Section User Info.</div>

                <div class="Advertisement"> Advertisement Section. </div> */}
                <div class="Footer"> Promora Details and Important Links. </div>
            </main>
        </div>



    );
}
