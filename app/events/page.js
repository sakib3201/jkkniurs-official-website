"use client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Clock,
  MapPin,
  ExternalLink,
  CalendarDays,
} from "lucide-react";
import { useState } from "react";

export default function Events() {
  const [activeTab, setActiveTab] = useState("active");
  const currentDate = new Date();

  // Dummy data for events
  const [events] = useState(
    [
      {
        id: 1,
        title: "Research Methodology Workshop 2025",
        publishDate: "January 30, 2025",
        date: "March 15, 2025",
        time: "10:00 AM - 4:00 PM",
        location: "JKKNIU Central Auditorium",
        description:
          "Join us for a comprehensive workshop on research methodologies, featuring expert speakers from various academic fields. Perfect for students and faculty members interested in enhancing their research skills.",
        category: "Workshop",
        cta: {
          primary: {
            text: "Register Now",
            link: "https://forms.google.com/workshop-registration",
          },
          secondary: {
            text: "Download Schedule",
            link: "/resources/workshop-materials",
          },
        },
      },
      {
        id: 2,
        title: "Annual Research Symposium",
        publishDate: "January 25, 2025",
        date: "February 28, 2025",
        time: "9:00 AM - 5:00 PM",
        location: "Science Building Conference Hall",
        description:
          "Our flagship annual event where students and faculty present their research findings. Features keynote speakers and networking opportunities.",
        category: "Conference",
        cta: {
          primary: {
            text: "Submit Abstract",
            link: "https://forms.google.com/abstract-submission",
          },
          secondary: {
            text: "View Guidelines",
            link: "/resources/submission-guidelines",
          },
        },
      },
      {
        id: 3,
        title: "Research Data Analysis Training",
        publishDate: "January 20, 2025",
        date: "February 20, 2025",
        time: "2:00 PM - 5:00 PM",
        location: "Computer Lab 2, ICT Building",
        description:
          "Hands-on training session on statistical analysis using SPSS and R. Learn how to analyze research data effectively and create meaningful visualizations.",
        category: "Training",
        cta: {
          primary: {
            text: "Join Training",
            link: "https://forms.google.com/data-analysis-training",
          },
          secondary: {
            text: "Prerequisites",
            link: "/resources/training-requirements",
          },
        },
      },
      {
        id: 4,
        title: "Research Proposal Competition 2025",
        publishDate: "January 15, 2025",
        date: "March 30, 2025",
        time: "9:00 AM - 1:00 PM",
        location: "JKKNIU Conference Center",
        description:
          "Present your innovative research proposals and win exciting prizes. Open to all undergraduate and graduate students. Total prize money: 50,000 BDT.",
        category: "Competition",
        cta: {
          primary: {
            text: "Submit Proposal",
            link: "https://forms.google.com/proposal-submission",
          },
          secondary: {
            text: "Competition Rules",
            link: "/resources/competition-guidelines",
          },
        },
      },
      {
        id: 5,
        title: "Literature Review Seminar",
        publishDate: "January 10, 2025",
        date: "February 5, 2025",
        time: "11:00 AM - 2:00 PM",
        location: "Central Library Seminar Room",
        description:
          "Learn effective techniques for conducting comprehensive literature reviews. Topics include database searching, citation management, and systematic review methods.",
        category: "Seminar",
        cta: {
          primary: {
            text: "Reserve Seat",
            link: "https://forms.google.com/literature-review-seminar",
          },
        },
      },
      {
        id: 6,
        title: "Literature Review Seminar December",
        publishDate: "December 1, 2024",
        date: "December 10, 2024",
        time: "11:00 AM - 2:00 PM",
        location: "Central Library Seminar Room",
        description:
          "Learn effective techniques for conducting comprehensive literature reviews. Topics include database searching, citation management, and systematic review methods.",
        category: "Seminar",
        cta: {
          primary: {
            text: "Reserve Seat",
            link: "https://forms.google.com/literature-review-seminar",
          },
        },
      },
      {
        id: 7,
        title: "Literature Review Seminar November",
        publishDate: "November 1, 2024",
        date: "November 10, 2024",
        time: "11:00 AM - 2:00 PM",
        location: "Central Library Seminar Room",
        description:
          "Learn effective techniques for conducting comprehensive literature reviews. Topics include database searching, citation management, and systematic review methods.",
        category: "Seminar",
        cta: {
          primary: {
            text: "Reserve Seat",
            link: "https://forms.google.com/literature-review-seminar",
          },
        },
      },
    ].sort((a, b) => new Date(b.date) - new Date(a.date)),
  );

  // Filter events based on current date
  const filteredEvents = events.filter((event) => {
    const eventDate = new Date(event.date);
    return activeTab === "active"
      ? eventDate >= currentDate
      : eventDate < currentDate;
  });

  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <h1 className="mb-8 text-center text-4xl font-bold">
        Research Society Events
      </h1>

      {/* Tab Buttons */}
      <div className="mb-8 flex justify-center gap-4">
        <Button
          variant={activeTab === "active" ? "default" : "outline"}
          onClick={() => setActiveTab("active")}
          className="min-w-[120px]"
        >
          Upcoming Events
        </Button>
        <Button
          variant={activeTab === "past" ? "default" : "outline"}
          onClick={() => setActiveTab("past")}
          className="min-w-[120px]"
        >
          Past Events
        </Button>
      </div>

      {/* Events List */}
      <div className="space-y-6">
        {filteredEvents.length === 0 ? (
          <p className="text-muted-foreground text-center">
            No {activeTab === "active" ? "upcoming" : "past"} events to display
          </p>
        ) : (
          filteredEvents.map((event) => (
            <Card
              key={event.id}
              className="transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <CardHeader>
                <div className="flex flex-col space-y-4">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <CardTitle className="text-2xl font-bold">
                      {event.title}
                    </CardTitle>
                    <span className="bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium">
                      {event.category}
                    </span>
                  </div>
                  <CardDescription className="text-muted-foreground text-sm">
                    Published on {event.publishDate}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <div className="border-primary/20 border-l-2 pl-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </CardContent>
              <CardFooter className="flex flex-wrap gap-4">
                {event.cta?.primary && (
                  <Button
                    variant="default"
                    className="flex items-center gap-2"
                    onClick={() =>
                      window.open(event.cta.primary.link, "_blank")
                    }
                  >
                    {event.cta.primary.text}
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                )}
                {event.cta?.secondary && (
                  <Button
                    variant="outline"
                    className="flex items-center gap-2"
                    onClick={() =>
                      window.open(event.cta.secondary.link, "_blank")
                    }
                  >
                    {event.cta.secondary.text}
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
