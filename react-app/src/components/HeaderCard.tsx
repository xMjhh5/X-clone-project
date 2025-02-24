import axios from "axios";
import { useState } from "react";

type postI = {
  id: string | undefined;
  userName: string;
  text: string;
  isLiked: boolean;
};
export default function HeaderCard() {
  const [inputV, setInputV] = useState<postI>();

  const post = () => {
    axios
      .post(`https://64d8b3c25f9bf5b879ce7999.mockapi.io/posts`, {
        userName: inputV?.userName,
        text: inputV?.text,
        isLiked: false,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {/* first Header body */}
      <div className="flex flex-col ml-1 mr-1 text-white h-auto border-slate-700 border-b-2">
        <div className="flex justify-between h-10 p-2">
          <p>Home</p>
          <p>Icon</p>
        </div>

        <br />

        {/* img & hent */}
        <div className="flex flex-col p-2 flex-wrap">
          <div className="flex items-center">
            <img
              src="https://www.congres-parfumscosmetiques.com/images/Intervenants/2022/photo-avatar-profil.png"
              className=" rounded-full w-11 "
            ></img>
            <textarea
              value={inputV?.text}
              className="resize-none text-xl overflow-hidden m-2 outline-none w-full border-0 h-10 p-2 bg-white/0"
              placeholder="what's happening ?"
              onChange={(e) => {
                setInputV({ ...inputV, text: e.target.value });
              }}
            />
          </div>

          {/* icons for => "upload , ...." */}
          <div className="flex justify-between items-center ml-12 mr-3">
            <div className="flex justify-around ml-2 w-32 ">
              <div>
                {/* photo */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
              </div>
              <div>
                {/* gif */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12.75 8.25v7.5m6-7.5h-3V12m0 0v3.75m0-3.75H18M9.75 9.348c-1.03-1.464-2.698-1.464-3.728 0-1.03 1.465-1.03 3.84 0 5.304 1.03 1.464 2.699 1.464 3.728 0V12h-1.5M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                  />
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                  />
                </svg>
              </div>
            </div>
            {/* post */}
            <button
              onClick={post}
              className="h-8 w-16 rounded-2xl text-center bg-sky-500 cursor-pointer"
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

