"use client";
import Progressbar from '@/components/common/ProgressBar/ProgressBar';
import useTheme from '@/hooks/useTheme';
import { ScaleLoader } from 'react-spinners';

const Loading = () => { 
  const [theme] = useTheme();
  const themeColors = {
    dark: "#ffffff",
    light: "#000000",
  };

  const color = themeColors[theme] ?? themeColors.light;
 ;

  return (
    <div className={`pt-[68px] h-screen w-full ${color === "#000000" ? "bg-[#fff]" : "bg-[#000]"}`}>
      <Progressbar/> 
      <div className="flex justify-center items-center h-screen w-full">
        <ScaleLoader
          color={color === "#000000" ? "#000000" : "#ffffff"}
          loading={true}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    </div>
  );
};

export default Loading;

