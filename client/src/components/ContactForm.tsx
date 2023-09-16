import { EnvelopeIcon, HomeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { useMutation } from "@tanstack/react-query";
import React from "react";
import { PageInfo } from "types/types";
import Map from "./Map";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

type Props = {
  pageInfo: PageInfo;
};

const ContactForm = ({ pageInfo }: Props) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();
  const { contactInfo, phoneNumber, email } = pageInfo;
  const emailMutation = useMutation(
    async (data: any) => {
      await emailjs.send(
        "service_dzygf89",
        "template_n3hymzc",
        data,
        "nRRpaVQofhACCGuRD"
      );
    },
    {
      onSuccess: () => {
        reset();
      },
    }
  );

  return (
    <div className="relative bg-white">
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50" />
      </div>
      <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
        <div className="bg-gray-50 py-16 px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
          <div className="mx-auto max-w-lg">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Skontaktuj się z nami
            </h2>
            <p className="mt-3 text-lg leading-6 text-gray-500">
              {contactInfo}
            </p>
            <dl className="mt-8 text-base text-gray-500">
              <div className="mt-6">
                <dt className="sr-only">Adres</dt>
                <dd className="flex">
                  <HomeIcon
                    className="h-6 w-6 flex-shrink-0 text-gray-400"
                    aria-hidden="true"
                  />
                  <span className="ml-3">Stróżówka 192, 38-300 Gorlice</span>
                </dd>
              </div>
              <div className="mt-3">
                <dt className="sr-only">Numer telefonu</dt>
                <dd className="flex">
                  <PhoneIcon
                    className="h-6 w-6 flex-shrink-0 text-gray-400"
                    aria-hidden="true"
                  />
                  <span className="ml-3">{phoneNumber}</span>
                </dd>
              </div>
              <div className="mt-3">
                <dt className="sr-only">Email</dt>
                <dd className="flex">
                  <EnvelopeIcon
                    className="h-6 w-6 flex-shrink-0 text-gray-400"
                    aria-hidden="true"
                  />
                  <span className="ml-3">{email}</span>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="bg-white py-16 px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
          <div className="mx-auto max-w-lg lg:max-w-none">
            <div className="mb-4">
              {emailMutation.isSuccess && (
                <div
                  className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
                  role="alert"
                >
                  <strong className="font-bold">Dziękujemy! </strong>
                  <span className="block sm:inline">
                    Twoja wiadomość została wysłana. <br /> Skontaktujemy się z
                    Tobą najszybciej jak to możliwe.
                  </span>
                </div>
              )}
            </div>
            <form
              onSubmit={handleSubmit((data) => emailMutation.mutate(data))}
              className="grid grid-cols-1 gap-y-6"
            >
              <div>
                <label htmlFor="name" className="sr-only">
                  Imię i nazwisko
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name", { required: true })}
                  autoComplete="name"
                  className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Imię i nazwisko"
                />
                {errors.name && (
                  <div className="text-red-500 text-sm">
                    To pole jest wymagane
                  </div>
                )}
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  {...register("email", {
                    required: true,
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Niepoprawny adres email",
                    },
                  })}
                  autoComplete="email"
                  className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Email"
                />
                {errors.email && (
                  <div className="text-red-500 text-sm">
                    To pole jest wymagane i musi zawierać poprawny adres email
                  </div>
                )}
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">
                  Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  {...register("phone", {
                    required: true,
                    minLength: 9,
                    pattern: {
                      value: /^[0-9]*$/,
                      message: "To pole musi zawierać tylko cyfry",
                    },
                  })}
                  autoComplete="tel"
                  className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Telefon"
                />
                {errors.phone && (
                  <div className="text-red-500 text-sm">
                    To pole jest wymagane i musi zawierać co najmniej 9 cyfr
                  </div>
                )}
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  {...register("message", { required: true })}
                  rows={4}
                  className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Waidomość"
                  defaultValue={""}
                />
                {errors.message && (
                  <div className="text-red-500 text-sm">
                    To pole nie może być puste
                  </div>
                )}
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-6 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Wyślij
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Map />
    </div>
  );
};

export default ContactForm;
