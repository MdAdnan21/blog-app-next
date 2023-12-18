import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { MdPassword } from 'react-icons/md';
import { app } from './Firebase';
import Images from './common/Images';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';


const Login = () => {
  const [isChecked, setChecked] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
  });

  const [error, setError] = useState(null);

  const router = useRouter()

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async () => {
    try {
      const auth = getAuth(app);
      const { email, password } = formData;
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("login successfull")
      router.push("/posts")
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <>
     <div className="overall">
        <div className="parent">
          <div className="content">
            <div className="icons">
              <div className="symbols">
              <Image width={300} height={300}  src={Images.logo} alt="Logo" />
                <p>Logo</p>
              </div>
            </div>
            <div className="Notes">
              <div className="design">
              <Image width={300} height={300} src={Images.animate} alt="Animate" />
              </div>
              <div className='login'>
                <h3>Login to your Account</h3>
                <div className="input">
                  <TextField
                    variant="outlined"
                    name='email'
                    onChange={handleChange}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <EmailOutlinedIcon style={{ color: 'white' }} />
                        </InputAdornment>
                      ),
                      classes: {
                        notchedOutline: 'light-white-border', // Set the border color class
                      },
                      style: {
                        color: 'white', // Set the text color to white
                        padding: '0px 14px 0px 18px', // Set specific padding values
                        borderRadius: '8px', // Set specific border-radius value
                        height: "48px",
                      },
                    }}
                    InputLabelProps={{
                      style: { color: 'white' }, // Set the label color to white
                    }}
                    placeholder="Your placeholder text"
                    style={{ color: 'white' }}
                  />
                  <br />
                  <TextField
                    type='password'
                    variant="outlined"
                    name='password'
                    onChange={handleChange}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <MdPassword style={{ color: 'white' }} />
                        </InputAdornment>
                      ),
                      classes: {
                        notchedOutline: 'grey-border', // Set the border color class
                      },
                      style: {
                        color: 'white', // Set the text color to white
                        padding: '0px 22px 0px 18px', // Set specific padding values
                        borderRadius: '8px', // Set specific border-radius value
                        height: "48px",
                        backgroundColor: 'black',
                      },
                    }}
                    InputLabelProps={{
                      style: { color: 'white' }, // Set the label color to white
                    }}
                    placeholder="Your placeholder text"
                    className="custom-input"
                    // style={{ color: 'white' }}
                  />
                </div>
                <div className='checkbox1'>
                  <label style={{ pointerEvents: 'none' }}>
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                      style={{ color: isChecked ? 'blue' : 'inherit' }}
                    />
                    <span style={{ pointerEvents: 'auto' }}>  I agree to the terms & conditions</span>
                  </label>
                </div>
                <div className="btn1">
                <button onClick={handleLogin}
  style={{
    padding: '14px 120px 14px 120px',
    borderRadius: '6px',
    border: 'none',
    backgroundColor: '#275DEA',
    color: 'white',
    cursor : 'pointer'
  }}
>  Login </button>
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="circle">
        <div className='Ellipse'>
          <Image width={300} height={300} src={Images.full} alt='circle' />
        </div>
      </div>
    </>
  );
};

export default Login;
