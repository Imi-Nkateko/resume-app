const Skills = () => {
  return (
    <div className=" p-6 bg-gray-100 flex items-center justify-center ">
      <div className="container max-w-screen-lg mx-auto">
        <div>
          <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
              <div className="text-gray-600">
                <p className="font-medium text-lg">Skills</p>
                <p>Please fill out all the fields.</p>
              </div>

              <div className="lg:col-span-2">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                  <div className="md:col-span-5 flex items-center ">
                    <input
                      type="text"
                      name="school_name"
                      id="school_name"
                      placeholder="Add a Skill"
                      className="h-10 border border-r-0 rounded px-4 w-full bg-gray-50 rounded-r-none"
                    />

                    <button className="bg-blue-500 h-10  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded rounded-l-none">
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
