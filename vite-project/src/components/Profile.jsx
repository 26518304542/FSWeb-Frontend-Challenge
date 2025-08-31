import { profileData } from "../data/data";

export default function Profile() {

  return (
    <section className="bg-[#4731D3] text-white flex min-h-120">
      <div className=" flex flex-row justify-around ">
        {/* Basic Info */}
        <div className=" ml-50 mt-10">
          <h2 className="text-3xl font-bold mb-10 ">Profile</h2>
          <h3 className="text-xl font-semibold mb-4">Basic Information</h3>
          <ul className="space-y-2">
            <li><strong>Birthday:</strong> {profileData.basic.birthday}</li>
            <li><strong>City:</strong> {profileData.basic.city}</li>
            <li><strong>Education:</strong> {profileData.basic.education}</li>
            <li><strong>Email:</strong> {profileData.basic.email}</li>
          </ul>
        </div>
        <div>

        </div>
          <img></img>
        <div>

        </div>

        {/* About Me */}
        <div className="w-1/4 mr-50 mt-26">
          <h3 className="text-xl font-semibold mb-4 ">About Me</h3>
          <p className="leading-relaxed">{profileData.about}</p>
        </div>
      </div>
    </section>
  );
}