// pages/friends.tsx
import Container from '@/components/ui/container';
import { User } from '@/lib/schemas';
import { getPlayerInfo } from '@/lib/services';
import Image from 'next/image';

import style from './user.module.scss';

/**
 * Props for the FriendRow component.
 */
interface FriendRowProps {
  /**
   * The friend to display in the row.
   */
  friend: User;
}

/**
 * A component that displays a row in the friends table.
 *
 * @param {FriendRowProps} props - The props to pass to the component.
 */
const FriendRow: React.FC<FriendRowProps> = ({ friend }) => {
  return (
    <tr className="odd:bg-lightBlue odd:text-darkBlue">
      <td className="p-4 border-r border-darkBlue">
        <Image
          src={friend.social.avatar || '/default-avatar.png'}
          alt="Friend avatar"
          width={40}
          height={40}
        />
      </td>
      <td className="p-4 border-r border-darkBlue">{friend.nick_name}</td>
      <td
        className={`p-4 ${
          friend.social.is_online ? 'bg-lightBlue' : 'bg-red-500'
        }`}
      >
        {friend.social.is_online ? 'Online' : 'Offline'}
      </td>
    </tr>
  );
};

/**
 * Props for the FriendsPage component.
 */
type FriendsPageProps = {
  /**
   * The parameters to pass to the component.
   */
  params: {
    /**
     * The ID of the user to display the friends of.
     */
    id: string;
  };
};

/**
 * A page that displays a list of the user's friends.
 *
 * @param {FriendsPageProps} props - The props to pass to the component.
 */
export default async function FriendsPage({ params }: FriendsPageProps) {
  // Fetch the user information using the provided ID.
  const user = (await getPlayerInfo(params.id)) as User;

  // Fetch the information for each of the user's friends.
  const friends = (await Promise.all(
    user.social.friends.map(getPlayerInfo),
  )) as User[];

  return (
    <Container className="flex flex-col justify-center">
      <div
        className={`${style.main} flex items-center w-full h-home-sm md:h-home`}
      >
        <div className="relative flex flex-col space-y-2 w-full p-4 font-loomattic bg-darkBlue">
          <Image
            src={user.social.avatar || '/default-avatar.png'}
            alt="User avatar"
            width={100}
            height={100}
            className="absolute rounded-full border-4 border-lightBlue -top-20 left-1/2 transform -translate-x-1/2"
          />
          <div className="flex justify-center">
            <h2 className="text-center">{user.nick_name}</h2>
            {'#'}
            <p className="text-center text-lightBlue">{user.xp.current}</p>
          </div>
          <h2 className="mb-4 text-2xl font-bold text-lightBlue">
            Friends
          </h2>
          {friends.length > 0 ? (
            <table className="w-full text-left">
              <thead>
                <tr className="text-yellow">
                  <th className="p-4">Avatar</th>
                  <th className="p-4">Nickname</th>
                  <th className="p-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {friends.map(friend => (
                  <FriendRow key={friend.nick_name} friend={friend} />
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-left text-yellow">No friends found</p>
          )}
        </div>
      </div>
    </Container>
  );
}
