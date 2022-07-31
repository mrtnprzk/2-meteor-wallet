import React from "react";
import { CheckCircleIcon } from "@heroicons/react/solid";

const RemoveAlert = ({ message }) => {
  return (
    <div className="rounded-md bg-yellow-100 p-4 mt-2">
      <div className="flex">
        <div className="flex-shrink-0">
          <CheckCircleIcon
            className="h-5 w-5 text-yellow-400"
            aria-hidden="true"
          />
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-yellow-600">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default RemoveAlert;
