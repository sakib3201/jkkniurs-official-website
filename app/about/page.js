"use client";

import { useState, useMemo } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
// Import icons from react-icons
import { FaLinkedin, FaTwitter, FaEnvelope, FaUniversity, FaCalendarAlt } from "react-icons/fa";
import { SiResearchgate } from "react-icons/si";

export default function About() {
  // Dummy data for the three sections
  const executives = [
    {
      id: 1,
      name: "Dr. Aisha Rahman",
      designation: "President",
      image: "https://i.pravatar.cc/300?img=1",
      department: "Computer Science",
      email: "aisha.rahman@example.com",
      socialLinks: {
        linkedin: "https://linkedin.com/in/example",
        twitter: "https://twitter.com/example",
        researchGate: "https://researchgate.net/profile/example"
      }
    },
    {
      id: 2,
      name: "Prof. Kamal Ahmed",
      designation: "Vice President",
      image: "https://i.pravatar.cc/300?img=3",
      department: "Physics",
      email: "kamal.ahmed@example.com",
      socialLinks: {
        linkedin: "https://linkedin.com/in/example2",
        twitter: "https://twitter.com/example2",
        researchGate: "https://researchgate.net/profile/example2"
      }
    },
    {
      id: 3,
      name: "Dr. Nadia Khan",
      designation: "Secretary",
      image: "https://i.pravatar.cc/300?img=5",
      department: "Mathematics",
      email: "nadia.khan@example.com",
      socialLinks: {
        linkedin: "https://linkedin.com/in/example3",
        twitter: "https://twitter.com/example3",
        researchGate: "https://researchgate.net/profile/example3"
      }
    },
    {
      id: 4,
      name: "Prof. Omar Hassan",
      designation: "Treasurer",
      image: "https://i.pravatar.cc/300?img=7",
      department: "Economics",
      email: "omar.hassan@example.com",
      socialLinks: {
        linkedin: "https://linkedin.com/in/example4",
        twitter: "https://twitter.com/example4",
        researchGate: "https://researchgate.net/profile/example4"
      }
    },
    {
      id: 5,
      name: "Dr. Fatima Ali",
      designation: "Executive Member",
      image: "https://i.pravatar.cc/300?img=9",
      department: "Biology",
      email: "fatima.ali@example.com",
      socialLinks: {
        linkedin: "https://linkedin.com/in/example5",
        twitter: "https://twitter.com/example5",
        researchGate: "https://researchgate.net/profile/example5"
      }
    },
    {
      id: 6,
      name: "Dr. Hassan Rahman",
      designation: "Executive Member",
      image: "https://i.pravatar.cc/300?img=11",
      department: "Chemistry",
      email: "hassan.rahman@example.com",
      socialLinks: {
        linkedin: "https://linkedin.com/in/example6",
        twitter: "https://twitter.com/example6",
        researchGate: "https://researchgate.net/profile/example6"
      }
    }
  ];

  // Alumni with fiscal year as a direct property
  const alumni = [
    {
      id: 1,
      name: "Dr. Zainab Hossain",
      designation: "Former President",
      image: "https://i.pravatar.cc/300?img=2",
      department: "Physics",
      currentPosition: "Professor at Oxford University",
      email: "zainab.hossain@example.com",
      fiscal_year: "2023-2024",
      socialLinks: {
        linkedin: "https://linkedin.com/in/example7",
        twitter: "https://twitter.com/example7",
        researchGate: "https://researchgate.net/profile/example7"
      }
    },
    {
      id: 2,
      name: "Prof. Imran Kadir",
      designation: "Former Secretary",
      image: "https://i.pravatar.cc/300?img=4",
      department: "Mathematics",
      currentPosition: "Researcher at NASA",
      email: "imran.kadir@example.com",
      fiscal_year: "2023-2024",
      socialLinks: {
        linkedin: "https://linkedin.com/in/example8",
        twitter: "https://twitter.com/example8",
        researchGate: "https://researchgate.net/profile/example8"
      }
    },
    {
      id: 3,
      name: "Dr. Laila Begum",
      designation: "Former Executive Member",
      image: "https://i.pravatar.cc/300?img=6",
      department: "Computer Science",
      currentPosition: "CTO at Tech Innovators Inc.",
      email: "laila.begum@example.com",
      fiscal_year: "2022-2023",
      socialLinks: {
        linkedin: "https://linkedin.com/in/example9",
        twitter: "https://twitter.com/example9",
        researchGate: "https://researchgate.net/profile/example9"
      }
    },
    {
      id: 4,
      name: "Dr. Rafiq Islam",
      designation: "Former Vice President",
      image: "https://i.pravatar.cc/300?img=8",
      department: "Biology",
      currentPosition: "Head of Research at Global Pharma",
      email: "rafiq.islam@example.com",
      fiscal_year: "2021-2022",
      socialLinks: {
        linkedin: "https://linkedin.com/in/example10",
        twitter: "https://twitter.com/example10",
        researchGate: "https://researchgate.net/profile/example10"
      }
    }
  ];

  const advisors = [
    {
      id: 1,
      name: "Prof. Dr. Abdul Mannan",
      designation: "Chief Advisor",
      image: "https://i.pravatar.cc/300?img=10",
      department: "Dean, Faculty of Science",
      email: "abdul.mannan@example.com",
      socialLinks: {
        linkedin: "https://linkedin.com/in/example11",
        twitter: "https://twitter.com/example11",
        researchGate: "https://researchgate.net/profile/example11"
      }
    },
    {
      id: 2,
      name: "Prof. Dr. Shahana Akter",
      designation: "Senior Advisor",
      image: "https://i.pravatar.cc/300?img=12",
      department: "Head, Department of Physics",
      email: "shahana.akter@example.com",
      socialLinks: {
        linkedin: "https://linkedin.com/in/example12",
        twitter: "https://twitter.com/example12",
        researchGate: "https://researchgate.net/profile/example12"
      }
    },
    {
      id: 3,
      name: "Prof. Dr. Mohammad Hasan",
      designation: "Research Advisor",
      image: "https://i.pravatar.cc/300?img=14",
      department: "Department of Computer Science",
      email: "mohammad.hasan@example.com",
      socialLinks: {
        linkedin: "https://linkedin.com/in/example13",
        twitter: "https://twitter.com/example13",
        researchGate: "https://researchgate.net/profile/example13"
      }
    }
  ];

  // Get unique fiscal years from alumni
  const fiscalYears = useMemo(() => {
    const years = [...new Set(alumni.map(member => member.fiscal_year))];
    return years.sort().reverse(); // Sort in reverse to get most recent first
  }, [alumni]);

  // Selected year state for alumni
  const [selectedAlumniYear, setSelectedAlumniYear] = useState(fiscalYears[0] || "");

  // Filter alumni by selected fiscal year
  const filteredAlumni = useMemo(() => {
    return alumni.filter(member => member.fiscal_year === selectedAlumniYear);
  }, [alumni, selectedAlumniYear]);

  // Improved member card component
  const MemberCard = ({ member }) => {
    return (
      <Card className="overflow-hidden rounded-lg border border-[#264653]/10 bg-white shadow-md transition-all duration-300 hover:shadow-xl">
        <div className="relative">
          {/* Full rectangular image */}
          <div className="h-64 w-full overflow-hidden">
            <img 
              src={member.image} 
              alt={member.name} 
              className="h-full w-full object-cover transition-all duration-500 hover:scale-105" 
            />
            
            {/* Overlay with gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#264653] via-transparent to-transparent opacity-0 transition-opacity duration-300 hover:opacity-60"></div>
          </div>
          
          {/* Social links positioned at the top right */}
          <div className="absolute right-3 top-3 flex gap-2">
            <a 
              href={member.socialLinks.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="rounded-full bg-white p-2 shadow-md transition-all hover:bg-blue-100"
            >
              <FaLinkedin className="text-[#0077b5]" size={16} />
            </a>
            <a 
              href={member.socialLinks.twitter} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="rounded-full bg-white p-2 shadow-md transition-all hover:bg-blue-50"
            >
              <FaTwitter className="text-[#1DA1F2]" size={16} />
            </a>
            <a 
              href={member.socialLinks.researchGate} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="rounded-full bg-white p-2 shadow-md transition-all hover:bg-green-50"
            >
              <SiResearchgate className="text-[#00CCBB]" size={16} />
            </a>
          </div>
        </div>
        
        {/* Card content with clean styling */}
        <div className="border-t-4 border-[#264653]"></div>
        <CardHeader className="p-4 pb-2">
          <CardTitle className="text-xl font-bold text-[#264653]">{member.name}</CardTitle>
          <CardDescription className="text-md font-medium text-red-500">{member.designation}</CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-2 p-4 pt-0">
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <FaUniversity className="h-4 w-4 text-[#264653]" />
            <span>{member.department}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <FaEnvelope className="h-4 w-4 text-[#264653]" />
            <span>{member.email}</span>
          </div>
          {member.currentPosition && (
            <Badge className="mt-2 bg-[#264653] text-[#fefae0] hover:bg-[#264653]/90">
              {member.currentPosition}
            </Badge>
          )}
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="min-h-screen bg-[#fefae0]/30 py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <h1 className="relative mb-6 text-5xl font-extrabold text-[#264653] md:text-6xl lg:text-7xl">
            <span className="relative inline-block">
              About Us
              <span className="absolute -bottom-2 left-0 h-1.5 w-full rounded bg-red-500"></span>
            </span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-700 md:text-xl">
            JKKNIU Research Society is dedicated to fostering a culture of research excellence
            and innovation among students and faculty members.
          </p>
        </div>

        {/* Main tabs */}
        <div className="mx-auto max-w-7xl">
          <Tabs defaultValue="executives" className="w-full">
            <TabsList className="mb-10 grid w-full grid-cols-3 rounded-xl bg-[#fefae0]/60 p-1">
              <TabsTrigger 
                value="executives" 
                className="rounded-lg py-3 text-base data-[state=active]:bg-[#264653] data-[state=active]:text-[#fefae0]"
              >
                Executives
              </TabsTrigger>
              <TabsTrigger 
                value="alumni" 
                className="rounded-lg py-3 text-base data-[state=active]:bg-[#264653] data-[state=active]:text-[#fefae0]"
              >
                Alumni
              </TabsTrigger>
              <TabsTrigger 
                value="advisors" 
                className="rounded-lg py-3 text-base data-[state=active]:bg-[#264653] data-[state=active]:text-[#fefae0]"
              >
                Advisors
              </TabsTrigger>
            </TabsList>

            {/* Executive Tab Content */}
            <TabsContent value="executives" className="focus-visible:outline-none">
              <div className="mb-8 border-l-4 border-[#264653] pl-4">
                <h2 className="text-3xl font-bold text-[#264653]">Executive Committee</h2>
                <p className="mt-2 text-lg text-gray-600">
                  Student leaders driving innovation and research initiatives at JKKNIU.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {executives.map(member => (
                  <MemberCard key={member.id} member={member} />
                ))}
              </div>
            </TabsContent>

            {/* Alumni Tab Content with Year Selection */}
            <TabsContent value="alumni" className="focus-visible:outline-none">
              <div className="mb-8 border-l-4 border-[#264653] pl-4">
                <h2 className="text-3xl font-bold text-[#264653]">Alumni Members</h2>
                <p className="mt-2 text-lg text-gray-600">
                  Former student leaders who have gone on to achieve excellence in their fields.
                </p>
              </div>
              
              {/* Year tabs for alumni */}
              <div className="mb-8">
                <div className="mb-3 flex items-center gap-2 text-lg font-medium text-[#264653]">
                  <FaCalendarAlt />
                  <span>Select Year</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {fiscalYears.map(year => (
                    <button
                      key={year}
                      onClick={() => setSelectedAlumniYear(year)}
                      className={`rounded-full px-4 py-2 transition-all ${
                        selectedAlumniYear === year 
                          ? 'bg-[#264653] text-white' 
                          : 'bg-white text-[#264653] hover:bg-[#fefae0]'
                      }`}
                    >
                      {year}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Display alumni for selected year */}
              <div className="mb-4">
                <h3 className="inline-block rounded bg-[#fefae0] px-4 py-2 text-xl font-semibold text-[#264653]">
                  Fiscal Year: {selectedAlumniYear}
                </h3>
              </div>
              
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {filteredAlumni.map(member => (
                  <MemberCard key={member.id} member={member} />
                ))}
              </div>
            </TabsContent>

            {/* Advisors Tab Content */}
            <TabsContent value="advisors" className="focus-visible:outline-none">
              <div className="mb-8 border-l-4 border-[#264653] pl-4">
                <h2 className="text-3xl font-bold text-[#264653]">Advisory Board</h2>
                <p className="mt-2 text-lg text-gray-600">
                  Distinguished faculty members guiding research activities and mentoring students.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {advisors.map(member => (
                  <MemberCard key={member.id} member={member} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}