import Button from '@/components/ui/button';
import UserSignInForm from './UserSignInForm';
import Link from 'next/link';

/**
 * LoginPage is a component that renders the login page of the Chat App.
 * It includes a heading, a UserSignInForm for users to sign in, and a link to the sign up page.
 * The UserSignInForm includes a text indicating users to sign up if they don't have an account,
 * and a button to submit the form.
 *
 * @returns {JSX.Element} - The LoginPage component.
 */
export default function LoginPage(): JSX.Element {
  return (
    <div className="flex flex-col space-y-8">
      <h2 className="font-loomattic text-lightBlue text-center uppercase sm:text-3xl text-6xl">
        User Login
      </h2>
      <UserSignInForm>
        <p>
          Don&apos;t have an account?{' '}
          <Link
            color="teal.500"
            href="/signup"
            className="font-loomattic text-lightBlue"
          >
            Sign up!
          </Link>
        </p>
        <Button type="submit" className="border-lightBlue text-lightBlue">
          Sign In
        </Button>
      </UserSignInForm>
    </div>
  );
}
