"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button";
import {Form}from "@/components/ui/form"
import { CustomFormField } from "../CustomFormField";
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})
 
const PatinetForm =() =>{
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }
  return (
    <>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
      <section className="mb12 space-y-4">
        <h1 className="header">Hi There </h1>
        <p>Schedule your first Appointment</p>
      </section>
      
        <CustomFormField
        control={form.control}
        />

        <Button className="bg-purple-900" type="submit">Submit</Button>
      </form>
    </Form>
    </>
  )
}
export default PatinetForm