import { SignUpForm } from "../../components/SignUpForm/SignUpForm"
import { useSignUpForm } from "../../components/SignUpForm/useSignUpForm"
import { View } from "../../components/View"

export const SignUpViewContainer = () => {
    const form = useSignUpForm({
        onSubmit: (values) => {
            console.log("Sign Up form values", values);
        },
    });

    return <View>
        <SignUpForm {...form} />
    </View>
}