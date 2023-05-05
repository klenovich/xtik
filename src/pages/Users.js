import { useEffect, useState } from "react";
import { useContext } from "react";
import altogic from "../helpers/altogic";
import Vonage from "../helpers/vonage";

import PrimaryButton from "../components/Buttons/PrimaryButton";
import { ModalContext } from "../context/ModalContext";
import ChangeCredentials from "../components/Profile/ChangeCredentials";
import SecondaryButton from "../components/Buttons/SecondaryButton";




function Users(props) {
  
  

  const dbx = async (nx) => {
    const { data, errors } = await altogic.db
      .model('users')
      .get();
  }

  dbx();

  const modalContext = useContext(ModalContext);
  const [profilePicture, setProfilePicture] = useState(
    require("../images/pp_blank.png")
  );


  var name = altogic.db
    .model("users")
    .get();

  name = toString(name);

  console.log("test!!!");

  // Every time the profile picture is upload
  
  
  



  return (
    <div className="bg-slate-100 relative mt-10">
      <div className="relative z-10 w-full h-full p-7 md:p-0 flex justify-center items-center">
        <div className="flex flex-col items-center w-96 bg-white rounded-2xl shadow-lg overflow-hidden">
          <br className="w-full mt-6" /> <br className="w-full mt-6" />
          <div className="relative w-full">
            <div className="pb-40%" />
          </div>
          <div className="flex flex-col items-center -mt-14">
            

            <div className="flex mt-2">
              <h3 className="font-body font-bold text-blue-500 text-lg">
                {}, "x"
              </h3>
            </div>
            <div className="text-slate-400 mb-4">
              {altogic.auth.getUser().phone}
            </div>

            <hr className="w-full mb-3" />
            
          </div>
          <hr className="w-full mt-7" />
          <ChangeCredentials />
        </div>
      </div>
    </div>
  );
  
};

export default Users;
