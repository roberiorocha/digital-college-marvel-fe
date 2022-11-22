import { SignInForm } from "../../components/SingnInForm"
import { useSignInForm } from "../../components/SingnInForm/useSignInForm"
import { View } from "../../components/View"

export const SignInViewContainer = () => {
    const form = useSignInForm({
        onSubmit: (values) => {
            console.log("Sign in form values", values);
        },
    });

    return <View>
        <SignInForm {...form} />
    </View>
}