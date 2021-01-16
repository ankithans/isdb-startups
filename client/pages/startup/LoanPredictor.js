import React, { useState } from 'react'
import axios from 'axios'


export const LoanPredictor = () => {
    const [monthlyincome, updateMonthlyIncome] = useState(null)
    const [numberofopencreditlinesandloans, update2] = useState(null)
    const [numberoftimes90dayslate, update3] = useState(null)
    const [numberrealestateloansorlines, update4] = useState(null)
    const [numberoftime6089dayspastduenotworse, update5] = useState(null)
    const [numberofdependents, update6] = useState(null)
    const [debtratio, update7] = useState(null)
    const [numberoftime3059dayspastduenotworse, update8] = useState(null)
    const [age, update9] = useState(null)
    const [revolvingutilizationofunsecuredlines, update10] = useState(null)

    const loan = async (e) => {
        e.preventDefault()
        const formdata = new FormData()
        formdata.append("revolvingutilizationofunsecuredlines", parseInt(revolvingutilizationofunsecuredlines))
        formdata.append("age", parseInt(age))
        formdata.append("numberoftime3059dayspastduenotworse", parseInt(numberoftime3059dayspastduenotworse))
        formdata.append("debtratio", parseInt(debtratio))
        formdata.append("monthlyincome", parseInt(monthlyincome))
        formdata.append("numberofopencreditlinesandloans", parseInt(numberofopencreditlinesandloans))
        formdata.append("numberoftimes90dayslate", parseInt(numberoftimes90dayslate))
        formdata.append("numberrealestateloansorlines", parseInt(numberrealestateloansorlines))
        formdata.append("numberoftime6089dayspastduenotworse", parseInt(numberoftime6089dayspastduenotworse))
        formdata.append("numberofdependents", parseInt(numberofdependents))
        await axios.post("http://127.0.0.1:5000/loan", formdata).then(res => console.log(res)).catch(err => console.log(err))
    }
    return (
        <div>
            <form onSubmit={loan}>
                <input onChange={(e) => updateMonthlyIncome(e.target.value)} placeholder="Income" />
                <input onChange={(e) => update2(e.target.value)} placeholder="credit lines and loans" />
                <input onChange={(e) => update3(e.target.value)} placeholder="90 days late number of times" />
                <input onChange={(e) => update4(e.target.value)} placeholder="real state loan" />
                <input onChange={(e) => update5(e.target.value)} placeholder="due not worse" />
                <input onChange={(e) => update6(e.target.value)} placeholder="numberof dependents" />
                <input onChange={(e) => update7(e.target.value)} placeholder="debt ratio" />
                <input onChange={(e) => update8(e.target.value)} placeholder="3059 days worse" />
                <input onChange={(e) => update9(e.target.value)} placeholder="age" />
                <input onChange={(e) => update10(e.target.value)} placeholder="fund secured lines" />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default LoanPredictor;