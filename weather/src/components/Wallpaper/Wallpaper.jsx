import wallpaper from "../../assets/img/wallpaper.jpg";
import "./Wallpaper.scss";
const Wallpaper = () => {
  return (
    <>
      <div
        className={
          "wallpaper-container position-fixed d-flex top-0 bottom-0 end-0 start-0"
        }
      ></div>
      <img src={wallpaper} alt="Wallpaper" />
    </>
  );
};

export default Wallpaper;

