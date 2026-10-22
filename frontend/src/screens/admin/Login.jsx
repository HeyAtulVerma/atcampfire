import { useState } from 'react'
import { RiArrowLeftUpLine } from "react-icons/ri";
import axios from 'axios';

const Login = () => {

  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")

  const handleLogin = async () => {
    axios.post("http://localhost:3000/auth/login", {
      email, password
    }).then(async (response) => {
      console.log(response.data);
      await localStorage.setItem("jwt_token", response.data.token);
      window.location.href = '/dashboard'

    }).catch((err) => {
      console.log("Login Failed: ", err)

    });
  }



  return (
    <>

      <div className="mt-2 px-44">
        <p className="text-white text-3xl mx-1 flex font-[600]"><RiArrowLeftUpLine size={40} />  Login</p>

        <div className="formlogin shadow-2xl h-[400px] mt-6 bg-[#181f42ea] flex rounded-lg">
          <div className="secr1 w-[400px]"><img src="/images/login-re.jpg" alt="" /></div>
          <div className="sectn2">

            <div className="emailp px-28 pt-10">
              <p className=" text-white text-xl mb-2 mx-3">Email</p>
              <input type="text" name="email" className='py-2 px-10 rounded-full font-[500]' placeholder='abhay@atcampfire.com' id="" onChange={(e) => { setemail(e.target.value) }} />
              <p className="password text-white mt-5 text-xl mb-2 mx-3 ">Password</p>
              <input type="password" name='password' className="rounded-full py-2 px-10 font-[500]" placeholder='Password' onChange={(e) => {
                setpassword(e.target.value)

              }} />
              <div>
                <p className="forgetpa mt-2 mx-3 text-[#cfcece] cursor-pointer hover:text-white">Forget your password?</p>
                <button className='mt-4 bg-[#f53d68] py-2 px-8 rounded-full text-[#0e1226] font-[600] hover:text-white' onClick={handleLogin}>Login</button>
              </div>
            </div>

          </div>



        </div>


      </div>





    </>
  )
}

export default Login


