import SignInForms from "../Components/UserForms/SignInForms";
import SocialLogin from "../Components/UsersComponents/SocialLogin";

const SignInPage = () => {
    return (
        <div className="">
            <div className="max-w-screen-xl mx-auto pt-28 flex flex-col items-center justify-center">
                <SocialLogin></SocialLogin>
                <SignInForms></SignInForms>
            </div>
            
        </div>
    );
};

export default SignInPage;