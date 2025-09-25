import React from 'react'

export default function Error() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-orange-700">404</h1>
      <p className="mt-4 text-xl text-gray-700">Oops! Page not found.</p>
      <Link 
        to="/" 
        className="mt-6  btn btn-primary"
      >
        Go Home
      </Link>
    </div>  )
}
