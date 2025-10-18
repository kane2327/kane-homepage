import { useState } from "react";
import Navigation from "../Navigation";

export default function NavigationExample() {
  const [isDark, setIsDark] = useState(false);
  
  return <Navigation onThemeToggle={() => setIsDark(!isDark)} isDark={isDark} />;
}
