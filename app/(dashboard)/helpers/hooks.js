"use client";
import { useEffect, useState } from "react";
import { notification } from "antd";
import Swal from "sweetalert2";

export const useFetch = (func, query = {}, load = true) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(load);
  const [error, setError] = useState("");
  const [params, setParams] = useState(query);

  useEffect(() => {
    if (load) {
      getData(params);
    }
  }, []);

  const getData = async (query) => {
    setLoading(true);
    setError("");
    setParams({ ...params, ...query });

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("No token found in local storage");
      }

      const headers = {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      };

      const response = await fetch(
        "https://app.aipropertyflow.com/api/tenants",
        {
          method: "GET",
          headers: headers,
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      setLoading(false);
      setData(result);
    } catch (error) {
      setLoading(false);
      setError(error.message);
      console.error("Fetch error:", error);
    }
  };

  const clear = () => setData(undefined);
  return [data, getData, { query: params, loading, error, clear }];
};

export const useAction = async (
  func,
  data,
  reload,
  alert = true,
  successMsg
) => {
  const { error, msg, data: d } = await func({ ...data });
  if (error === false) {
    if (reload) {
      reload(d);
    }
    if (alert) {
      notification.success({ message: successMsg || msg || "Success" });
    }
  } else {
    notification.error({ message: msg || "Something went wrong" });
  }
};

export const useActionConfirm = async (
  func,
  data,
  reload,
  message,
  confirmText,
  alert = true
) => {
  const { isConfirmed } = await Swal.fire({
    title: "Are you sure?",
    text: message,
    icon: "warning",
    showCancelButton: true,
  });
  if (isConfirmed) {
    await useAction(func, data, reload, alert);
  }
};

export const useOutSideClick = (ref, func) => {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        func && func();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
};
