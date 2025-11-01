import React, {useState} from "react";
import ContentSwitcher from "@/components/ContentSwitcher.tsx";

const FormField = ({id, label, type = "text", value, onChange, required = true, options = []}) => {

    if (type === "textarea") {
        return (
            <div className="mb-6">
                <label htmlFor={id} className="block text-sm font-medium text-gray-300 mb-2">
                    {label} {required && <span className="text-red-400">*</span>}
                </label>
                <textarea
                    id={id}
                    name={id}
                    value={value}
                    onChange={onChange}
                    required={required}
                    className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white transition duration-200 h-32 resize-none"
                    placeholder={`Enter your ${label.toLowerCase()}...`}
                />
            </div>
        );
    }

    if (type === "select") {
        return (
            <div className="mb-6">
                <label htmlFor={id} className="block text-sm font-medium text-gray-300 mb-2">
                    {label} {required && <span className="text-red-400">*</span>}
                </label>
                <div className="relative">
                    <select
                        id={id}
                        name={id}
                        value={value}
                        onChange={onChange}
                        required={required}
                        className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white transition duration-200 appearance-none"
                    >
                        <option value="" disabled>Select a {label.toLowerCase()}...</option>
                        {options.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                    <div
                        className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/>
                        </svg>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="mb-6">
            <label htmlFor={id} className="block ml-0 text-sm font-medium text-gray-300 mb-2">
                {label} {required && <span className="text-red-400">*</span>}
            </label>
            <input
                type={type}
                id={id}
                name={id}
                value={value}
                onChange={onChange}
                required={required}
                className={`w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white transition duration-200 ${
                    type === "textarea" ? "h-32 resize-none" : ""
                }`}
                placeholder={`Enter your ${label.toLowerCase()}...`}
            />
        </div>
    );
};

const items = [
    {
        label: "Company presentations",
        content: (
            <span className="text-neutral-400">
        Host networking events, present tech talks, and interact with top talent.
      </span>
        ),
    },
    {
        label: "Resume book access",
        content: (
            <span className="text-neutral-400">Get access to our resume book.</span>
        ),
    },
    {
        label: "Brand visibility",
        content: (
            <span className="text-neutral-400">
        We provide premium brand visibility with our sponsorship packages. Logos go on the car, jacket, and/or website.
      </span>
        ),
    },
    {
        label: "Social media promotion",
        content: (
            <span className="text-neutral-400">
        We routinely post pictures on social media of your company's products, detailing how they helped us in our operations.
      </span>
        ),
    },
];

const SponsorInfo = () => {
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        email: "",
        level: "",
        message: "",
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const {name, company, email, level, message} = formData;
        const emailTo = "avip3@illinois.edu";

        const subject = `Sponsorship Inquiry from ${company || "Prospective Sponsor"}`;

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
        {value: "Lithium", label: "Lithium"},
        {value: "Gold", label: "Gold"},
        {value: "Orange", label: "Orange"},
        {value: "Blue", label: "Blue"},
    ];

    return (
        <div className="flex flex-col justify-center items-center text-center mt-20 min-h-screen text-white p-4 md:p-8">
            <div className="flex justify-center container min-w-screen">
                <div className="flex flex-col w-2/3 mt-20">
                    <div className="flex flex-col mb-5">
          <span className="text-white font-[450] text-7xl w-fit mx-auto mb-3">
            Interested in sponsoring us?
          </span>
                        <span className="text-xl font-light text-neutral-400">
            Sponsoring Illini Electric Motorsports includes premium brand
            visibility, extensive value-add benefits, and a strong partnership.
          </span>
                    </div>
                    <div>
                        <ContentSwitcher items={items}/>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center mb-10 mx-5">
                <span className="text-white font-[450] text-7xl w-fit mx-auto mb-3 mt-10">
                  Become a Sponsor
                </span>
                <p className="text-xl font-light text-neutral-400">
                    We're looking for partners to help us build the future of mobility.
                    Fill out the form below to get in touch!
                </p>
            </div>

            <div className="w-full max-w-2xl p-8 md:p-10">
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
