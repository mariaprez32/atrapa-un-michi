import React from "react";
import { useForm } from "react-hook-form";
import "./AdoptForm.css";
import Button from "../Button/Button";

export const AdoptForm = ({ cat }) => {
  //desestructuración del useForm
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();
  //isSubmitting (empieza false) maneja el estado de los datos (si se están enviando (true) o no)
  const onSubmit = async (data) => {
    try {
      //simular que hace una petición de enviar el formulario (postear con fetch)
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(data); //en vez de esto habría que mandarlos a un servidor
    } catch (error) {
      setError("root", {
        message: "There was a problem in your submission. Try again.",
      });
    }
  };

  return (
    // handleSubmit valida los datos y si está bien los printea (o los envía al servidor)
    <form className="adopt-form" onSubmit={handleSubmit(onSubmit)}>
      <h3>Adopt {cat.name}</h3>
      <p>
        Please complete all sections of this form to apply for adoption. We'll
        review your application and contact you within 2-3 business days.
      </p>

      {/* los inputs son registrados (y por lo tanto manejados por useForm) y se les asigna un nombre para distinguirlos */}

      <label htmlFor="firstName">First Name</label>
      <input
        className="adopt-input"
        {...register("firstName", {
          required: "First name is required",
          minLength: {
            value: 2,
            message: "First name must be at least 2 characters",
          },
          pattern: {
            value: /^[a-zA-Z]+$/,
            message: "Only letters are allowed",
          },
        })}
        type="text"
        placeholder="First Name"
        id="firstName"
      />
      {errors.firstName && (
        <p className="form-error-text">{errors.firstName.message}</p>
      )}

<label htmlFor="lastName">Last Name</label>
      <input
        className="adopt-input"
        {...register("lastName", {
          required: "Last name is required",
          minLength: {
            value: 2,
            message: "Last name must be at least 2 characters",
          },
          pattern: {
            value: /^[a-zA-Z]+$/,
            message: "Only letters are allowed",
          },
        })}
        type="text"
        placeholder="Last Name"
        id="lastName"
      />
      {errors.lastName && (
        <p className="form-error-text">{errors.lastName.message}</p>
      )}

<label htmlFor="phone">Phone</label>
      <input
        className="adopt-input"
        {...register("phone", {
          required: "Phone number is required",
          pattern: {
            value: /^(?:\+34|0034|34)?[6789]\d{8}$/,
            message: "Invalid Spanish phone number",
          },
        })}
        type="tel"
        placeholder="Phone Number"
        id="phone"
      />
      {errors.phone && (
        <p className="form-error-text">{errors.phone.message}</p>
      )}
 <label htmlFor="email">Email</label>
      <input
        className="adopt-input"
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: "Invalid email address",
          },
        })}
        type="email"
        placeholder="Email"
        id="email"
      />
      {errors.email ? (
        <p className="form-error-text">{errors.email.message}</p>
      ) : null}
 <label htmlFor="city">City</label>
      <input
        className="adopt-input"
        {...register("city", {
          required: "City is required",
          minLength: {
            value: 2,
            message: "City must be at least 2 characters",
          },
          pattern: {
            value: /^[a-zA-ZÀ-ÿ\s-]+$/,
            message: "Only letters, spaces, and hyphens are allowed",
          },
        })}
        type="text"
        placeholder="City"
        id="city"
      />
      {errors.city && <p className="form-error-text">{errors.city.message}</p>}
      
      <label htmlFor="autonomousCommunity">Autonomous Community</label>
      <select
       id="autonomousCommunity"
        className="adopt-input"
        {...register("autonomousCommunity", {
          required: "Autonomous community is required",
        })}
      >
        <option value="">Select an autonomous community</option>
        <option value="Andalucía">Andalucía</option>
        <option value="Aragón">Aragón</option>
        <option value="Asturias">Asturias</option>
        <option value="Baleares">Baleares</option>
        <option value="Canarias">Canarias</option>
        <option value="Cantabria">Cantabria</option>
        <option value="Castilla-La Mancha">Castilla-La Mancha</option>
        <option value="Castilla y León">Castilla y León</option>
        <option value="Cataluña">Cataluña</option>
        <option value="Ceuta">Ceuta</option>
        <option value="Comunidad Valenciana">Comunidad Valenciana</option>
        <option value="Extremadura">Extremadura</option>
        <option value="Galicia">Galicia</option>
        <option value="La Rioja">La Rioja</option>
        <option value="Madrid">Madrid</option>
        <option value="Melilla">Melilla</option>
        <option value="Murcia">Murcia</option>
        <option value="Navarra">Navarra</option>
        <option value="País Vasco">País Vasco</option>
      </select>
      {errors.autonomousCommunity && (
        <p className="form-error-text">{errors.autonomousCommunity.message}</p>
      )}

      <textarea
        className="adopt-text-area"
        {...register("aboutMe", {
          maxLength: {
            value: 500,
            message: "Maximum length is 500 characters",
          },
        })}
        placeholder="Tell us a little about yourself and why you want to adopt (optional)."
        rows="5"
      />
      {errors.aboutMe && (
        <p className="form-error-text">{errors.aboutMe.message}</p>
      )}

      <Button
        disabled={isSubmitting}
        type="submit"
        buttonText={isSubmitting ? "Loading..." : "Submit"}
      ></Button>
      {errors.root ? (
        <p className="form-error-text">{errors.root.message}</p>
      ) : null}
    </form>
  );
};

export default AdoptForm;
