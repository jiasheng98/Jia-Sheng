import { useEffect } from "react";
import AOS from "aos";
import MyLayout from "../../components/MyLayout";

const Urcheckin = () => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <MyLayout title="CW Rewards">
      <div>
        <p>
          hi
        </p>
      </div>
    </MyLayout>
  );
};

export default Urcheckin;
