import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, ArrowLeft, Mail } from "lucide-react";
import Link from "next/link";

export default function Verify() {
    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 p-4">
            <Card className="w-full max-w-md shadow-xl border-gray-200 rounded-xl">
                <CardHeader className="text-center pb-4">
                    <div className="mb-6 mx-auto flex size-24 items-center justify-center rounded-full bg-blue-100/70 shadow-md">
                        <Mail className="size-14 text-blue-600 animate-pulse"/>
                    </div>
                    <CardTitle className="text-3xl font-extrabold text-gray-800 mb-2">
                        Check Your Email
                    </CardTitle>
                    <CardDescription className="text-gray-500 text-base">
                        A verification link has been sent to your email address
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-center space-x-3">
                        <AlertCircle className="size-6 text-yellow-500 shrink-0"/>
                        <p className="text-sm font-medium text-yellow-800">
                            Can't find the email? Check your spam or junk folder
                        </p>
                    </div>
                </CardContent>
                <CardFooter>
                    <Link href="/" className={buttonVariants({
                        variant: "outline",
                        className: "w-full flex items-center justify-center space-x-2 hover:bg-gray-100 transition-all"
                    })}>
                        <ArrowLeft className="size-5 mr-2"/> 
                        Back to Home Page
                    </Link>
                </CardFooter>
            </Card>
        </div>
    )
}