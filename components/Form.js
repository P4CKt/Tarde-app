import React, { useState } from "react";

const FormPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    city: "",
    relationship: "",
    applicationReason: "",
    supportPerson: "",
    kvkkConfirmation: false,
  });
  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    phoneNumber: false,
    city: false,
    applicationReason: false,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {};
    let hasErrors = false;

    if (formData.firstName.trim() === "") {
      errors.firstName = true;
      hasErrors = true;
    }

    if (formData.lastName.trim() === "") {
      errors.lastName = true;
      hasErrors = true;
    }

    if (formData.phoneNumber.trim() === "") {
      errors.phoneNumber = true;
      hasErrors = true;
    }

    if (formData.city.trim() === "") {
      errors.city = true;
      hasErrors = true;
    }

    if (formData.applicationReason.trim() === "") {
      errors.applicationReason = true;
      hasErrors = true;
    }

    if (hasErrors) {
      setFormErrors(errors);
      return;
    }
    console.log(formData);
  };

  return (
    <div className="flex justify-self-center  ">
      <div className="pt-16 rounded-lg ">
        <h1 className="text-[#030E5E] font-extrabold text-5xl pt-8 mb-8 ">
          {" "}
          Psikolojik Destek Almak İçin Başvurun
        </h1>
        <div className="block md:hidden ">
          <img className="" src="/img/Group.svg"></img>
        </div>

        <div className="flex flex-col justify-center items-center">
          <form onSubmit={handleSubmit} className="flex flex-col ">
            <label htmlFor="firstName">Adınız*</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              style={{
                border: "1px solid black",
                color: "#333",
                fontFamily: "mono",
                fontSize: "14px",
                padding: "10px",
                borderRadius: "7px",
                width: "300px",
                marginBottom: "10px",
              }}
              className={formErrors.firstName ? "error" : ""}
            />
            {formErrors.firstName && (
              <span
                style={{
                  fontSize: "12px",
                  color: "red",
                }}
                className="error-message"
              >
                Bu alan boş bırakılamaz
              </span>
            )}

            <label htmlFor="lastName">Soyadınız*</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              style={{
                border: "1px solid black",
                border: "1px solid black",
                color: "#333",
                fontFamily: "mono",
                fontSize: "14px",
                padding: "10px",
                borderRadius: "7px",
                marginBottom: "10px",
              }}
              className={formErrors.lastName ? "error" : ""}
            />
            {formErrors.lastName && (
              <span
                style={{
                  fontSize: "12px",
                  color: "red",
                }}
                className="error-message"
              >
                Bu alan boş bırakılamaz
              </span>
            )}

            <label htmlFor="phoneNumber">İletişim Numaranız*</label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              style={{
                border: "1px solid black",
                border: "1px solid black",
                color: "#333",
                fontFamily: "mono",
                fontSize: "14px",
                padding: "10px",
                borderRadius: "7px",
                marginBottom: "10px",
              }}
              className={formErrors.phoneNumber ? "error" : ""}
            />
            {formErrors.phoneNumber && (
              <span
                style={{
                  fontSize: "12px",
                  color: "red",
                }}
                className="error-message"
              >
                Bu alan boş bırakılamaz
              </span>
            )}

            <label htmlFor="city">Yaşadığınız İl*</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              style={{
                border: "1px solid black",
                border: "1px solid black",
                color: "#333",
                fontFamily: "mono",
                fontSize: "14px",
                padding: "10px",
                borderRadius: "7px",
                marginBottom: "10px",
              }}
              className={formErrors.city ? "error" : ""}
            />
            {formErrors.city && (
              <span
                style={{
                  fontSize: "12px",
                  color: "red",
                }}
                className="error-message"
              >
                Bu alan boş bırakılamaz
              </span>
            )}
            <div className="flex">
              <label>
                Destek Alacak Kişi:
                <input
                  type="radio"
                  name="supportPerson"
                  value="Ben"
                  checked={formData.supportPerson === "Ben"}
                  onChange={handleChange}
                  style={{
                    marginBottom: "3px",
                    height: "16px",
                    width: "22px",
                    marginBottom: "10px",
                  }}
                />
                Ben
              </label>

              <label>
                <input
                  type="radio"
                  name="supportPerson"
                  value="Yakınım"
                  checked={formData.supportPerson === "Yakınım"}
                  onChange={handleChange}
                  style={{
                    marginBottom: "3px",
                    height: "16px",
                    width: "22px",
                    marginBottom: "10px",
                  }}
                />
                Yakınım
              </label>
            </div>
            <label htmlFor="relationship">Yakınlık Dereceniz</label>
            <input
              type="text"
              id="relationship"
              name="relationship"
              value={formData.relationship}
              onChange={handleChange}
              style={{
                border: "1px solid black",
                color: "#333",
                fontFamily: "mono",
                fontSize: "14px",
                padding: "10px",
                borderRadius: "7px",
                marginBottom: "10px",
              }}
            />

            <label htmlFor="applicationReason">Başvuru Nedeniniz*</label>
            <input
              type="text"
              id="applicationReason"
              name="applicationReason"
              value={formData.applicationReason}
              onChange={handleChange}
              style={{
                border: "1px solid black",
                color: "#333",
                fontFamily: "mono",
                fontSize: "14px",
                padding: "25px",
                borderRadius: "7px",
                marginBottom: "10px",
              }}
              className={formErrors.applicationReason ? "error" : ""}
            />
            {formErrors.applicationReason && (
              <span
                style={{
                  fontSize: "12px",
                  color: "red",
                }}
                className="error-message"
              >
                Bu alan boş bırakılamaz
              </span>
            )}

            <div className="flex">
              <p>KVKK Metnini Okudum Onaylıyorum:</p>

              <label>
                <input
                  type="radio"
                  name="option"
                  value="Onaylıyorum"
                  checked={formData.option === "Onaylıyorum"}
                  onChange={handleChange}
                  style={{
                    marginBottom: "3px",
                    height: "16px",
                    width: "22px",
                    marginBottom: "10px",
                  }}
                />
              </label>
            </div>

            <button
              type="submit"
              className="bg-[#F8CB4E] block mt-[15px] h-12 w-22 
              rounded-lg"
            >
              Gönder
            </button>
          </form>
        </div>
      </div>
      <div className=" justify-self-center">
        <img className="w-100 pt-32" src="/img/katman_1.svg"></img>
        <img className="w-100 py-2" src="/img/Group.svg"></img>
        <img className="w-100 py-2" src="/img/Clip path group.svg"></img>
      </div>
    </div>
  );
};

export default FormPage;