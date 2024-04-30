// FollowUs.tsx
import {
  BiLogoYoutube,
  BiLogoDiscord,
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoTiktok,
  BiLogoTwitter,
} from 'react-icons/bi';

/**
 * `FollowUs` is a component that displays a list of social media icons.
 * Each icon is a link to a different social media platform.
 * The social media platforms are defined in the `follows` array.
 *
 * @returns {JSX.Element} The FollowUs component.
 */
export default function FollowUs() {
  /**
   * `follows` is an array that defines the social media platforms to display.
   * Each platform is an object with a 'name' and an 'icon'.
   * The 'name' is a string that represents the name of the platform.
   * The 'icon' is a JSX element that represents the icon of the platform.
   */
  const follows = [
    { name: 'Youtube', icon: <BiLogoYoutube /> },
    { name: 'Discord', icon: <BiLogoDiscord /> },
    { name: 'Facebook', icon: <BiLogoFacebookCircle /> },
    { name: 'Instagram', icon: <BiLogoInstagram /> },
    { name: 'Tiktok', icon: <BiLogoTiktok /> },
    { name: 'Twitter', icon: <BiLogoTwitter /> },
  ];

  return (
    <div className="flex items-center sm:items-end sm:space-y-2 flex-col">
      <h2 className="font-loomattic">Follow Us</h2>
      <div className="flex space-x-2">
        {follows.map(follow => (
          <div
            key={follow.name}
            className="flex items-center justify-center bg-lightBlue text-darkBlue rounded-full size-5 sm:size-6 md:size-7"
          >
            {follow.icon}
          </div>
        ))}
      </div>
    </div>
  );
}
