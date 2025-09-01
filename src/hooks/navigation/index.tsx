// import { usePathname } from "next/navigation";
// import { useState } from "react";

// export const useNavigation = () => {
//   const pathName = usePathname();
//   const [section, setSection] = useState<string>(pathName);
//   const onSetSection = (page: string) => setSection(page);
//   return {
//     section,
//     onSetSection,
//   };
// };

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export const useNavigation = () => {
  const pathName = usePathname();
  const [section, setSection] = useState<string>(pathName);

  useEffect(() => {
    setSection(pathName); // keep state updated when route changes
  }, [pathName]);

  const onSetSection = (page: string) => setSection(page);

  return { section, onSetSection };
};
