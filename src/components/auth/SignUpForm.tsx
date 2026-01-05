"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { signUpSchema } from "./schema";
import Link from "next/link";
import axios, { AxiosError } from "axios";
export function SignUpForm() {
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof signUpSchema>>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: z.infer<typeof signUpSchema>) {
    try {
      const response = await axios.post(
        "http://localhost:8080/auth/signup",
        data,
        {
          withCredentials: true,
        }
      );
      console.log(response);
      // window.location.href = "/";
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(
          err.response?.data?.message || err.message || "Something went wrong"
        );
      } else {
        setError("Unexpected error occurred");
      }
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {error && <p className="text-destructive">{error}</p>}

        <div className="flex gap-4">
          <Button
            type="button"
            // onClick={async () => await oAuthSignIn("discord")}
          >
            Discord
          </Button>
          <Button
            type="button"
            // onClick={async () => await oAuthSignIn("github")}
          >
            GitHub
          </Button>
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-4 justify-end">
          <Button asChild variant="link">
            <Link href="/sign-in">Sign In</Link>
          </Button>
          <Button type="submit">Sign Up</Button>
        </div>
      </form>
    </Form>
  );
}
