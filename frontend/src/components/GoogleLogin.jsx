const GoogleLogin = () => {

  const handleGoogleLogin = () => {
    console.log("Google Login")
  }

  return (
    <button
      type="button"
      onClick={handleGoogleLogin}
      className="w-full py-3 rounded-lg border border-[#CFC8B9] bg-white text-[#182321] font-medium flex items-center justify-center gap-3 hover:bg-[#F7F4EC] transition"
    >

      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
      >
        <path
          fill="#4285F4"
          d="M21.35 12.23c0-.79-.07-1.55-.23-2.27H12v4.3h5.22a4.47 4.47 0 0 1-1.94 2.93v2.43h3.14c1.84-1.69 2.93-4.18 2.93-7.39Z"
        />

        <path
          fill="#34A853"
          d="M12 21.6c2.63 0 4.84-.87 6.45-2.35l-3.14-2.43c-.87.58-1.98.93-3.31.93-2.54 0-4.69-1.72-5.46-4.03H3.29v2.5A9.74 9.74 0 0 0 12 21.6Z"
        />

        <path
          fill="#FBBC05"
          d="M6.54 13.72A5.84 5.84 0 0 1 6.23 12c0-.6.11-1.18.31-1.72v-2.5H3.29A9.74 9.74 0 0 0 2.25 12c0 1.57.38 3.05 1.04 4.22l3.25-2.5Z"
        />

        <path
          fill="#EA4335"
          d="M12 6.25c1.43 0 2.71.49 3.72 1.46l2.79-2.79C16.84 3.35 14.63 2.4 12 2.4a9.74 9.74 0 0 0-8.71 5.38l3.25 2.5C7.31 7.97 9.46 6.25 12 6.25Z"
        />
      </svg>

      Continue with Google

    </button>
  )
}

export default GoogleLogin