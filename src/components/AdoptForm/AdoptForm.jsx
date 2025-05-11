import React from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import "./AdoptForm.css";
import Button from "../Button/Button";

export const AdoptForm = ({ cat }) => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(data);
    } catch (error) {
      setError("root", {
        message: t("adoptForm.error"),
      });
    }
  };

  return (
    <form className="adopt-form" onSubmit={handleSubmit(onSubmit)}>
      <h3>{t("adoptForm.title", { name: cat.name })}</h3>
      <p>{t("adoptForm.description")}</p>

      <label htmlFor="firstName">{t("adoptForm.firstName.label")}</label>
      <input
        className="adopt-input"
        {...register("firstName", {
          required: t("adoptForm.firstName.required"),
          minLength: {
            value: 2,
            message: t("adoptForm.firstName.minLength"),
          },
          pattern: {
            value: /^[a-zA-Z]+$/,
            message: t("adoptForm.firstName.pattern"),
          },
        })}
        type="text"
        placeholder={t("adoptForm.firstName.placeholder")}
        id="firstName"
      />
      {errors.firstName && (
        <p className="form-error-text">{errors.firstName.message}</p>
      )}

      <label htmlFor="lastName">{t("adoptForm.lastName.label")}</label>
      <input
        className="adopt-input"
        {...register("lastName", {
          required: t("adoptForm.lastName.required"),
          minLength: {
            value: 2,
            message: t("adoptForm.lastName.minLength"),
          },
          pattern: {
            value: /^[a-zA-Z]+$/,
            message: t("adoptForm.lastName.pattern"),
          },
        })}
        type="text"
        placeholder={t("adoptForm.lastName.placeholder")}
        id="lastName"
      />
      {errors.lastName && (
        <p className="form-error-text">{errors.lastName.message}</p>
      )}

      <label htmlFor="phone">{t("adoptForm.phone.label")}</label>
      <input
        className="adopt-input"
        {...register("phone", {
          required: t("adoptForm.phone.required"),
          pattern: {
            value: /^(?:\+34|0034|34)?[6789]\d{8}$/,
            message: t("adoptForm.phone.pattern"),
          },
        })}
        type="tel"
        placeholder={t("adoptForm.phone.placeholder")}
        id="phone"
      />
      {errors.phone && (
        <p className="form-error-text">{errors.phone.message}</p>
      )}

      <label htmlFor="email">{t("adoptForm.email.label")}</label>
      <input
        className="adopt-input"
        {...register("email", {
          required: t("adoptForm.email.required"),
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: t("adoptForm.email.pattern"),
          },
        })}
        type="email"
        placeholder={t("adoptForm.email.placeholder")}
        id="email"
      />
      {errors.email && (
        <p className="form-error-text">{errors.email.message}</p>
      )}

      <label htmlFor="city">{t("adoptForm.city.label")}</label>
      <input
        className="adopt-input"
        {...register("city", {
          required: t("adoptForm.city.required"),
          minLength: {
            value: 2,
            message: t("adoptForm.city.minLength"),
          },
          pattern: {
            value: /^[a-zA-ZÀ-ÿ\s-]+$/,
            message: t("adoptForm.city.pattern"),
          },
        })}
        type="text"
        placeholder={t("adoptForm.city.placeholder")}
        id="city"
      />
      {errors.city && <p className="form-error-text">{errors.city.message}</p>}

      <label htmlFor="autonomousCommunity">{t("adoptForm.autonomousCommunity.label")}</label>
      <select
        id="autonomousCommunity"
        className="adopt-input"
        {...register("autonomousCommunity", {
          required: t("adoptForm.autonomousCommunity.required"),
        })}
      >
        <option value="">{t("adoptForm.autonomousCommunity.placeholder")}</option>
        {[
          "Andalucía", "Aragón", "Asturias", "Baleares", "Canarias", "Cantabria",
          "Castilla-La Mancha", "Castilla y León", "Cataluña", "Ceuta",
          "Comunidad Valenciana", "Extremadura", "Galicia", "La Rioja",
          "Madrid", "Melilla", "Murcia", "Navarra", "País Vasco"
        ].map(region => (
          <option key={region} value={region}>{region}</option>
        ))}
      </select>
      {errors.autonomousCommunity && (
        <p className="form-error-text">{errors.autonomousCommunity.message}</p>
      )}

      <textarea
        className="adopt-text-area"
        {...register("aboutMe", {
          maxLength: {
            value: 500,
            message: t("adoptForm.aboutMe.maxLength"),
          },
        })}
        placeholder={t("adoptForm.aboutMe.placeholder")}
        rows="5"
      />
      {errors.aboutMe && (
        <p className="form-error-text">{errors.aboutMe.message}</p>
      )}

      <Button
        disabled={isSubmitting}
        type="submit"
        buttonText={isSubmitting ? t("adoptForm.loading") : t("adoptForm.submit")}
      />
      {errors.root && (
        <p className="form-error-text">{errors.root.message}</p>
      )}
    </form>
  );
};

export default AdoptForm;
