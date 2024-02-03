import React, { useState, useRef } from "react";

const SuccessPage = () => {
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
    ResumeFormatingNeeded: "",
    FormatedBy: "",
    Resume: null,
  };

  const [formData, setFormData] = useState(initialFormData);
  const [validationErrors, setValidationErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const resumeInputRef = useRef(null); // Create a ref for the resume input

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

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      console.log("Form Data Submitted:", formData);
      setShowPopup(true);
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setFormData(initialFormData);
    setValidationErrors({});
    if (resumeInputRef.current) {
      resumeInputRef.current.value = ""; // Clear the file input
    }
  };

  return (
    <div>
      <section className="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 mt-20">
        <h1 className="text-xl font-bold text-white capitalize dark:text-white">
          Employee Information Form
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            {/* Dynamically generate input fields based on formData */}
            {Object.keys(initialFormData)
              .filter((key) => key !== "Resume")
              .map((key) => (
                <div key={key} className="mb-4">
                  <label
                    className="text-white dark:text-gray-200 block text-sm font-bold mb-2"
                    htmlFor={key}
                  >
                    {key.replace(/([A-Z])/g, " $1").trim()}
                  </label>
                  <input
                    type="text"
                    id={key}
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
              <label className="block text-sm font-medium text-white">
                Resume
              </label>
              <input
                id="Resume"
                name="Resume"
                type="file"
                onChange={handleInputChange}
                ref={resumeInputRef} // Assign the ref to the file input
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
              />
              {validationErrors.Resume && (
                <p className="text-red-500 text-xs italic">
                  {validationErrors.Resume}
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
};

export default SuccessPage;
