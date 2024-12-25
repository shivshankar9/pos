"use client";

import React from "react";
import { SignIn } from "@clerk/nextjs";

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <SignIn
        routing="hash"
        signUpUrl="/sign-up"
        appearance={{
          layout: "modal",
        }}
      />
    </div>
  );
};

export default LoginPage;
