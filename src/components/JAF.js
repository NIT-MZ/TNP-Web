import React from 'react';
import '../stylesheets/jaf.scss';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';


const Jaf = () => {
    const [company, setCompany] = React.useState('');
    const [otherCompany, setOtherCompany] = React.useState('');
    const [industry, setIndustry] = React.useState('');
    const [otherIndustry, setOtherIndustry] = React.useState('');
    const [bond, setBond] = React.useState('');
    const [yesBond, setYesBond] = React.useState('');

    const [state, setState] = React.useState({
        civil: false,
        cse: false,
        ece: false,
        electrical: false,
        mechanical: false,
    });

    const handleMultiSelectChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.checked,
        });
    };

    const { civil, cse, ece, electrical, mechanical } = state;

    const handleChange = (event) => {
        setCompany(event.target.value);
    };

    const handleOtherCompanyChange = (event) => {
        setOtherCompany(event.target.value);
    };

    const handleIndustryChange = (event) => {
        setIndustry(event.target.value);
    };

    const handleOtherIndustryChange = (event) => {
        setOtherIndustry(event.target.value);
    };

    const handleBondChange = (event) => {
        setBond(event.target.value);
    };

    const handleYesBondChange = (event) => {
        setYesBond(event.target.value);
    };


    return (
        <div className='jaf-form-container'>
            <div className="jaf-title">JAF</div>
            <form className='jaf-form'>
                <div className="jaf-subtitle">Company Details</div>
                <TextField
                    fullWidth
                    required
                    id="company-name"
                    label="Name of the company"
                />
                <TextField
                    fullWidth
                    required
                    id="postal-address"
                    label="Postal Address"
                />
                <TextField
                    id="telephone-number"
                    label="Telephone Number"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    id="fax-number"
                    label="Fax Number"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    required
                    id="email-address"
                    label="Email Address"
                />
                <TextField
                    id="website"
                    label="Website"
                />
                <FormControl style={{ minWidth: "40%", margin: "20px" }}>
                    <InputLabel id="company-type-label">Company Type</InputLabel>
                    <Select
                        labelId="company-type-label"
                        id="company-type"
                        value={company}
                        label="Company Type"
                        onChange={handleChange}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value="Private">Private</MenuItem>
                        <MenuItem value="Govt. Owned">Govt. Owned</MenuItem>
                        <MenuItem value="PSU">PSU</MenuItem>
                        <MenuItem value="MNC">MNC</MenuItem>
                        <MenuItem value="NGO">NGO</MenuItem>
                        <MenuItem value="Public Sector">Public Sector</MenuItem>
                        <MenuItem value="Others">Others</MenuItem>
                    </Select>
                </FormControl>
                {company === 'Others' && (
                    <TextField
                        margin="normal"
                        id="other-company-type"
                        label="Specify Other Company Type"
                        value={otherCompany}
                        onChange={handleOtherCompanyChange}
                    />
                )}
                <FormControl style={{ minWidth: "40%", margin: "20px" }}>
                    <InputLabel id="industry-type-label">Industry Sector</InputLabel>
                    <Select
                        labelId="industry-type-label"
                        id="industry-type"
                        value={industry}
                        label="Industry Sector"
                        onChange={handleIndustryChange}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value="Analytics">Analytics</MenuItem>
                        <MenuItem value="Consulting">Consulting</MenuItem>
                        <MenuItem value="Core(Technical)">Core(Technical)</MenuItem>
                        <MenuItem value="Finance">Finance</MenuItem>
                        <MenuItem value="Management">Management</MenuItem>
                        <MenuItem value="I.T.">I.T.</MenuItem>
                        <MenuItem value="Others">Others</MenuItem>
                    </Select>
                </FormControl>
                {industry === 'Others' && (
                    <TextField
                        margin="normal"
                        id="other-industry-type"
                        label="Specify Other Industry Sector"
                        value={otherIndustry}
                        onChange={handleOtherIndustryChange}
                    />
                )}
                <TextField
                    fullWidth
                    id="outlined-multiline-flexible"
                    label="Brief write up on the Company"
                    multiline
                    maxRows={4}
                />

                <div className="jaf-subtitle">Contact Details</div><br />
                <div className="jaf-form-subtitle">Head HR</div>

                <TextField
                    required
                    id="head-hr-name"
                    label="Name"
                />
                <TextField
                    required
                    id="head-hr-email-address"
                    label="Email"
                />
                <TextField
                    id="head-hr-mobile"
                    label="Mobile"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    id="head-hr-fax-number"
                    label="Fax Number"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />

                <div className="jaf-form-subtitle">First Contact Person</div>

                <TextField
                    required
                    id="first-contact-name"
                    label="Name"
                />
                <TextField
                    required
                    id="first-contact-email-address"
                    label="Email"
                />
                <TextField
                    id="first-contact-mobile"
                    label="Mobile"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    id="first-contact-fax-number"
                    label="Fax Number"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />

                <div className="jaf-form-subtitle">Second Contact Person</div>

                <TextField
                    required
                    id="second-contact-name"
                    label="Name"
                />
                <TextField
                    required
                    id="second-contact-email-address"
                    label="Email"
                />
                <TextField
                    id="second-contact-mobile"
                    label="Mobile"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    id="second-contact-fax-number"
                    label="Fax Number"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />

                <div className="jaf-subtitle">Job Profile</div>
                <TextField
                    required
                    id="job-designation"
                    label="Job Designation"
                    multiline
                    maxRows={4}
                />
                <TextField
                    required
                    id="posting-place"
                    label="Place of Posting"
                    multiline
                    maxRows={4}
                />
                <TextField
                    fullWidth
                    required
                    id="job-description"
                    label="Job Description"
                    multiline
                    maxRows={10}
                />

                <div className="jaf-subtitle">Salary Details</div>
                <TextField
                    required
                    id="ctc"
                    label="Cost to Company (CTC)"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    required
                    id="gross"
                    label="Gross"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    id="bonus"
                    label="Bonus/Perks/Incentive (if any)"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />

                <FormControl style={{ minWidth: "40%", margin: "20px" }}>
                    <FormLabel id="bond-radio-buttons-group-label">Bond or Service Contract</FormLabel>
                    <RadioGroup
                        aria-labelledby="bond-radio-buttons-group-label"
                        value={bond}
                        name="radio-buttons-group"
                        onChange={handleBondChange}
                    >
                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                        <FormControlLabel value="no" control={<Radio />} label="No" />
                    </RadioGroup>
                </FormControl>
                {bond === 'yes' && (
                    <TextField
                        margin="normal"
                        id="yes-bond-details"
                        label="If yes, give details"
                        value={yesBond}
                        onChange={handleYesBondChange}
                    />
                )}
                <TextField
                    id="noffers"
                    label="No. of offers you intend to make"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />

                <div className="jaf-subtitle">Selection Process</div>

                <TextField
                    fullWidth
                    required
                    id="selection-process"
                    label="Selection Process"
                    multiline
                    maxRows={10}
                />

                <TextField
                    fullWidth
                    required
                    id="eligibility-criteria"
                    label="Eligibility Criteria"
                    multiline
                    maxRows={10}
                />

                <TextField
                    required
                    id="visit-time"
                    label="Preferred period of visit for recruitment"
                />

                <FormControl component="fieldset" variant="standard" style={{ minWidth: "40%", margin: "20px" }}>
                    <FormLabel component="legend">Eligible Departments</FormLabel>
                    <FormGroup>
                        <FormControlLabel
                            control={
                                <Checkbox checked={civil} onChange={handleMultiSelectChange} name="civil" />
                            }
                            label="Civil Engineering"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox checked={cse} onChange={handleMultiSelectChange} name="cse" />
                            }
                            label="Computer Science Engineering"
                        />

                        <FormControlLabel
                            control={
                                <Checkbox checked={ece} onChange={handleMultiSelectChange} name="ece" />
                            }
                            label="Electronics & Communication Engineering"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox checked={electrical} onChange={handleMultiSelectChange} name="electrical" />
                            }
                            label="Electrical Engineering"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox checked={mechanical} onChange={handleMultiSelectChange} name="mechanical" />
                            }
                            label="Mechanical"
                        />
                    </FormGroup>
                </FormControl>

                <div className="jaf-subtitle">Logistics Requirements</div>
                <TextField
                    id="nmembers"
                    label="Number of Members"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    id="nrooms"
                    label="Number of Rooms reqd. for selection process"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    fullWidth
                    required
                    id="requirements"
                    label="Other Requirements"
                    multiline
                />


                <div className='jaf-form-submit'><button className="jaf-form-button">Submit</button></div>
            </form>
        </div>
    );
};

export default Jaf;
