import { useState, useEffect } from "react";

import { fetchApi } from "../api";

import { Response } from "../types";

const AbortController = window.AbortController;

export const useFetchApi = (resouce: string, method = "GET", options = {}) => {
    const [isFetching, setIsFetching] = useState(false);
    const [data, setData] = useState(null);
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const controller = new AbortController();

    const startFetch = async (body?: any) => {
        setIsFetching(true);
        setError(null);
        setData(null);
        setResponse(null);

        try {
            const response = await fetchApi(resouce, method, body, {
                signal: controller.signal,
                ...options,
            });

            const res = await response.json();

            setResponse(res);

            if (!response.ok) {
                throw res;
            }

            setData(res.data);
        } catch (err) {
            setError(err);
        } finally {
            setIsFetching(false);
        }
    };

    const cancelFetch = () => controller.abort();

    useEffect(() => {
        return () => {
            controller.abort();
        };
    }, []);

    return {
        isFetching,
        data,
        response,
        error,
        startFetch,
        cancelFetch,
    };
};