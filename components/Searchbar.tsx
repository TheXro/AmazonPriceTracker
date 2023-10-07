"use client";
import { scrapeAndStoreProduct } from "@/lib/actions";
import React, { FormEvent, useState } from "react";

const isValidAmazonProductURL = (url: String) => {
  try {
    const parsedURL = new URL(url);
    const hostname = parsedURL.hostname;
    if (
      hostname.includes("amazon.com") ||
      hostname.endsWith("amazon") ||
      hostname.includes("amazon")
    ) {
      return true;
    }
  } catch (error) {
    return false;
  }
};

const Searchbar = () => {
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isValidLink = isValidAmazonProductURL(searchTerm);
    if (!isValidLink) {
      return alert("Invalid Amazon Product URL");
    }
    try {
      setIsLoading(true);


      //scraper code
      const product = await scrapeAndStoreProduct(searchTerm);

    } catch (error) {
      console.log(error)
    } finally{
      setIsLoading(false);
    }
  };
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  return (
    <form
      action=''
      className='flex flex-wrap gap-4 mt-12 '
      onSubmit={handleSubmit}
    >
      <input
        type='text'
        placeholder='Enter product link'
        className='searchbar-input'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type='submit' className='searchbar-btn'
      disabled={searchTerm === ""}
      >
        {isLoading ? "Loading..." : "Search"}
      </button>
    </form>
  );
};

export default Searchbar;
