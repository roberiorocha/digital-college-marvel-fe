import { View } from "./View";
import { SignInForm } from "./SignInForm";

export const SignInView = ({ formProps }) => {
    return (
        <View>
            <SignInForm {...formProps}

                className="max-wlg mx-auto h-full flex flex-col justify-center">
            </SignInForm>
        </View>
    );
};