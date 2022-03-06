import React from 'react'

export default function AdmissionCriteris() {
  return (
    <div className="AdmissionCriteria">
                        <div className="contentHeader">
                            <h2>Admission Criteria and Eligiblity :</h2>

                        </div>
                        <section id="Criteria">

                            <label id="EleLable" htmlhtmlFor="Eligiblity">Eligiblity :</label>

                            <div className="AdmissionEligiblity" id="AdmissionEligiblity">

                                <div className="Age">
                                    <dl>
                                        <dt>Age : </dt>
                                        <dd id="age"> 2 Years to 3 Years as on 31st March. </dd>
                                    </dl>
                                </div>
                                <div className="Marks">
                                    <dl>
                                        <dt>Marks : </dt>
                                        <dd id="Marks"> NA </dd>
                                    </dl>
                                </div>
                                <div className="TotalSeats">
                                    <dl>
                                        <dt>Total Seats : </dt>
                                        <dd id="TotalSeats"> 150 </dd>
                                    </dl>
                                </div>
                                <div className="WrittenTest">
                                    <dl>
                                        <dt>Written Test : </dt>
                                        <dd id="WrittenTest"> Yes </dd>
                                    </dl>
                                </div>
                                <div className="StudentIntraction">
                                    <dl>
                                        <dt>Student Intraction : </dt>
                                        <dd id="StudentIntraction"> Yes </dd>
                                    </dl>
                                </div>
                                <div className="ParentInteraction">
                                    <dl>
                                        <dt>Parent Interaction : </dt>
                                        <dd id="ParentInteraction"> Yes </dd>
                                    </dl>
                                </div>
                                <div className="FormAvailablity">
                                    <dl>
                                        <dt>Form Availablity : </dt>
                                        <dd id="FormAvailablity"> Online/Offline </dd>
                                    </dl>
                                </div>
                                <div className="FormPayment">
                                    <dl>
                                        <dt>Form Payment : </dt>
                                        <dd id="FormPayment"> Online/Offline </dd>
                                    </dl>
                                </div>
                                <div className="SchoolTiming">
                                    <dl>
                                        <dt>School Timing : </dt>
                                        <dd id="SchoolTimingdd">
                                            <dl>
                                                <dt className="schoolTime" >Pre-Nursery to LKG : </dt>
                                                <dd> 08:00 AM - 02:30 PM . </dd>

                                                <dt className="schoolTime" >Class 1 to 12 : </dt>
                                                <dd> 11:00 AM - 05:00 PM . </dd>
                                            </dl>
                                        </dd>
                                    </dl>
                                </div>
                                <div className="OfficeTiming">
                                    <dl>
                                        <dt>OfficeTiming : </dt>
                                        <dd id="OfficeTiming"> 09:30 AM To 03:00 PM </dd>
                                    </dl>
                                </div>

                            </div>

                        </section>

                        <section id="RequiredDocument">
                            <label htmlFor="DocRequired">Documents required at the time of application/admission</label>
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
  )
}
