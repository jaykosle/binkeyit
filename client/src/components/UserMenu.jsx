import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Divider from './Divider'
import Axios from '../utils/Axios'
import SummaryApi from '../common/SummaryApi'
import { logout } from '../store/userSlice'
import toast from 'react-hot-toast'
import AxiosToastError from '../utils/AxiosToastError'

const UserMenu = ({close}) => {
    const user = useSelector((state)=> state.user)
    const dispatch = useDispatch()
       const navigate = useNavigate()

    const handleLogout = async()=>{
        try {
          const response = await Axios({
             ...SummaryApi.logout
          })
          console.log("logout",response)
          if(response.data.success){
            if(close){
              close()
            }
            dispatch(logout())
            localStorage.clear()
            toast.success(response.data.message)
            navigate("/")
          }
        } catch (error) {
          console.log(error)
          AxiosToastError(error)
        }
   }

  return (
    <div>
        <div>
            <div className='font-semibold'>My Account</div>
            <div className='text-sm'>{user.name || user.mobile}</div>
        </div>

        <Divider/>
        <div className='text-sm gap-2'>
            <Link to={""} className='px-2 hover:bg-orange-200 py-1'>My Orders</Link>
            <Link to={""} className='px-2 hover:bg-orange-200 py-1'>My Address</Link>
            <button  onClick={handleLogout} className='text-left px-2 hover:bg-orange-200 py-1'>Log Out</button>
        </div>
    </div>
  )
}

export default UserMenu