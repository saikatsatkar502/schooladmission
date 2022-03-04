import React from 'react'
import { InfoTwoTone } from '@mui/icons-material'
export default function FeesStructure() {
    return (
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
    )
}
