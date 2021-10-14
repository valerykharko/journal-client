import React, { useEffect, useState } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { Category } from "interfaces";

const SelectCategory = () => {
  const { categories } = useTypedSelector((state) => state.categories);

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Category>(categories[3]);

  useEffect(() => {
    setSelected(categories[3]);
  }, [categories]);

  return (
    <div className="mr-5">
      <button className="flex justify-center items-center">
        <img
          className="w-7 mr-2 rounded-lg"
          src={`${process.env.API_URL}` + selected?.image.url}
          alt={selected?.image.name}
        />
        <span className="text-base mr-2">{selected?.title}</span>
        <img
          className="w-2"
          src={"/images/arrow-down-icon.png"}
          alt="arrow-down-icon"
        />
      </button>
      {open ? (
        <div className="border-1 border-black">
          <div></div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default SelectCategory;
