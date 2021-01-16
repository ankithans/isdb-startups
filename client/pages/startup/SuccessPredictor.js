import React, { useState, useEffect } from 'react'
import axios from 'axios'

export const SuccessPredictor = () => {
    const [company_age, UpdateCompany_age] = useState(null)
    const [founder_Exp, UpdateFounder_Exp] = useState(null)
    const [founder_age, UpdateFounder_age] = useState(null)
    const [founder_school, UpdateFounder_school] = useState(null)
    const [funding, updateFunding] = useState(null)
    const [response, updateResponse] = useState(null)

    const submit = async (e) => {
        e.preventDefault()
        const formdata = new FormData()
        formdata.append("company_age", company_age)
        formdata.append('founder_Exp', founder_Exp)
        formdata.append('founder_age', founder_age)
        formdata.append('founder_school', founder_school)
        formdata.append('funding', funding)
        await axios.post('http://127.0.0.1:5000/success', formdata).then(res => updateResponse(res.data.predict)).catch(err => console.log(err))
    }

    return (
        <div>
            <form onSubmit={submit}>
                <h2>Type here</h2>
                <input onChange={(e) => UpdateCompany_age(e.target.value)} placeholder="Enter company age" />
                <input onChange={(e) => UpdateFounder_Exp(e.target.value)} placeholder="Enter founder Exp" />
                <input onChange={(e) => UpdateFounder_age(e.target.value)} placeholder="Enter founder age" />
                <input onChange={(e) => UpdateFounder_school(e.target.value)} placeholder="Enter founder school" />
                <input onChange={(e) => updateFunding(e.target.value)} placeholder="Enter funding amount" />
                <button type="submit" >Submit</button>
            </form>
        </div>
    )
}
export default SuccessPredictor;