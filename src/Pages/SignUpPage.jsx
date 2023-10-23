
import SIgnUpForm from '../Components/UserForms/SIgnUpForm';
import SocialLogin from './../Components/UsersComponents/SocialLogin';
const SignUpPage = () => {
    return (
        <div>
            <div className="max-w-screen-xl mx-auto pt-28 flex flex-col items-center justify-center">
                <SocialLogin></SocialLogin>
                <SIgnUpForm></SIgnUpForm>
            </div>
        </div>
    );
};

export default SignUpPage;