import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { clearUser } from '../RTX/Slices/userSlice'

export default function Profile() {
  const userInfo = useSelector((state) => state.user.value) 
  const dispatch = useDispatch()

  return (
    <div className='my-30 p-20'>
      {userInfo ? (
        <>
          <h1 className='text-2xl'>Welcome {userInfo.fname}</h1>
          <button 
            className='btn btn-primary mt-4' 
            onClick={() => dispatch(clearUser())}
          >
            Logout
          </button>
        </>
      ) : (
        <h2 className="text-xl">No user logged in</h2>
      )}
    </div>
  )
}
