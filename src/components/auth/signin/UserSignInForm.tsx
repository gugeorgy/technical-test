import { type UserSignInSchema, userSignInSchema } from '@/lib/schemas';
import AuthForm from '../form/AuthForm';

/**
 * InputProps is a type that defines the properties for the input fields in the form.
 * It uses React's ComponentPropsWithoutRef to infer the properties of an 'input' element.
 */
type InputProps = React.ComponentPropsWithoutRef<'input'>;

/**
 * UserSignInProps is a type that defines the props for the UserSignInForm component.
 * It includes an optional 'children' prop for adding additional JSX elements to the form.
 */
type UserSignInProps = {
  /**
   * Optional additional JSX elements to include in the form.
   */
  children?: React.ReactNode;
};

/**
 * UserSignInForm is a component that provides a form for user sign in.
 * It utilizes the AuthForm component for form state and validation.
 * The form fields and validation rules are defined by the userSignInSchema object.
 * The form submission is handled by the handleFormSubmission function.
 *
 * @param {Object} props - The properties to configure the form.
 * @param {React.ReactNode} props.children - Optional additional JSX elements to include in the form.
 * @returns {JSX.Element} - The UserSignInForm component.
 */
export default function UserSignInForm({
  children,
}: UserSignInProps): JSX.Element {
  /**
   * formFields is an array that defines the input fields in the form.
   * Each field is an object with properties 'id', 'type', 'autoComplete', and 'placeholder'.
   */
  const formFields: InputProps[] = [
    {
      id: 'username',
      type: 'text',
      autoComplete: 'username',
      placeholder: 'Enter username',
    },
    {
      id: 'password',
      type: 'password',
      placeholder: 'Enter password',
    },
  ];

  /**
   * handleFormSubmission is an async function that handles form submission.
   * It sends a POST request to the '/api/loginUser/' endpoint with the username and password.
   * If the login is successful, it reloads the page.
   * If the login fails, it logs the error and alerts the user.
   *
   * @param {UserSignInSchema} _data - The form data.
   */
  const handleFormSubmission = async (_data: UserSignInSchema) => {
    const { username, password } = _data;

    try {
      const res = await fetch('/api/loginUser/', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
      });

      const { success } = await res.json();
      if (success) {
        window.location.reload();
      }
    } catch (error) {
      console.log({ error });
      alert('Login failed. Please check your credentials.');
    }
  };

  return (
    <AuthForm
      onSubmit={handleFormSubmission}
      schema={userSignInSchema}
      renderFormField={({ fieldName, formErrors, formRegister }) => {
        return (
          <div key={fieldName} className="flex flex-col space-y-2">
            <label
              htmlFor={fieldName}
              className="text-yellow uppercase font-loomattic"
            >
              {fieldName}
            </label>
            <input
              {...formRegister(fieldName)}
              {...formFields.find(f => f.id === fieldName)}
              className="p-2 text-darkBlue bg-lightBlue border border-gray-300 rounded focus:outline-none focus:border-transparent focus:ring-2 focus:ring-blue-500"
            />
            <p>
              {formErrors[fieldName]
                ? (formErrors[fieldName].message as string)
                : null}
            </p>
          </div>
        );
      }}
    >
      {children}
    </AuthForm>
  );
}
