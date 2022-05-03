import React, { useState } from 'react'

export default function AddressForm() {
    const [address, setAddress] = useState({
        AddressLine1: "",
        AddressLine2: "",
        City: "",
        State: "",
        Pincode: "",
        Country: "",

    })
    return (
        <div>AddressForm</div>
    )
}
