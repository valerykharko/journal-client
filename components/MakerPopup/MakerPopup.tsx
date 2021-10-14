import React, { RefObject, useEffect, useRef } from "react";
import { SelectCategory } from "components";
import { useTypedSelector } from "../../hooks/useTypedSelector";

interface MakerPopupProps {
  ownerMakerPopupRef: RefObject<any>;
  makerPopupActive: boolean;
  setMakerPopupActive: Function;
}

const MakerPopup = ({
  ownerMakerPopupRef,
  makerPopupActive,
  setMakerPopupActive,
}: MakerPopupProps) => {
  const { user } = useTypedSelector((state) => state.user);

  const makerPopupRef = useRef();

  const handleOutSideClick = (event) => {
    const path = event.path || (event.composedPath && event.composedPath());
    if (!path.includes(makerPopupRef.current && ownerMakerPopupRef.current)) {
      setMakerPopupActive(false);
    }
  };

  useEffect(() => {
    makerPopupActive
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");

    document.body.addEventListener("click", handleOutSideClick);
  }, [makerPopupActive]);

  return (
    <div
      className={
        makerPopupActive
          ? "backdrop-filter backdrop-blur-sm backdrop-brightness-50 z-10 fixed p-25 transform transition-all duration-500 w-full h-full -translate-y-16"
          : "fixed p-25 transform translate-y-140 transition-all duration-500 w-full h-full"
      }
    >
      <div
        ref={makerPopupRef}
        className="bg-white rounded-xl p-8 w-full h-2/3"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex">
          <SelectCategory />
          <div className="flex justify-center items-center">
            <img
              className="w-7 mr-2 rounded-lg"
              src={`${process.env.API_URL}` + user?.avatar.url}
              alt={user?.avatar.name}
            />
            <span className="text-base">
              {user?.firstName} {user?.secondName}
            </span>
          </div>
        </div>
        <div className="mt-3">
          <input
            className="text-xl font-bold text-opacity-25 focus:outline-none"
            type="text"
            placeholder="Заголовок"
          />
          <textarea
            className="mt-2 text-lg w-full h-80 resize-none focus:outline-none"
            name="blog-info"
            placeholder="Введите текст записи..."
          />
        </div>
        <button className="mt-3 w-40 h-10 rounded-xl bg-purple-500">
          <span className="text-white text-base">Опубликовать</span>
        </button>
      </div>
    </div>
  );
};

export default MakerPopup;
