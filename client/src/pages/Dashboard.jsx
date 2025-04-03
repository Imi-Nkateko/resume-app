import Person from "./form/Person";
import Education from "./form/Education";
import Experience from "./form/Experience";
import Skills from "./form/Skills";

const Dashboard = ({ generalInfo }) => {
  return (
    <div className="grid grid-cols-2 gap-4 h-screen">
      <div className="grid overflow-auto gap-0">
        <Person />
        <Experience />
        <Education />
        <Skills />
      </div>
      <div className="flex overflow-auto h-[600px] bg-gray-300">
        <div className="m-4 h-[297mm] w-[210mm] overflow-hidden rounded-md bg-white p-8 shadow-lg">
          <div className="grid gap-3">
            <h1 className="text-3xl text-cyan-700 border-b items-start">
              {generalInfo.fullName}
            </h1>
            <div className="flex gap-2.5 text-gray-600 text-sm">
              <p>{generalInfo.email}</p>
              <p>{generalInfo.linkedIn}</p>
              <p>{generalInfo.website}</p>
              <p>{generalInfo.phone}</p>
            </div>
            {/* Conditional rendering for profile */}
            {generalInfo.profile && (
              <div>
                <h1 className="text-lg text-cyan-700 ">Profile</h1>
                <p>{generalInfo.profile}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
