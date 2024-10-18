import React from "react";
import { HomeIcon, RightPointerMin } from "../../icons";
import { Link } from "react-router-dom";

const BreadCrumb = () => {
  return (
    <div className="flex relative left-12 top-4" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <Link
            to="/"
            className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
          >
            <HomeIcon />
            Home
          </Link>
        </li>
        <li>
          <div className="flex items-center">
            <RightPointerMin />
            <Link
              to="/"
              className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white"
            >
              Page 2
            </Link>
          </div>
        </li>
        <li aria-current="page">
          <div className="flex items-center">
            <RightPointerMin />
            <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
              Page 3
            </span>
          </div>
        </li>
      </ol>
    </div>
  );
};

export default BreadCrumb;
