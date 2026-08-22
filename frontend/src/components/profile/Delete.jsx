const Delete = () => {
  return (
    <div className="mt-12 mb-10 p-6 rounded-2xl border border-red-200 bg-red-50">

      <h2 className="text-lg font-medium text-red-800">
        Delete Account
      </h2>

      <p className="text-sm text-red-700 mt-1">
        Permanently delete your account and all associated travel data.
      </p>

      <button className="mt-4 px-5 py-2 rounded-lg bg-red-700 text-white text-sm hover:bg-red-800 transition">
        Delete Account
      </button>

    </div>
  )
}

export default Delete