"use client";

import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { baseUrl } from "@/utils/authOptions";
import { TBlog, TMongoose } from "@/types/types";
import ShimmerButton from "../shared/ShimmerButton";

const formSchema = z.object({
  title: z.string().min(1, "Title is required"),
  category: z.string().min(1, "Category is required"),
  image: z
    .string()
    .url("Please enter a valid image URL")
    .min(1, "Image URL is required"),
  content: z.string().min(1, "Content is required"),
});

export default function BlogForm({
  data,
  edit = false,
  setIsOpen,
}: {
  edit?: boolean;
  data?: TBlog & TMongoose;
  setIsOpen: (isOpen: boolean) => void;
}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: data?.title || "",
      category: data?.category || "",
      image: data?.image || "",
      content: data?.content || "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const toastId = toast.loading(
      edit ? "Updating blog..." : "Creating blog..."
    );

    if (edit) {
      try {
        fetch(`${baseUrl}/api/blogs/${data?._id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        })
          .then((response) => {
            if (response.ok) {
              toast.success("Blog updated successfully!", { id: toastId });
              form.reset();
              setIsOpen(false);
            } else {
              throw new Error("Failed to create blog");
            }
          })
          .catch((error) => {
            console.log("Form submission error", error);
            toast.error("Failed to submit the form. Please try again.", {
              id: toastId,
            });
          });
      } catch (error) {
        console.log("Form submission error", error);
        toast.error("Failed to submit the form. Please try again.", {
          id: toastId,
        });
      }
    } else {
      try {
        fetch(`${baseUrl}/api/blogs`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        })
          .then((response) => {
            if (response.ok) {
              toast.success("Blog created successfully!", { id: toastId });
              form.reset();
              setIsOpen(false);
            } else {
              throw new Error("Failed to create blog");
            }
          })
          .catch((error) => {
            console.error("Form submission error", error);
            toast.error("Failed to submit the form. Please try again.", {
              id: toastId,
            });
          });
      } catch (error) {
        console.error("Form submission error", error);
        toast.error("Failed to submit the form. Please try again.", {
          id: toastId,
        });
      }
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 w-full mx-auto"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter blog title..."
                  type="text"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter blog category..."
                  type="text"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Image</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter blog image..."
                  type="text"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Content</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Enter blog content..."
                  className="resize-none"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <div className="text-start">
          <ShimmerButton type="submit">
            {edit ? "Update Blog" : "Create Blog"}
          </ShimmerButton>
        </div>
      </form>
    </Form>
  );
}
