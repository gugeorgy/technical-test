import { BiLogoSteam } from 'react-icons/bi';
import Button from '@/components/ui/button';

/**
 * `Buttons` is a component that displays two buttons: a wishlist button and a sign up button.
 *
 * @returns {JSX.Element} The Buttons component.
 */
export default function Buttons() {
  return (
    <div className="flex h-max space-x-4">
      <Button className="border-lightBlue text-lightBlue flex items-center space-x-2">
        <span>Wishlist on</span>
        <BiLogoSteam />
      </Button>
      <Button className="border-yellow text-yellow">Sign up</Button>
    </div>
  );
}
