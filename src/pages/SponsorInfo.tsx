import { useRef, useState } from "react";
import ContentSwitcher from "@/components/ContentSwitcher.tsx";
import FormField from "@/components/FormField";

import PresentationInfo from "@/components/info_sections/PresentationInfo.tsx";
import LogoInfo from "@/components/info_sections/LogoInfo.tsx";
import ResumeInfo from "@/components/info_sections/ResumeInfo.tsx";
import SocialInfo from "@/components/info_sections/SocialInfo.tsx";
import { useIsVisible } from "@/util/visibilityDetector";

const items = [
  {
    label: "Company presentations",
    content: <PresentationInfo />,
  },
  {
    label: "Resume book access",
    content: <ResumeInfo />,
  },
  {
    label: "Brand visibility",
    content: <LogoInfo />,
  },
  {
    label: "Social media promotion",
    content: <SocialInfo />,
  },
];

interface FormDataState {
  name: string;
  company: string;
  email: string;
  level: string;
  message: string;
}

const SponsorInfo = () => {
  const switcherRef = useRef<HTMLDivElement>(null);
  const switcherVisible = useIsVisible(switcherRef, 0.3);

  const formRef = useRef<HTMLDivElement>(null);
  const formVisible = useIsVisible(formRef, 0.3);

  const [formData, setFormData] = useState<FormDataState>({
    name: "",
    company: "",
    email: "",
    level: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, company, email, level, message } = formData;
    const emailTo = "avip3@illinois.edu";

    const subject = `Sponsorship Inquiry from ${
      company || "Prospective Sponsor"
    }`;

    const body = `
            Hello,
            
            My name is ${name}.
            Company: ${company}
            Reply-to Email: ${email}
            Sponsorship Level: ${level || "Not specified"}
            
            Message:
            ${message}
            
            Sent from the IEM website sponsorship form.
    `;

    const mailtoLink = `mailto:${emailTo}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  const sponsorLevels = [
    { value: "Lithium", label: "Lithium" },
    { value: "Gold", label: "Gold" },
    { value: "Orange", label: "Orange" },
    { value: "Blue", label: "Blue" },
  ];

  return (
    <div
      ref={switcherRef}
      className={`${
        switcherVisible
          ? "opacity-100 blur-none translate-y-0"
          : "opacity-0 blur-lg translate-y-30"
      } transition-all duration-1500 flex flex-col justify-center items-center text-center mt-20 min-h-screen text-white p-4 md:p-8`}
    >
      <div className="flex justify-center container mb-20">
        <div className="flex flex-col w-full lg:w-2/3">
          <div className="flex flex-col mb-5">
            <span className="text-white font-[450] text-7xl w-fit mx-auto mb-3">
              Interested in sponsoring us?
            </span>
            <span className="text-xl font-light text-neutral-400">
              Sponsoring Illini Electric Motorsports begins a symbiotic
              relationship where we offer you visibility, recruiting resources,
              and events, and you support us with your products and/or
              donations.
            </span>
          </div>
          <div>
            <ContentSwitcher items={items} />
          </div>
        </div>
      </div>

      <div
        ref={formRef}
        className={`${
          formVisible
            ? "opacity-100 blur-none translate-y-0"
            : "opacity-0 blur-lg translate-y-30"
        } transition-all duration-1500 flex flex-col justify-center mb-10 mx-5`}
      >
        <span className="text-white font-[450] text-7xl w-fit mx-auto mb-3 mt-10">
          Become a Sponsor
        </span>
        <p className="text-xl font-light text-neutral-400">
          We're looking for partners to help us build the future of mobility.
          Fill out the form below to get in touch!
        </p>
      </div>

      <div
        className={`${
          formVisible
            ? "opacity-100 blur-none translate-y-0"
            : "opacity-0 blur-lg translate-y-30"
        } transition-all duration-1500 w-full max-w-2xl p-8 md:p-10`}
      >
        <form onSubmit={handleSubmit}>
          <FormField
            id="name"
            label="Full Name"
            value={formData.name}
            onChange={handleChange}
          />

          <FormField
            id="company"
            label="Company / Organization"
            value={formData.company}
            onChange={handleChange}
          />

          <FormField
            id="email"
            label="Contact Email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />

          <FormField
            id="level"
            label="Intended Sponsor Level"
            type="select"
            value={formData.level}
            onChange={handleChange}
            options={sponsorLevels}
            required={true}
          />

          <FormField
            id="message"
            label="Message"
            type="textarea"
            value={formData.message}
            onChange={handleChange}
            required={false}
          />

          <div className="mt-8">
            <button
              type="submit"
              className="w-full px-6 py-3 bg-white hover:bg-gray-300 text-black font-bold text-lg rounded-lg transition duration-300 ease-in-out transform shadow-lg"
            >
              Submit Inquiry
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SponsorInfo;
