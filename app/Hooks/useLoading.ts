import { useEffect, useState } from "react";

const useLoading = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    let timeout: number | undefined;

    const finishLoading = () => {
      timeout = window.setTimeout(() => {
        setLoading(false);
        document.body.style.overflow = "auto";
      }, 1000);
    };

    if (document.readyState === "complete") {
      finishLoading();
    } else {
      window.addEventListener("load", finishLoading, { once: true });
    }

    return () => {
      window.removeEventListener("load", finishLoading);
      if (timeout !== undefined) window.clearTimeout(timeout);
      document.body.style.overflow = "";
    };
  }, []);

  return loading;
};

export default useLoading;
