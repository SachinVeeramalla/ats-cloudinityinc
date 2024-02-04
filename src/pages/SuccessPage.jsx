import React, { useState, useRef } from "react";

function SuccessPage() {
  const initialFormData = {
    FullName: "",
    RequiredID: "",
    RequiredTitle: "",
    Role: "",
    RequiredCreationDate: "",
    VendorID: "",
    ImmigrationStatus: "",
    ContractType: "",
    SubmissionDate: "",
    RequiredSubmissionEndDate: "",
    CandidateCurrentLocation: "",
    ContactNumber: "",
    RecruiterName: "",
    State: "",
    SubmissionStatus: "",
    VendorRate: "",
    CandidatePayRate: "",
    BillRateMargin: "",
    ResumeSource: "",
    EmailId: "",
    LinkedInID: "",
    EmployerInformation: "",
    ProfessionalReferences: "",
    DOB: "",
    RequiredSkills: "",
    ResumeFormattingNeeded: "",
    FormattedBy: "",
    Resume: null, // Placeholder for the resume file
  };
  const [formData, setFormData] = useState(initialFormData);
  const [validationErrors, setValidationErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const resumeInputRef = useRef(null);

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleInputChange = (e) => {
    const { id, value, files } = e.target;
    if (id === "Resume" && files) {
      const file = files[0];
      if (file) {
        const allowedTypes = [
          "application/pdf",
          "application/msword",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ];
        if (!allowedTypes.includes(file.type) || file.size > 1024 * 1024 * 10) {
          setValidationErrors({
            ...validationErrors,
            Resume: "Only PDF or DOC files under 10MB are allowed.",
          });
        } else {
          setFormData({
            ...formData,
            Resume: file,
          });
          let newErrors = { ...validationErrors };
          delete newErrors.Resume;
          setValidationErrors(newErrors);
        }
      }
    } else {
      setFormData({
        ...formData,
        [id]: value,
      });
      let newErrors = { ...validationErrors };
      delete newErrors[id];
      setValidationErrors(newErrors);
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key] && key !== "Resume") {
        newErrors[key] = "This field is required.";
        isValid = false;
      }
    });
    if (formData.EmailId && !isValidEmail(formData.EmailId)) {
      newErrors.EmailId = "Invalid email format.";
      isValid = false;
    }

    if (!formData.Resume) {
      newErrors.Resume = "Please upload a resume.";
      isValid = false;
    }

    setValidationErrors(newErrors);
    return isValid;
  };
  const uploadResume = async (file) => {
    const filename = encodeURIComponent(file.name);
    const uploadUrl = `https://lrl0r0t06c.execute-api.us-east-1.amazonaws.com/Prod/upload/${filename}`;
    const fileData = new FormData();
    fileData.append("file", file);

    try {
      const response = await fetch(uploadUrl, {
        method: "POST",
        body: fileData,
      });
      const data = await response.json();

      console.log("Server response:", data);

      if (!response.ok) {
        throw new Error(`Server responded with status: ${response.status}`);
      }

      // Since the server confirms success but doesn't provide a URL, log the success and maybe return a success message instead
      if (data.message === "File uploaded successfully") {
        console.log(data.message);
        // Return a static message or a mock URL, or adjust as needed
        return "Upload successful, no URL provided"; // Placeholder return value
      } else {
        throw new Error(
          "Unexpected server response, upload may not be successful."
        );
      }
    } catch (error) {
      console.error("Upload Error:", error);
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      console.log("Form validation failed", validationErrors);
      return;
    }

    if (formData.Resume) {
      try {
        // Note: `uploadResult` now may not be a URL but a success message
        const uploadResult = await uploadResume(formData.Resume);
        console.log(uploadResult); // Log the success message or handle as needed

        // Proceed with the rest of your form submission logic
        console.log("Form Data:", JSON.stringify(formData, null, 2));
        setShowPopup(true);
      } catch (error) {
        alert("Failed to upload resume: " + error.message);
      }
    } else {
      alert("Please select a resume to upload.");
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setFormData(initialFormData);
    setValidationErrors({});
    if (resumeInputRef.current) {
      resumeInputRef.current.value = "";
    }
  };

  return (
    <div>
      {/* The form component with Tailwind CSS */}
      <section className="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 mt-20">
        <h1 className="text-xl font-bold text-white capitalize dark:text-white">
          Employee Information Form
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            {/* Input fields generated based on formData */}
            {Object.keys(initialFormData)
              .filter((key) => key !== "Resume")
              .map((key) => (
                <div key={key} className="mb-4">
                  <label
                    htmlFor={key}
                    className="text-white dark:text-gray-200 block text-sm font-bold mb-2"
                  >
                    {key.replace(/([A-Z])/g, " $1").trim()}
                  </label>
                  <input
                    type="text"
                    id={key}
                    name={key}
                    value={formData[key]}
                    onChange={handleInputChange}
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  />
                  {validationErrors[key] && (
                    <p className="text-red-500 text-xs italic">
                      {validationErrors[key]}
                    </p>
                  )}
                </div>
              ))}
            <div className="mb-4">
              <label
                htmlFor="Resume"
                className="block text-sm font-medium text-white"
              >
                Resume
              </label>
              <input
                id="Resume"
                name="Resume"
                type="file"
                onChange={handleInputChange}
                ref={resumeInputRef}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
              />
              {validationErrors["Resume"] && (
                <p className="text-red-500 text-xs italic">
                  {validationErrors["Resume"]}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
      {showPopup && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center">
          <div className="bg-white p-5 rounded-lg shadow-lg">
            <h2 className="text-lg mb-4">Submission Successful</h2>
            <p>Your form has been submitted successfully.</p>
            <button
              onClick={handleClosePopup}
              className="mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SuccessPage;
