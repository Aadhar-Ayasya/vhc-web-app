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
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { signUpSchema } from "./schema";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

export function LogInForm() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  // useEffect(() => {
  //   router.refresh();
  // }, []);

  async function onSubmit(data: z.infer<typeof signUpSchema>) {
    setError(null);
    setLoading(true);

    try {
      const session = await axios.post(
        "http://localhost:8080/auth/Login",
        data,
        {
          withCredentials: true,
        }
      );
      if (session.data.message) router.refresh();
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const message = err.response?.data?.message;

        setError(
          typeof message === "string" ? message : err.message || "Signup failed"
        );
      } else {
        setError("Unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {error && (
          <p className="text-sm font-medium text-destructive">{error}</p>
        )}

        <div className="flex gap-4">
          <Button type="button">Discord</Button>
          <Button type="button">GitHub</Button>
        </div>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="you@example.com" {...field} />
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
                <Input type="password" placeholder="••••••••" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-end gap-4">
          <Button asChild variant="link">
            <Link href="/signup">Sign Up</Link>
          </Button>

          <Button type="submit" disabled={loading}>
            {loading ? "Logging In..." : "Login"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
