const Contact = () => {
  return (
    <div className="flex justify-center">
      <div>
        <div className="text-center">
          <h1 className="text-2xl font-bold p-2 m-2">Contact Page</h1>
        </div>
        <form className="">
          <div>
            <input
              className=" p-2 m-2 border border-gray-700 rounded"
              type="text"
              placeholder="Email"
            />
            <input
              className=" p-2 m-2 border border-gray-700 rounded"
              type="text"
              placeholder="Message"
            />
            <button
              className="p-2 m-2 text-white border border-gray-700 rounded bg-slate-700"
              type="button"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
