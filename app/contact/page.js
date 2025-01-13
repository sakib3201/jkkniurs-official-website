"use client";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import FacebookIcon from "@/public/icons/facebookIcon";
import TwitterIcon from "@/public/icons/twitterIcon";
import EmailIcon from "@/public/icons/emailIcon";
import LinkedInIcon from "@/public/icons/linkedInIcon";
import YoutubeIcon from "@/public/icons/youtubeIcon";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // implemet email sending logic
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log(formData);
      // success toast
      toast({
        title: "Success!",
        description: "Your message has been sent successfully.",
        variant: "default", 
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      // error toast
      toast({
        title: "Error!",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
    setIsSubmitting(false);
  };

  return (
    <div className="relative bg-[#fefae0] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:max-w-5xl">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-[#264653]">
                Get in touch
              </h2>
              <p className="mt-4 leading-7 text-gray-600">
                Have questions or want to collaborate? Reach out to us through
                any of these channels.
              </p>

              {/* Social Media Links */}
              <div className="mt-8 space-y-4">
                <a
                  href="mailto:jkkniurs7@gmail.com"
                  className="flex items-center gap-x-3 text-gray-600 hover:text-red-400"
                >
                  <EmailIcon className="h-5 w-5" />
                  <span>jkkniurs7@gmail.com</span>
                </a>
                <a
                  href="https://www.facebook.com/JKKNIURS/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-x-3 text-gray-600 hover:text-red-400"
                >
                  <FacebookIcon className="h-5 w-5" />
                  <span>JKKNIU Research Society</span>
                </a>
                <a
                  href="https://www.linkedin.com/company/jkkniu-research-society/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-x-3 text-gray-600 hover:text-red-400"
                >
                  <LinkedInIcon className="h-5 w-5" />
                  <span>JKKNIU Research Society</span>
                </a>
                <a
                  href="https://www.youtube.com/@jkkniuresearchsociety5797"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-x-3 text-gray-600 hover:text-red-400"
                >
                  <YoutubeIcon className="h-5 w-5" />
                  <span>JKKNIU Research Society</span>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="lg:col-span-2">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold leading-6 text-[#264653]"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-[#264653] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-400 sm:text-sm sm:leading-6"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold leading-6 text-[#264653]"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-[#264653] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-400 sm:text-sm sm:leading-6"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold leading-6 text-[#264653]"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-[#264653] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-400 sm:text-sm sm:leading-6"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold leading-6 text-[#264653]"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-2.5 block w-full resize-none rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-[#264653] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-400 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="mt-8 flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="rounded-md bg-red-400 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#264653] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400 disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>
              {submitStatus === "success" && (
                <p className="mt-4 text-sm text-green-600">
                  Message sent successfully!
                </p>
              )}
              {submitStatus === "error" && (
                <p className="mt-4 text-sm text-red-600">
                  Failed to send message. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
