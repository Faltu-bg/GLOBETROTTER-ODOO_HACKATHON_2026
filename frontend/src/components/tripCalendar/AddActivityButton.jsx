const AddActivityButton = () => {
  return (
    <div className="flex justify-center mt-10">

      <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#173B35] text-white hover:bg-[#245048] transition shadow-sm">
        <span className="text-xl leading-none">
          +
        </span>

        <span>
          Add Activity
        </span>
      </button>

    </div>
  );
};

export default AddActivityButton;