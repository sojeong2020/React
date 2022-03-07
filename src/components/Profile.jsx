import React from 'react';
import { useState } from 'react';
import { Form, Button, Col, Row , InputGroup} from 'react-bootstrap';


const Profile = () => {

    const [firstname, setFirstname]=useState("")
    const [surname, setSurname]=useState("")
    const [mobile, setMobile]=useState("")
    const [email, setEmail]=useState("")
    const [date, setDate]=useState("")
    const [gender, setGender]=useState("")

    const [firstnameMsg, setFirstnameMsg]=useState("")
    const [surnameMsg, setSurnameMsg]=useState("")
    const [mobileMsg, setMobileMsg]=useState("")
    const [emailMsg, setEmailMsg]=useState("")


    function submitForm(e) {
        e.preventDefault()
        console.log("all data from form", firstname,surname,mobile,email,date,gender)

        firstname.match(/^[A-Za-z0-9]{3,16}$/)? setFirstnameMsg("Looks good!"):setFirstnameMsg("Username should be 3-16 characters and shouldn't include any special character!")
        surname.match(/^[A-Za-z0-9]{1,16}$/)? setSurnameMsg("Looks good!"):setSurnameMsg("Username should be 1-16 characters and shouldn't include any special character!")
        mobile.match(/^((\\+91-?)|0)?[0-9]{10}$/)? setMobileMsg("Looks good!"):setMobileMsg("It should be a valid mobile number!")
        email.match(/^((\\+91-?)|0)?[0-9]{10}$/)? setEmailMsg("Looks good!"):setEmailMsg("It should be a valid email address!")
    }


 return (
        <div>
            <div>
                <h1>Personal details</h1>
                <form onSubmit={submitForm}>
                <label>First name</label><br></br>
                <input type="text" placeholder="First Name" onChange={(e) => setFirstname(e.target.value)} required/> <br></br>
                <span>{firstnameMsg}</span> <br></br>

                <label>Surname</label><br></br>
                <input type="text" placeholder="Surname" onChange={(e) => setSurname(e.target.value)}  required /> <br></br>
                <span>{surnameMsg}</span> <br></br>

                <label>Your mobile number</label><br></br>
                <input type="text" placeholder="Mobile number" onChange={(e) => setMobile(e.target.value)}  required /> <br></br>
                <span>{mobileMsg}</span> <br></br>

                <label>Your email address</label><br></br>
                <input type="text" placeholder="Email address" onChange={(e) => setEmail(e.target.value)}  required /> <br></br>
                <span>{emailMsg}</span> <br></br>

                <label>Your date of birth</label><br></br>
                <input type="date" placeholder="Date" onChange={(e) => setDate(e.target.value)} required/> <br></br>

                <label>You identify your gender as</label><br></br>

                <select onChange={(e) => setGender(e.target.value)} required>
                    <option value="">Options</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="transmale">Trans Male</option>
                    <option value="transfemale">Trans Female</option>
                </select><br></br>

                <Button type="submit">Submit</Button>
             </form>
            </div>
    </div>
    );
};

export default Profile;