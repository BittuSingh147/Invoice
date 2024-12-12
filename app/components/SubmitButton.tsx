"use client";
import {Loader2} from "lucide-react"
import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";

interface iAppProps{
  text: string;

}

export function SubmitButton({}: iAppProps) {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled className="w-full"><Loader2 className="size-4 mr-2 animate-spin "/>Please wait...</Button>
      ) : (
        <Button type="submit" className="w-full">
          Submit
        </Button>
      )}
    </>
  );
}
