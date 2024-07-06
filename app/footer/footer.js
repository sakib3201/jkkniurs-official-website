import Link from "next/link";
import FacebookIcon from "@/public/icons/facebookIcon";
import TwitterIcon from "@/public/icons/twitterIcon";
import EmailIcon from "@/public/icons/emailIcon";
import LinkedInIcon from "@/public/icons/linkedInIcon";
import YoutubeIcon from "@/public/icons/youtubeIcon";

const iconSize = "h-6 w-6";
const linkClass = "text-gray-400 hover:text-red-400"; {/* Icon Color and Color on hover*/}

const links = {
  facebook: "https://www.facebook.com/JKKNIURS/",
  email: "mailto:jkkniurs7@gmail.com",
  twitter: "#",
  linkedin: "https://www.linkedin.com/company/jkkniu-research-society/",
  youtube: "https://www.youtube.com/@jkkniuresearchsociety5797",
};

export default function Footer() {
  return (
    <section className="bg-gray-200">
        <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
            <div className="flex justify-center mt-7 space-x-6">
                <Link href={links.facebook} target="_blank" className={linkClass}>
                    <span className="sr-only">Facebook</span>
                    <FacebookIcon className = {iconSize}/>
                </Link>
                <Link href={links.twitter} target="_blank" className={linkClass}>
                    <span className="sr-only">Twitter</span>
                    <TwitterIcon className = {iconSize}/>
                </Link>
                <Link href={links.email} target="_blank" className={linkClass}>
                    <span className="sr-only">Email</span>
                    <EmailIcon className = {iconSize}/>
                </Link>
                
                <Link href={links.linkedin} target="_blank" className={linkClass}>
                    <span className="sr-only">LinkedIn</span>
                    <LinkedInIcon className = {iconSize}/>
                </Link>
                <Link href={links.youtube} target="_blank" className={linkClass}>
                    <span className="sr-only">YouTube</span>
                    <YoutubeIcon className = {iconSize}/>
                </Link>
            </div>
            <p className="mt-8 text-base leading-6 text-center text-gray-400">
            © 2024 JKKNIU Research Society. All rights reserved.
            </p>
        </div>
    </section>
  );
}