import React from 'react'

const Experience = () => {
  return (
    <div className=" p-6 bg-gray-100 flex items-center justify-center ">
      <div className="container max-w-screen-lg mx-auto">
        <div>
          <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
              <div className="text-gray-600">
                <p className="font-medium text-lg">Education</p>
                <p>Please fill out all the fields.</p>
              </div>

              <div className="lg:col-span-2">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                  <div className="md:col-span-5">
                    <label for="school_name">School / Institution</label>
                    <input
                      type="text"
                      name="school_name"
                      id="school_name"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    />
                  </div>

                  <div className="md:col-span-5">
                    <label for="course">Course</label>
                    <input
                      type="text"
                      name="course"
                      id="course"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    />
                  </div>

                  <div className="md:col-span-3">
                    <label for="startDate">Start Date</label>
                    <input
                      type="date"
                      name="startDate"
                      id="startDate"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value=""
                      placeholder=""
                      required
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label for="endDate">End Date</label>
                    <input
                      type="date"
                      name="endDate"
                      id="endDate"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                      value=""
                      placeholder=""
                    />
                  </div>

                 
                  <div className="md:col-span-5 text-right">
                    <div className="inline-flex items-end">
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        + Experience
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience