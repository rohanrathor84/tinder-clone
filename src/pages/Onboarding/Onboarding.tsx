import React, { useState } from "react";
import tinderLogoName from "../../assets/tinder-logo-with-name.png";
import "./Onboarding.scss";
import { logout } from "../../firebase";
import { useNavigate } from "react-router-dom";

const Onboarding: React.FC = () => {
  const [formData, setFormData] = useState({
    user_id: "",
    first_name: "",
    last_name: "",
    dob_day: "",
    dob_month: "",
    dob_year: "",
    show_gender: false,
    gender_identity: "man",
    gender_interest: "women",
    email: "",
    img_url: "",
    about: "",
    matches: [],
    profilePictures: [{ id: 1, name: 'Shanaya', image: 'https://via.placeholder.com/100' },
    { id: 2, name: 'Kiara', image: 'https://via.placeholder.com/100' },
    { id: 3, name: 'Rutvi', image: 'https://via.placeholder.com/100' },
    { id: 4, name: 'Shrey', image: 'https://via.placeholder.com/100' },
    { id: 5, name: 'Sakchhi', image: 'https://via.placeholder.com/100' },
    { id: 6, name: 'Sakchhi', image: 'https://via.placeholder.com/100' },]
  });
  const navigate = useNavigate();

  const handleSubmit = () => { };

  const handleChange = (e: any) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    const name = e.target.name;
    console.log("value" + value, "name" + name);

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  console.log(formData);

  return (
    <div className="onboarding-container">
      <nav>
        <div className="Onboarding__logo__container">
          <img
            className="Onboarding__logo"
            src={tinderLogoName}
            alt="color tinder logo"
          />
        </div>
      </nav>
      <div className="onboarding__div">
        <h2 className="on-boadring-heading">CREATE ACCOUNT</h2>
        <form className="on-boadring-form" onSubmit={handleSubmit}>
          <section className="detail-section">
            <div className="your-name">
              <div className="name">
                <label htmlFor="first_name">
                  First Name
                </label>
                <input
                  id="first_name"
                  type="text"
                  name="first_name"
                  placeholder="First Name"
                  required={true}
                  value={formData.first_name}
                  onChange={handleChange}
                />
              </div>
              <div className="name">
                <label htmlFor="last_name">Last Name</label>
                <input
                  id="last_name"
                  type="text"
                  name="last_name"
                  placeholder="Last Name"
                  required={true}
                  value={formData.last_name}
                  onChange={handleChange}
                />
              </div>
            </div>
            <label htmlFor="dob" className="heading__label">
              Birthday
            </label>
            <div className="multiple__input__container">
              <input
                id="dob_day"
                type="number"
                name="dob_day"
                placeholder="DD"
                required={true}
                value={formData.dob_day}
                onChange={handleChange}
              />
              <input
                id="dob_month"
                type="number"
                name="dob_month"
                placeholder="MM"
                required={true}
                value={formData.dob_month}
                onChange={handleChange}
              />
              <input
                id="dob_year"
                type="number"
                name="dob_year"
                placeholder="YYYY"
                required={true}
                value={formData.dob_year}
                onChange={handleChange}
              />
            </div>
            <label htmlFor="gender" className="heading__label">
              Gender
            </label>
            <div className="multiple__input__container">
              <input
                id="man_gender"
                type="radio"
                name="gender_identity"
                value="man"
                checked={formData.gender_identity === "man"}
                onChange={handleChange}
              />
              <label htmlFor="man_gender">Man</label>
              <input
                id="women_gender"
                type="radio"
                name="gender_identity"
                value="women"
                checked={formData.gender_identity === "women"}
                onChange={handleChange}
              />
              <label htmlFor="women_gender">Women</label>
              <input
                id="other_gender"
                type="radio"
                name="gender_identity"
                value="other"
                checked={formData.gender_identity === "other"}
                onChange={handleChange}
              />
              <label htmlFor="other_gender">Other</label>
            </div>
            <label htmlFor="show_me" className="heading__label">
              Show Me
            </label>
            <div className="multiple__input__container">
              <input
                id="man_gender_interest"
                type="radio"
                name="gender_interest"
                value="man"
                checked={formData.gender_interest === "man"}
                onChange={handleChange}
              />
              <label htmlFor="man_gender_interest">Man</label>
              <input
                id="women_gender_interest"
                type="radio"
                name="gender_interest"
                value="women"
                checked={formData.gender_interest === "women"}
                onChange={handleChange}
              />
              <label htmlFor="women_gender_interest">Women</label>
              <input
                id="everyone_gender_interest"
                type="radio"
                name="gender_interest"
                checked={formData.gender_interest === "everyone"}
                value="everyone"
                onChange={handleChange}
              />
              <label htmlFor="everyone_gender_interest">Everyone</label>
            </div>
            <label htmlFor="about" className="heading__label">
              About me
            </label>
            <input
              id="about"
              type="text"
              name="about"
              placeholder="I like long walk..."
              required={true}
              value={formData.about}
              onChange={handleChange}
            />
            <div className="show__gender">
              <input
                id="show_gender"
                type="checkbox"
                name="show_gender"
                required={true}
                checked={formData.show_gender}
                onChange={handleChange}
              />
              <label htmlFor="show_gender">Show gender on my profile</label>
            </div>
            <input type="submit" />
          </section>
          <section className="image-section">
            <label htmlFor="profile_photo" className="image-label">
              Profile picture
            </label>
            <div className="profile-picture-grid">
              {formData.profilePictures.map((value) =>
                (<img key={value.id} className="add-profile-picture" src={value.image} alt={value.name} />)
              )}
              {formData.profilePictures.length !== 6 ? <div className="add-profile-picture"></div> : <></>}
            </div>
          </section>
        </form>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Onboarding;
