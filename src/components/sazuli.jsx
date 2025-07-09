import { useState } from "react";

export default function Sazuli() {
  const [currentShapeIndex, setCurrentShapeIndex] = useState(0);
  
  const shapes = [
    "M151.88,253.89c-13.34,12.41-4.13,30.17-36.52,34.94C57.13,297.43,5.75,226.8.92,174.37-1.66,146.33-1.3,61.53,36.14,54.61c24.79-4.58,42.83,9.67,70.64.36,30.83-10.32,37.9-43.56,70.91-52.66,27.36-7.55,91.67,5.23,120.85,12.64,23.74,6.04,56.52,16.24,58.63,45.63,1.56,21.72-11.75,17.68-25.48,27.83-41.77,30.88-13.12,73.55-32.26,115.53-17.31,37.96-56.76,50.98-96.3,49.29-15-.64-38.93-10.8-51.25.66Z",
    
    "M154.03,1.11c9.74-1.51,25.74-2.79,32.67,5.42,4.77,5.66,14.24,52.16,21.3,66.92,6.5,13.58,23.18,38.46,35.27,46.87,36.77,25.55,58.95-10.26,97.1,3.32,70.54,25.11,29.57,133.06,2.52,178.79-17.03,28.8-61.23,73.14-93.68,82.76-35,10.37-75.21-10.3-103.26-30.72-12.09-8.8-41.82-41.13-51.14-43.23-23.66-5.34-20.72,22.53-55.73,13.17C-20.95,308.35,2.42,195.21,16.5,152.57,36.28,92.67,85.66,11.71,154.03,1.11Z",
    
    "M222.91,0.91c41.47-6.06,90.07,18.69,98.82,61.89,7.42,36.62-24.72,35.92-48.29,51.35-8.92,5.84-22.45,16.56-25.2,27.17-3.56,13.77,14.07,46.54,14.68,66.68,1.56,51.26-56.08,64.68-95.28,45.44-28.35-13.92-35.64-32.65-55.18-52.01-28.9-28.63-60.22-2.87-87.38-30.28C-36.73,108.74,24.6-4.29,112.41,5.44c17.3,1.92,33.28,16.22,52.18,15.77,20.78-0.5,38.68-17.44,58.32-20.31C281.23,1.4,252.81,7.97,222.91,0.91Z"
  ];

  const handleHover = () => {
    console.log("Hover detected! Current shape index:", currentShapeIndex);
    setCurrentShapeIndex((prevIndex) => (prevIndex + 1) % shapes.length);
  };

  return (
    <div className="flex justify-center items-center py-8">
      <div className="relative">
        <div 
          className="cursor-pointer"
          onMouseEnter={handleHover}
          onClick={handleHover}
          style={{ 
            filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1))'
          }}
        >
          <svg
            width="300"
            height="300"
            viewBox="0 0 400 400"
            className="transition-all duration-500 ease-in-out hover:scale-105"
          >
            <path
              d={shapes[currentShapeIndex]}
              fill="#003399"
              className="transition-all duration-1000 ease-in-out"
              style={{
                transition: 'd 1s ease-in-out'
              }}
            />
          </svg>
        </div>
      </div>
    </div>
  );
}