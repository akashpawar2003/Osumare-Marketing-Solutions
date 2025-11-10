import React, { useState } from "react";

const FormPopup = ({ onClose, onSubmit, showThankYou }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    gender: "",
    languages: [],
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setForm((prev) => ({
        ...prev,
        languages: checked
          ? [...prev.languages, value]
          : prev.languages.filter((lang) => lang !== value),
      }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-600 hover:cursor-pointer"
        >
          ✖
        </button>

        {!showThankYou ? (
          <>
            <h2 className="text-lg font-bold mb-4 text-center">Fill the Form</h2>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                className="border p-2 rounded w-full text-red-500"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                className="border p-2 rounded w-full text-red-500"
                required
              />

              <div>
                <p className="text-sm mb-1">Gender</p>
                <div className="flex gap-3">
                  {["Male", "Female"].map((g) => (
                    <label key={g} className="flex items-center gap-1">
                      <input
                        type="radio"
                        name="gender"
                        value={g}
                        checked={form.gender === g}
                        onChange={handleChange}
                      />
                      {g}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm mb-1">Languages</p>
                <div className="flex gap-3">
                  {["English", "Hindi", "Marathi"].map((lang) => (
                    <label key={lang} className="flex items-center gap-1">
                      <input
                        type="checkbox"
                        value={lang}
                        checked={form.languages.includes(lang)}
                        onChange={handleChange}
                      />
                      {lang}
                    </label>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-500"
              >
                Submit
              </button>
            </form>
          </>
        ) : (
          <div className="fixed inset-0 bg-opacity-40 flex justify-center items-center">
            <div className="bg-white rounded-lg shadow-lg p-6 w-80 text-center">
              <div className="text-3xl mb-2">❤️</div>
                <h2 className="text-lg font-semibold mb-1">
                  Thank you for connecting with us.
                </h2>
                <p className="text-sm text-gray-500 mb-4">
                    Our team will contact you soon.
                  </p>
                <button
                    // onClick={onClose}
                  className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600"
                >
                  Done
                </button>
              </div>
          </div>)}
            { /* <div className="text-center py-8">
            <h3 className="text-xl font-bold text-green-600 mb-2">
              Thank You!
            </h3>
            <p className="text-gray-500 text-sm">Form submitted successfully</p>
          </div> */}
          
        
        
      </div>
    </div>
  );
};

export default FormPopup;
