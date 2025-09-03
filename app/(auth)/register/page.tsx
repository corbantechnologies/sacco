import RegisterForm from "./RegisterForm";

const Register = () => {
  return (
    <div className="h-[100vh] grid place-content-center px-4">
      {/* NOTE: The registration endpoints are in the tools/api
      Fetching member hook is in hooks/members
      Remember after signup is a page asking the users to wait approval
      
      */}
      <RegisterForm />
    </div>
  );
};

export default Register;
