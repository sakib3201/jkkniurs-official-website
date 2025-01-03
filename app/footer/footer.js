'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import FacebookIcon from "@/public/icons/facebookIcon";
import TwitterIcon from "@/public/icons/twitterIcon";
import EmailIcon from "@/public/icons/emailIcon";
import LinkedInIcon from "@/public/icons/linkedInIcon";
import YoutubeIcon from "@/public/icons/youtubeIcon";
import Wave1 from "@/public/illustrations/waves_1";
import Wave2 from "@/public/illustrations/waves_2";

const iconSize = "h-4 2-4 md:h-6 w-6";
const linkClass = "text-gray-400 hover:text-red-400";

const links = {
  facebook: "https://www.facebook.com/JKKNIURS/",
  email: "mailto:jkkniurs7@gmail.com",
  twitter: "#",
  linkedin: "https://www.linkedin.com/company/jkkniu-research-society/",
  youtube: "https://www.youtube.com/@jkkniuresearchsociety5797",
};

export default function Footer() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <div className="flex flex-col">
      {isHomePage ? <Wave1 className={"-mb-0.5 -mt-0.5"} /> : <Wave2 className={"-mb-0.5 -mt-0.5"} />}

      <section className="bg-[#264653]">
        <div className="mx-auto w-screen space-y-8 overflow-hidden px-4 py-12 sm:px-6 lg:mb-16 lg:px-8">
          <div className="flex justify-center space-x-4 md:space-x-8">
            <Link href={links.facebook} target="_blank" className={linkClass}>
              <span className="sr-only">Facebook</span>
              <FacebookIcon className={iconSize} />
            </Link>
            <Link href={links.twitter} target="_blank" className={linkClass}>
              <span className="sr-only">Twitter</span>
              <TwitterIcon className={iconSize} />
            </Link>
            <Link href={links.email} target="_blank" className={linkClass}>
              <span className="sr-only">Email</span>
              <EmailIcon className={iconSize} />
            </Link>

            <Link href={links.linkedin} target="_blank" className={linkClass}>
              <span className="sr-only">LinkedIn</span>
              <LinkedInIcon className={iconSize} />
            </Link>
            <Link href={links.youtube} target="_blank" className={linkClass}>
              <span className="sr-only">YouTube</span>
              <YoutubeIcon className={iconSize} />
            </Link>
          </div>
          <p className="mt-8 text-center text-xs leading-6 text-gray-400 md:text-base">
            © 2024 JKKNIU Research Society. All rights reserved.
          </p>
        </div>
      </section>
    </div>
  );
}
