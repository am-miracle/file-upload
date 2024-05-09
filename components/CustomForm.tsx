"use client"
import React from 'react'
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useUploadThing } from '@/utils/uploadthing';


const formSchema = z.object({
  file: z.any(),
});

const CustomForm = () => {
    const $ut = useUploadThing("productImage",{
        onClientUploadComplete: () => {
            alert("uploaded successfully!");
        },
    });
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            file: [],
        },
    })
    async function onSubmit(values: z.infer<typeof formSchema>) {
        const selectedFiles = Array.from(values.file);
        const result = await $ut.startUpload(selectedFiles as File[]);
        return result;
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                control={form.control}
                name="file"
                render={({ field: { value, onChange, ...fieldProps } }) => (
                    <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                            <Input
                                placeholder="Select file"
                                type="file"
                                {...fieldProps}
                                multiple
                                onChange={(event) =>
                                    onChange(event.target.files && event.target.files[0])
                                }
                            />
                    </FormControl>
                    <FormDescription>
                        This is your public display name.
                    </FormDescription>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}

export default CustomForm;