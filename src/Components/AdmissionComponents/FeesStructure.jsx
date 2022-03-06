import React from 'react'
import { InfoTwoTone } from '@mui/icons-material'
export default function FeesStructure() {
    return (
        <div className="FeeStructure">

            <section className="fees">
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
                    <label htmlFor="CostIndexing">
                        <h5>Cost Indexing</h5>
                    </label>
                    <progress id="CostIndexing" value="47" max="100">677</progress>
                    <br />

                </p>
                <p>
                    <label htmlFor="feesavg">
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
            <section className="FeesDetails">

                <br />
                <h5>Fees Details for : </h5>
                <table id="FeesDetails">
                    <thead>
                        <tr>
                            <th className="Type" scope="col">Type</th>
                            <th className="Amount" scope="col">Amount</th>
                            <th className="Frequency" scope="col">Frequency</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row" id="RegFee">Registration Fees:</th>
                            <td className="Amount">1000</td>
                            <td className="Frequency">One time</td>
                        </tr>
                        <tr>
                            <th scope="row">Addmission Fee:</th>
                            <td className="Amount">45000</td>
                            <td className="Frequency">One time</td>
                        </tr>
                        <tr>
                            <th scope="row">Tuition Fees:</th>
                            <td className="Amount">10000</td>
                            <td className="Frequency">Quarterly</td>
                        </tr>
                        <tr>
                            <th scope="row">Security Fees:</th>
                            <td className="Amount">5000</td>
                            <td className="Frequency">One time</td>
                        </tr>
                        <tr>
                            <th scope="row">Annual Fees:</th>
                            <td className="Amount">10000</td>
                            <td className="Frequency">Annually</td>
                        </tr>
                        <tr>
                            <th scope="row">Development Fees:</th>
                            <td className="Amount">10000</td>
                            <td className="Frequency">Annually</td>
                        </tr>
                        <tr>
                            <th scope="row">Transport Fees:</th>
                            <td className="Amount">30000</td>
                            <td className="Frequency">Quterly</td>
                        </tr>
                        <tr id='TotalAmount'>
                            <th scope="row" style={{ "fontWeight": "500", "fontSize": "24px" }}>Total Amout For New Admssion:</th>
                            <td className="Amount" style={{ "fontSize": "26px", "fontWeight": "600" }}>111000</td>
                            <td className="Frequency" style={{ "fontSize": "20px", "fontWeight": "400" }}>One Time</td>
                            <td className="cal"><button id='CalcAmount'><InfoTwoTone style={{ "vertical-align": "middle", "color": "Blue", "fontSize": "20px" }} />Calculation</button></td>
                        </tr>
                    </tbody>
                </table>

            </section>

        </div>
    )
}
