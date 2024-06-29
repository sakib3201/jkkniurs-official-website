import Link from "next/link";

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
                    <svg className={iconSize} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                    ></path>
                    </svg>
                </Link>
                <Link href={links.twitter} target="_blank" className={linkClass}>
                    <span className="sr-only">Twitter</span>
                    <svg className={iconSize} aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                </Link>
                <Link href={links.email} target="_blank" className={linkClass}>
                    <span className="sr-only">Email</span>
                    <svg className={iconSize} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                        <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                    </svg>

                </Link>
                
                <Link href={links.linkedin} target="_blank" className={linkClass}>
                    <span className="sr-only">LinkedIn</span>
                    <svg className={iconSize} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path
                        fill="currentColor"
                        d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                    ></path>
                    </svg>
                </Link>
                <Link href={links.youtube} target="_blank" className={linkClass}>
                    <span className="sr-only">YouTube</span>
                    <svg className={iconSize} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path
                        fill="currentColor"
                        d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
                    ></path>
                    </svg>
                </Link>
            </div>
            <p className="mt-8 text-base leading-6 text-center text-gray-400">
            © 2024 JKKNIU Research Society. All rights reserved.
            </p>
        </div>
    </section>
  );
}
