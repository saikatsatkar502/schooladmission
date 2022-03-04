import React from 'react';
import '../styles/SchoolAdmission.css'
import AdmissionStatus from './AdmissionComponents/AdmissionStatus';
import FeesStructure from './AdmissionComponents/FeesStructure';
import AdmissionTimeline from './AdmissionComponents/AdmissionTimeline';
import AdditionalNotes from './AdmissionComponents/    AdditionalNotes';
export default function SchoolAdmission() {





    return (

        <div>
            <main>
                <div class="Header">

                    <h1>PROMORA</h1>


                </div>

                <div class="Uper-Section"> Sumit Section.</div>

                <div class="Main">
                    <div id="SelectClass">
                        <button id="ChooseClassBtn" name="ChooseClass">Choose Class</button>
                        <ul id="OPtions">
                            <li><button id="Pre-Nursery" value="Pre-Nursery"
                                onclick="ChooseClass(value)">Pre-Nursery</button>
                            </li>
                            <li><button id="Nursary" value="Nursery" onclick="ChooseClass(value)">Nursery</button></li>
                            <li><button id="Primary" value="Primary" onclick="ChooseClass(value)">Primary</button></li>
                        </ul>
                    </div>
                    <AdmissionStatus />

                    <FeesStructure />

                    <AdmissionTimeline />

                    <AdditionalNotes />

                </div>
                <div class="Footer"> Promora Details and Important Links. </div>
            </main>
        </div>



    );
}
