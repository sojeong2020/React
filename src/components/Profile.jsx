import React from 'react';
import '../styles/profile.css';
import { useState } from 'react';
import { Container, Row, Col} from 'react-bootstrap';


const Profile = ({t}) => {

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
        const profile={firstname,surname,mobile,email,date,gender}
        console.log("all data from form", profile)

        firstname.match(/^[A-Za-z]{2,16}$/)? setFirstnameMsg("Looks good!"):setFirstnameMsg("Firstname should be 2-16 characters and shouldn't include any special character!")
        surname.match(/^[A-Za-z]{2,16}$/)? setSurnameMsg("Looks good!"):setSurnameMsg("Surname should be 2-16 characters and shouldn't include any special character!")
        mobile.match(/^((\\+91-?)|0)?[0-9]{10}$/)? setMobileMsg("Looks good!"):setMobileMsg("It should be a valid mobile number!")
        email.match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)? setEmailMsg("Looks good!"):setEmailMsg("It should be a valid email address!")
    }


 return (
        <div>
            <Container>
                
            <div className='profile-form'>
                <form onSubmit={submitForm}>
                <h4>{t('profile.title')}</h4>
            <Row>
                <Col  xs={12} md={6}>
                <label htmlFor="firstname">{t('profile.name')}</label><br></br>
                <input id="firstname" aria-label='firstname' aria-required="true" type="text" placeholder={t('profile.name')} onChange={(e) => setFirstname(e.target.value)} value={firstname} required/> <br></br>
                <span className='form-span'>{firstnameMsg}</span> <br></br>
                </Col>

                <Col xs={12} md={6}>
                <label htmlFor="surname">{t('profile.surname')}</label><br></br>
                <input  id="surname" aria-label='surname' aria-required="true" type="text" placeholder={t('profile.surname')} onChange={(e) => setSurname(e.target.value)} value={surname} required /> <br></br>
                <span className='form-span'>{surnameMsg}</span> <br></br>
                </Col>
            </Row>

            <Row>
                <Col  xs={12} md={6}>
                <label htmlFor="mobile">{t('profile.mobile')}</label><br></br>
                <input  id="mobile" aria-label='mobile' aria-required="true" type="text" placeholder={t('profile.mobile')} onChange={(e) => setMobile(e.target.value)} value={mobile}  required /> <br></br>
                <span className='form-span'>{mobileMsg}</span> <br></br>
                </Col>
                <Col  xs={12} md={6}>
                <label  htmlFor="email">{t('profile.email')}</label><br></br>
                <input id="email" aria-label='email' aria-required="true" type="text" placeholder={t('profile.email')} onChange={(e) => setEmail(e.target.value)} value={email} required /> <br></br>
                <span className='form-span'>{emailMsg}</span> <br></br>
                </Col>
            </Row>

            <Row>
                 <Col  xs={12} md={6}>
                <label  htmlFor="date">{t('profile.bod')}</label><br></br>
                <input id="date" aria-label='date' aria-required="true" type="date" placeholder="Date" onChange={(e) => setDate(e.target.value)} value={date} required/> <br></br>
                 </Col>
                 <Col  xs={12} md={6}>
                <label  htmlFor="gender">{t('profile.gender')}</label><br></br>
                <select id="gender" aria-label='gender' aria-required="true" onChange={(e) => setGender(e.target.value)} value={gender} required>
                    <option value="">{t('profile.options')}</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="transmale">Trans Male</option>
                    <option value="transfemale">Trans Female</option>
                </select><br></br>
                </Col>
            </Row>
                <button aria-label="Submit" type="submit">{t('profile.button')}</button>
             </form>
            </div>
            </Container>
    </div>
    );
};

export default Profile;