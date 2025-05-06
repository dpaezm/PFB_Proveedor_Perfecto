import { useState } from "react";
import { searchProductService } from "../services/productService";
import { toast } from "react-toastify";

export default function useProductSearch() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleSearch(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const data = await searchProductService(input);
      setResults(data);
    } catch (error) {
      setError(error.message);
      toast.error(error.message);
      setResults([]);
    } finally {
      setLoading(false);
    }
  }
  return {
    input,
    setInput,
    results,
    loading,
    error,
    handleSearch,
  };
}
