"use client";
import { useLocale } from "next-intl";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { useState, useTransition } from "react";

const Language = () => {
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const router = useRouter();
  const [currentLanguage, setCurrentLanguage] = useState(locale);

  const changeLanguage = () => {
    const newLanguage = currentLanguage === "tr" ? "en" : "tr";

    const newPath = pathname.replace(`/${currentLanguage}`, `/${newLanguage}`);

    startTransition(() => {
      router.push(`${newPath}`);
    });

    setCurrentLanguage(newLanguage);
  };

  return (
    <button className="border-0 bg-white" onClick={changeLanguage}>
      {
        <Image
          src={
            currentLanguage === "tr"
              ? "/images/flags/tr.png"
              : "/images/flags/en.png"
          }
          width={24}
          height={24}
          alt="TR flag"
        />
      }
    </button>
  );
};

export default Language;
