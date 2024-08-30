import * as React from "react";
import { makeStyles, useId, Input, Label ,Button} from "@fluentui/react-components";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",

    maxWidth: "400px",
    // Stack the label above the field (with 2px gap per the design system)
    "> div": { display: "flex", flexDirection: "column", gap: "2px" },
  },
});

 const Form = () => {
  const emailId = useId("input-email");
  const passwordId = useId("input-password");
  const userName = useId("input-username")
  const styles = useStyles();

  const [toggle, setToggle] = React.useState(true);
  const {register, handleSubmit, formState:{errors}} = useForm();
  const router = useRouter();

  const onsubmit = (data:any) =>{
    let LoginCredential = {
      username: data.username,
      password: data.password
    }
    console.log(LoginCredential, "login data>>>>>>>>>>>>>>")

    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({     
        username: data.username,
        password: data.password,
      })
    })
    .then(res => res.json())
    .then(val =>{
      localStorage.setItem("dummyToken",JSON.stringify(val.token))
      router.push('/user/profile')
    })
    .catch(err => console.log(err))
  }
  return (
    <>
      {toggle?
         <form onSubmit={handleSubmit(onsubmit)}  noValidate autoComplete="off" className={styles.root}>
           <div>
            <Label htmlFor={userName}>User Name</Label>
            <Input type="text" placeholder="johndoe" id={userName}

              {...register("username", {
                required: true,
              })} 
            />
             {errors.userName && errors.userName.type === "required" && (
                <p className="text-red-700">User name is required.</p>
             )}
          </div>
          {/* <div>
            <Label htmlFor={emailId}>Email</Label>
            <Input type="email" placeholder="john@gmail.com" id={emailId}

              {...register("email", {
                required: true,
                pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/
              })} 
            />
             {errors.email && errors.email.type === "required" && (
                <p className="text-red-700">Email is required.</p>
             )}
             {
              errors.email && errors.email.type === "pattern" &&(
                <p className="text-red-800">Email is not valid</p>
              )
             }
          </div> */}
          <div>
            <Label htmlFor={passwordId}>Password </Label>
            <Input type="password" placeholder="password" id={passwordId} 
              {
                ...register("password" , {
                  required:true,
                  minLength:6
                })
              }
             />
             {
              errors.password && errors.password.type === "required" &&(
                <p className="text-red-700">Passsword is required</p>
              )}
              {
                errors.password && errors.password.type === "minLength" &&(
                  <p className="text-red-700">min 6 letter is require</p>
                )
              }
          </div>
  
          <div>
          <Button type="submit">Login</Button>
          <p>new here? <a className="cursor-pointer" onClick={()=> setToggle(!toggle)}>Sign up</a></p>
          </div>
        </form>:

        <form noValidate autoComplete="off" className={styles.root}>
          <div>
            <Label htmlFor={userName}>User Name</Label>
            <Input type="text" placeholder="John" id={userName}  />
          </div>
          <div>
            <Label htmlFor={emailId}>Email </Label>
            <Input type="email" placeholder="john@gmail.com" id={emailId} />
          </div>
          <div>
            <Label htmlFor={passwordId}>Password </Label>
            <Input type="password" placeholder="password" id={passwordId} />
          </div>

          <div>
          <Button >Sign Up</Button>
          <p>Already exist ? <a className="cursor-pointer" onClick={()=> setToggle(!toggle)}>Log in</a></p>
          </div>
        </form>
      }
       

      
    </>
   
    

  );
};

export default Form;