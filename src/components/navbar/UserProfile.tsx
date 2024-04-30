'use client';

import { User } from '@/lib/schemas';
import { logoutUser } from '@/lib/services';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

/**
 * `UserProfileProps` is a type that defines the properties for the UserProfile component.
 * It has a 'user' property that represents the user information.
 *
 * @typedef {Object} UserProfileProps
 * @property {User} user - The user information.
 */
type UserProfileProps = {
  user: User;
};

/**
 * `UserProfile` is a component that displays a user profile.
 * The user profile includes a link to the user's page, a logout button, and the user's avatar.
 * The 'user' property is used to display the user's avatar and link to the user's page.
 *
 * @param {UserProfileProps} props - The properties to configure the user profile.
 * @returns {JSX.Element} The UserProfile component.
 */
export default function UserProfile({ user }: UserProfileProps) {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="flex flex-col items-center md:items-end md:justify-center  text-xs order-2 md:order-1">
        <Link
          className="user-name text-lightBlue"
          href={`/user/${user.id}`}
        >
          User#1234
        </Link>
        <button
          type="button"
          className="log-out text-yellow underline"
          onClick={logoutUser}
        >
          Log Out
        </button>
      </div>
      <Link
        className="order-1 md:order-2 justify-self-center self-center flex items-center justify-center size-userProfile rounded-full"
        href={`/user/${user.id}`}
      >
        <Image
          src={user.social.avatar}
          alt="User Avatar"
          width={40}
          height={40}
          className="rounded-full border-2 border-lightBlue"
        />
      </Link>
    </div>
  );
}
