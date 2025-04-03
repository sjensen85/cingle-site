import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { insertContactSchema } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";

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
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2 } from "lucide-react";

// Extend the schema with client-side validation
const contactFormSchema = insertContactSchema.extend({
  email: z.string().email("Please enter a valid email address"),
  name: z.string().min(2, "Name must be at least 2 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactForm = () => {
  const { toast } = useToast();
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // Define the form with default values
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      service: "",
      message: "",
    },
  });

  // Set up mutation for contact form submission
  const mutation = useMutation({
    mutationFn: (formData: ContactFormValues) => {
      return apiRequest("POST", "/api/contact", formData);
    },
    onSuccess: async () => {
      toast({
        title: "Message sent successfully!",
        description: "We will get back to you as soon as possible.",
        variant: "default",
      });
      setSuccessMessage("Thank you for your message! We will get back to you soon.");
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error sending message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
      setSuccessMessage(null);
    },
  });

  // Handle form submission
  const onSubmit = (data: ContactFormValues) => {
    setSuccessMessage(null);
    mutation.mutate(data);
  };

  return (
    <div className="bg-gray-50 rounded-lg shadow-md p-8">
      <h3 className="text-2xl font-semibold text-gray-900 mb-6">Get in Touch</h3>
      
      {successMessage ? (
        <div className="bg-green-50 text-green-800 p-4 rounded-md mb-6">
          {successMessage}
        </div>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="name">Full Name</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Your full name" 
                      {...field} 
                      id="name"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="email">Email Address</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Your email address" 
                      type="email" 
                      {...field} 
                      id="email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="company">Company</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Your company name" 
                      {...field} 
                      id="company"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="service"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="service">Service of Interest</FormLabel>
                  <Select 
                    onValueChange={field.onChange} 
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="ai-strategy">AI Strategy & Implementation</SelectItem>
                      <SelectItem value="data-analytics">Data Analytics & Insights</SelectItem>
                      <SelectItem value="machine-learning">Machine Learning Solutions</SelectItem>
                      <SelectItem value="data-infrastructure">Data Infrastructure</SelectItem>
                      <SelectItem value="custom-ai">Custom AI Development</SelectItem>
                      <SelectItem value="optimization">Process Optimization</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="message">Message</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Tell us about your project or inquiry" 
                      rows={4} 
                      {...field} 
                      id="message"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 px-4 rounded-md transition"
              disabled={mutation.isPending}
            >
              {mutation.isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </Button>

            <p className="text-xs text-gray-500 text-center">
              By submitting this form, you agree to our <a href="#" className="text-primary hover:text-primary/80">Privacy Policy</a>.
            </p>
          </form>
        </Form>
      )}
    </div>
  );
};

export default ContactForm;
