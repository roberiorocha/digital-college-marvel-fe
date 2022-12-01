import { View } from "./View";
import { SignUpForm } from "./SingnUpForm";

export const SignUpView = ({ formProps }) => {
    return (
        <View>
            <SignUpForm>
                {...formProps}
                className="max-wlg mx-auto h-full flex flex-col justify-center"
            </SignUpForm>
        </View>
    );
};