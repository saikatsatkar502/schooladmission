import React from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
export default function AdmissionStatus() {
    return (
        <div className="AdmissionStatus">
            <section className="AdmissionHeader">
                <h2>Online Admission Open</h2>
            </section>

            <table id='admissionOpen'>
                <thead>
                    <tr>
                        <th scope="col">class</th>
                        <th scope="col">Session</th>
                        <th scope="col">Last Date</th>
                        <th scope="col">Application Fees</th>
                        <th scope='col'>Scolership</th>
                        <th scope="col" >Action</th>
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
    )
}
