import {IconButton} from "@/components/icon-buttons/icon-button";
import React from "react";
import css from "./login.module.css"
import { AiFillGooglePlusCircle } from "react-icons/ai";
import {Input} from "@/components/input/input";
import { Button } from "@/components/button/button";
 'react-icons/ai'

export default function LoginPage(){

    // const [s]

  return (
    <div className={css["login-root"]}>
    <div className={css["container"]} id="container">
	<div className={[css["form-container"], css["sign-up-container"]].join(' ')}>
		<form action="#">
			<h1>Create Account</h1>
			<div className={css["social-container"]}>
				<IconButton ICO = {AiFillGooglePlusCircle}/>
				<IconButton ICO = {AiFillGooglePlusCircle}/>
				<IconButton ICO = {AiFillGooglePlusCircle}/>
			</div>
			<span>or use your email for registration</span>
			<Input className={"text"} placeholder="Name" />
			<Input className={"email"} placeholder="Email" />
			<Input className={"password"} placeholder="Password" />
			<Button col = {"red"} label = "Sign Up"></Button>
		</form>
	</div>
	<div className={[css["form-container"], css["sign-in-container"]].join(' ')}>
		<form action="#">
			<h1>Sign in</h1>
			<div className={css["social-container"]}>
				<a href="#" className={css["social"]}><i className="fab fa-facebook-f"></i></a>
				<a href="#" className={css["social"]}><i className="fab fa-google-plus-g"></i></a>
				<a href="#" className={css["social"]}><i className="fab fa-linkedin-in"></i></a>
			</div>
			<span>or use your account</span>
			<input type="email" placeholder="Email" />
			<input type="password" placeholder="Password" />
			<a href="#">Forgot your password?</a>
			<button>Sign In</button>
		</form>
	</div>
	<div className={css["overlay-container"]}>
		<div className={css["overlay"]}>
			<div className={[css["overlay-panel"], css["overlay-left"]].join(' ')}>
				<h1>Welcome Back!</h1>
				<p>To keep connected with us please login with your personal info</p>
				<button className={css["ghost"]} id="signIn">Sign In</button>
			</div>
			<div className={[css["overlay-panel"], css["overlay-right"]].join(' ')}>
				<h1>Hello, Friend!</h1>
				<p>Enter your personal details and start journey with us</p>
				<button className={css["ghost"]} id="signUp">Sign Up</button>
			</div>
		</div>
	</div>
</div>
    </div>
  );
};
