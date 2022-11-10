import { Header } from "../Header";
import { HeaderNav } from "../HeaderNav";
import { useFormik } from "formik";

 export   const SignInForm = () => {
        const formik = useFormik({
          initialValues: {            
            email: '',
            password: '',
          },
          onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
          },
        });

        return (
            <>
            <HeaderNav />
            <Header />            

            <form onSubmit={formik.handleSubmit}>

              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              
              <label htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.password}
              />              

              <button type="submit">Submit</button>
            </form>
            </>
          );
        };
       


