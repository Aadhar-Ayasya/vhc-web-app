import { LogInForm } from "@/components/auth/LogInForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function SignIn() {
  return (
    <div className="container mx-auto p-4 max-w-[750px]">
      <Card>
        <CardHeader>
          <CardTitle>Log In</CardTitle>
        </CardHeader>
        <CardContent>
          <LogInForm />
        </CardContent>
      </Card>
    </div>
  );
}
