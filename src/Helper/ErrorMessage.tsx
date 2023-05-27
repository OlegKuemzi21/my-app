import { useState } from "react";

interface ErrosMessage {
  error: string;
}

export const ErrorMessage = ({ error }: ErrosMessage) => {
  return (
    <div className="border-4  w-[200px] mx-auto mt-6 flex-shrink-0 bg-textC hover:bg-someC border-textC hover:border-someC text-sm  text-white rounded hover:text-textC">
      <p className="text-sm pl-7 py-4 ">{error}</p>
    </div>
  );
};
