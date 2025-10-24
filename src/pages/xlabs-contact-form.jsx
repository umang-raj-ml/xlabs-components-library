import React, { useState } from "react";
import XlabsInput from "../components/xlabs-input";
import XlabsButton from "../components/xlabs-button";
import XlabsText from "../components/xlabs-text";
import XlabsCheckbox from "../components/xlabs-checkbox";
import image from '../assets/3ce109d83b0cc4d043134b8a667a878c1c72750c.svg';


function XlabsContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
    agreed: false
  });

  const handleChange = (field) => (e) => {
    setFormData(prev => ({
      ...prev,
      [field]: field === 'agreed' ? e.target.checked : e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="w-[718px]" data-name="contact-form" data-node-id="2007:2">
      <XlabsText size="lg" color="custom" className="text-[#3d8d7a] text-[55px] font-bold mb-8">
        Get in Touch
      </XlabsText>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <XlabsInput
            value={formData.firstName}
            onChange={handleChange('firstName')}
            placeholder="First Name"
          />
          <XlabsInput
            value={formData.lastName}
            onChange={handleChange('lastName')}
            placeholder="Last Name"
          />
        </div>

        <XlabsInput
          value={formData.email}
          onChange={handleChange('email')}
          placeholder="Email Address"
        />

        <XlabsInput
          value={formData.subject}
          onChange={handleChange('subject')}
          placeholder="Subject Line"
        />

        <textarea
          value={formData.message}
          onChange={handleChange('message')}
          placeholder="Drop Your Message..."
          className="w-full p-2 border border-[#b3d8a8] rounded-[6px] min-h-[200px] resize-y"
        />

        <div className="flex items-center space-x-2">
          <XlabsCheckbox
            checked={formData.agreed}
            onChange={handleChange('agreed')}
          />
          <XlabsText size="sm" color="gray">
            I've read and agree with <a href="#" className="underline">terms</a> & <a href="#" className="underline">privacy policy</a>.
          </XlabsText>
        </div>

        <XlabsButton 
          variant="custom"
          onClick={handleSubmit}
          className="bg-[#3d8d7a] text-white px-6 py-2 rounded-[5px] flex items-center space-x-2"
        >
          <img src={image} alt="" className="w-5 h-5" />
          <span>Send Message</span>
        </XlabsButton>
      </form>
    </div>
  );
}

export default XlabsContactForm;