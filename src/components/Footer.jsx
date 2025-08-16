import React from "react";

export default function Footer() {
  return (
    <footer className="py-6 text-center text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700">
      <p>© {new Date().getFullYear()} Abdul Haseeb Khan</p>
    </footer>
  );
}
