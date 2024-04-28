import React from 'react';

export default function UserProfile() {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="flex flex-col items-center md:items-end md:justify-center  text-xs order-2 md:order-1">
        <p className="user-name text-lightBlue">User#1234</p>
        <button type="button" className="log-out text-yellow underline">
          Log Out
        </button>
      </div>
      <div className="order-1 md:order-2 justify-self-center self-center flex items-center justify-center size-userProfile text-md rounded-full border-2 border-lightBlue">
        T
      </div>
    </div>
  );
}
