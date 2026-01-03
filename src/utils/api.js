// Simple helper to build API paths using VITE_API_URL when provided.
export const BASE_URL = import.meta.env.VITE_API_URL || "";

export const apiPath = (path) => `${BASE_URL.replace(/\/$/, "")}${path}`;
