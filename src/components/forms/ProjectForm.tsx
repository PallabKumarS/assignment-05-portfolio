"use client";

import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { TMongoose, TProject } from "@/types/types";
import ShimmerButton from "../shared/ShimmerButton";

const formSchema = z.object({
  title: z.string().min(1, "Title is required"),
  images: z.string().min(1, "At least one image URL is required"),
  technology: z.string().min(1, "At least one technology is required"),
  liveLink: z
    .string()
    .url("Please enter a valid URL")
    .min(1, "Live link is required"),
  clientRepo: z
    .string()
    .url("Please enter a valid repository URL")
    .min(1, "Client repository link is required"),
  serverRepo: z.string().url("Please enter a valid repository URL").optional(),
  description: z.string().min(1, "Description is required"),
});

export default function ProjectForm({
  data,
  setIsOpen,
}: {
  data?: TProject & TMongoose;
  setIsOpen: (isOpen: boolean) => void;
}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: data?.title || "",
      images: data?.images.join(", ") || "",
      technology: data?.technology.join(", ") || "",
      liveLink: data?.liveLink || "",
      clientRepo: data?.clientRepo || "",
      serverRepo: data?.serverRepo || "",
      description: data?.description || "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const toastId = toast.loading("Creating project...");

    const data = {
      title: values.title,
      images: values.images.split(",").map((url) => url.trim()),
      technology: values.technology.split(",").map((tech) => tech.trim()),
      liveLink: values.liveLink,
      clientRepo: values.clientRepo,
      serverRepo: values.serverRepo,
      description: values.description,
    };
    try {
      fetch(`/api/projects`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => {
          if (res.ok) {
            toast.success("Project created successfully!", {
              id: toastId,
            });
            form.reset();
            setIsOpen(false);
          } else {
            throw new Error("Failed to create project");
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

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-3 w-full mx-auto"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter project title..."
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
          name="images"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Image</FormLabel>
              <FormControl>
                <Input
                  placeholder="link1, link2, link3,...."
                  type="text"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                For multiple images, use &quot;,&quot;
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="technology"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Technology</FormLabel>
              <FormControl>
                <Input
                  placeholder="technology1, technology2, technology3,..."
                  type="text"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                For multiple technology, use &quot;,&quot;
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="liveLink"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Live Link</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter project live link..."
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
          name="clientRepo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Client Repo.</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter project client repository link..."
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
          name="serverRepo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Server Repo.</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter project server repository link..."
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
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Descriptions</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Enter projects descriptions..."
                  className="resize-none"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <div className="text-start">
          <ShimmerButton type="submit">Submit</ShimmerButton>
        </div>
      </form>
    </Form>
  );
}
